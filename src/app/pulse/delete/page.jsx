// qupda.com — app/pulse/delete/page.js
//
// Account-deletion page for LocalPulse. Required by App Store Guideline
// 5.1.1(v): users (including those who have uninstalled) must be able to
// initiate account deletion. Explains the in-app path AND provides a web
// request form for anyone without the app.
//
// The form does NOT delete directly — a public form can't authenticate a user,
// and an unauthenticated "delete by email" endpoint would let anyone wipe
// anyone's account. It creates a verified request that emails the operator,
// who actions it. That's the safe, standard pattern.
'use client';

import { useState } from 'react';

const wrap = { maxWidth: 640, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', color: '#1a1a1a', lineHeight: 1.6 };
const h1 = { fontSize: 30, fontWeight: 800, marginBottom: 16 };
const h2 = { fontSize: 18, fontWeight: 700, marginTop: 32, marginBottom: 8 };
const p = { fontSize: 15, color: '#333' };
const ol = { fontSize: 15, color: '#333', paddingLeft: 20, lineHeight: 1.9 };
const label = { display: 'block', fontSize: 13, fontWeight: 700, color: '#555', marginTop: 18, marginBottom: 6 };
const input = { width: '100%', padding: '11px 12px', fontSize: 15, border: '1px solid #ccc', borderRadius: 8, boxSizing: 'border-box', fontFamily: 'inherit' };
const btn = { marginTop: 20, padding: '13px 20px', fontSize: 15, fontWeight: 700, color: '#fff', background: '#268efc', border: 0, borderRadius: 10, cursor: 'pointer' };
const btnDisabled = { ...btn, background: '#9cc7f5', cursor: 'default' };
const note = { fontSize: 13, color: '#666', marginTop: 8 };
const box = { background: '#f4f4f5', borderRadius: 10, padding: '16px 18px', margin: '20px 0' };
const ok = { ...box, background: '#e8f6ec', border: '1px solid #6fce8e' };
const err = { ...box, background: '#fbeaea', border: '1px solid #e39191', color: '#a12' };

export default function DeletePage() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [reason, setReason] = useState('');
  const [state, setState] = useState('idle'); // idle | sending | done | error
  const [errMsg, setErrMsg] = useState('');

  async function submit() {
    if (!email.trim()) { setErrMsg('Please enter the email on your account.'); setState('error'); return; }
    setState('sending'); setErrMsg('');
    try {
      const res = await fetch('/api/pulse/deletion-request', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), username: username.trim(), reason: reason.trim() }),
      });
      if (!res.ok) throw new Error((await res.json().catch(() => ({}))).error || 'Request failed');
      setState('done');
    } catch (e) {
      setErrMsg(e.message || 'Something went wrong. Please email jan.egil@qupda.com directly.');
      setState('error');
    }
  }

  return (
    <main style={wrap}>
      <h1 style={h1}>Delete your LocalPulse account</h1>
      <p style={p}>
        Deleting your account permanently removes your profile, photos, messages,
        blocks, and reports. This cannot be undone.
      </p>

      <h2 style={h2}>Delete from the app</h2>
      <p style={p}>If you still have LocalPulse installed, the fastest way is in the app:</p>
      <ol style={ol}>
        <li>Open LocalPulse and go to <strong>Settings</strong>.</li>
        <li>Tap <strong>Delete account</strong>.</li>
        <li>Confirm. Your data is removed immediately.</li>
      </ol>

      <h2 style={h2}>Or request deletion here</h2>
      <p style={p}>
        If you no longer have the app installed, submit a request below. We verify
        the request and delete the account within 30 days, and email you to confirm.
      </p>

      {state === 'done' ? (
        <div style={ok}>
          <strong>Request received.</strong> We\u2019ll verify it and delete your account
          within 30 days. You\u2019ll get a confirmation email at the address you gave.
        </div>
      ) : (
        <>
          {state === 'error' ? <div style={err}>{errMsg}</div> : null}
          <label style={label}>Account email *</label>
          <input style={input} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />

          <label style={label}>Username (optional)</label>
          <input style={input} value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Helps us find your account faster" />

          <label style={label}>Reason (optional)</label>
          <input style={input} value={reason} onChange={(e) => setReason(e.target.value)} placeholder="" />

          <button
            style={state === 'sending' ? btnDisabled : btn}
            onClick={state === 'sending' ? undefined : submit}
            disabled={state === 'sending'}
          >
            {state === 'sending' ? 'Sending\u2026' : 'Request account deletion'}
          </button>
          <p style={note}>
            Prefer email? Write to <a href="mailto:jan.egil@qupda.com">jan.egil@qupda.com</a> with
            the email address on your account.
          </p>
        </>
      )}
    </main>
  );
}