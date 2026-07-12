// qupda.com — app/api/pulse/deletion-request/route.js
//
// Receives an account-deletion request from /pulse/delete and emails the
// operator so it can be verified and actioned. Does NOT delete anything itself:
// this endpoint is public and unauthenticated, so it must never be able to
// remove an account by email alone. It only creates a request.
//
// Requires RESEND_API_KEY in the environment (same Resend account the app uses).
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Naive in-memory rate limit per IP. On serverless this resets per cold start,
// which is fine as a light abuse brake; for stronger limits use a KV store.
const hits = new Map();
function rateLimited(ip) {
  const now = Date.now();
  const windowMs = 60 * 1000;
  const max = 3;
  const arr = (hits.get(ip) || []).filter((t) => now - t < windowMs);
  arr.push(now);
  hits.set(ip, arr);
  return arr.length > max;
}

export async function POST(req) {
  try {
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'unknown';
    if (rateLimited(ip)) {
      return Response.json({ error: 'Too many requests. Please try again shortly.' }, { status: 429 });
    }

    const { email, username, reason } = await req.json();

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return Response.json({ error: 'A valid account email is required.' }, { status: 400 });
    }

    const safe = (s) => String(s || '').slice(0, 500).replace(/[<>]/g, '');

    await resend.emails.send({
      from: 'LocalPulse <noreply@qup.dating>',
      to: 'jan.egil@qupda.com',
      replyTo: safe(email),
      subject: `Account deletion request — ${safe(email)}`,
      text: [
        'A LocalPulse account-deletion request was submitted from the web form.',
        '',
        `Email:    ${safe(email)}`,
        `Username: ${safe(username) || '(not given)'}`,
        `Reason:   ${safe(reason) || '(not given)'}`,
        `IP:       ${ip}`,
        `Time:     ${new Date().toISOString()}`,
        '',
        'Verify the requester controls this account, then delete it and reply to confirm.',
        'Per the privacy policy, complete within 30 days.',
      ].join('\n'),
    });

    return Response.json({ ok: true });
  } catch (err) {
    console.error('deletion-request error', err);
    return Response.json({ error: 'Could not submit request. Email jan.egil@qupda.com directly.' }, { status: 500 });
  }
}