// qupda.com - app/pulse/privacy/page.js
//
// Hosted Privacy Policy for LocalPulse (English). The Norwegian version
// available in the app is the legally binding one. Plain ASCII only.
//
// Controller: Qup DA, org.nr 998185599, Trondheimsveien 102 C, 0565 Oslo.

export const metadata = {
  title: 'LocalPulse - Privacy Policy',
  description: 'Privacy Policy for LocalPulse, operated by Qup DA.',
};

const LAST_UPDATED = '2026';

const PRIVACY = [
  ['1. Data controller', 'Qup DA, company registration number 998185599, Trondheimsveien 102 C, 0565 Oslo, Norway, is the controller of the personal data described here. Contact us at jan.egil@qupda.com for privacy matters.'],
  ['2. What we collect', 'Account details (email address, PIN stored as a hash, display name, date of birth/age, gender), profile content (photos, bio, interests), approximate location, messages and images you send in chat, your online status, and device and notification tokens for push notifications.'],
  ['3. Location', 'We use your approximate location to show and rank people nearby. Your coordinates are rounded to roughly 100 metres before storage, so your exact position cannot be reconstructed from the distances shown to other users. You can disable location in your device settings, though discovery depends on it.'],
  ['4. Why we process it, and our legal basis', 'Operating your account: to perform our contract with you (GDPR Art. 6(1)(b)). Location-based discovery and push notifications: consent (Art. 6(1)(a)), which you may withdraw at any time. Safety, moderation, and abuse prevention: legitimate interests (Art. 6(1)(f)).'],
  ['5. Who we share it with', 'Your profile is visible to other users of the app. We use processors to run the service: DigitalOcean (hosting and database, EU), MongoDB Atlas (database, EU), Cloudinary (image storage, USA), Resend (email delivery, USA), and Expo (push notifications, USA). Transfers to the USA are safeguarded by the European Commission Standard Contractual Clauses. We do not sell your personal data.'],
  ['6. How long we keep it', 'We keep your data while your account is active. When you delete your account from Settings, your profile, photos, messages, blocks, and reports are permanently removed. Technical logs and backups are retained for up to 90 days before deletion.'],
  ['7. Your rights', 'You have the right to access, correct, and delete your personal data, and to restrict or object to processing and to data portability. Contact jan.egil@qupda.com. You may also lodge a complaint with Datatilsynet, the Norwegian Data Protection Authority.'],
  ['8. Children', 'LocalPulse is not intended for anyone under 18. We do not knowingly collect data about children.'],
  ['9. Security', 'We use industry-standard measures to protect your data, including encryption of PINs. No service is perfectly secure.'],
  ['10. Changes', 'We will notify you in the app before material changes to this policy take effect.'],
];

const wrap = { maxWidth: 720, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', color: '#1a1a1a', lineHeight: 1.6 };
const h1 = { fontSize: 30, fontWeight: 800, marginBottom: 4 };
const updated = { color: '#666', fontSize: 14, marginBottom: 8 };
const notice = { background: '#f4f4f5', borderLeft: '3px solid #999', padding: '10px 14px', fontSize: 13, color: '#444', margin: '16px 0 32px' };
const h2 = { fontSize: 18, fontWeight: 700, marginTop: 28, marginBottom: 6 };
const para = { fontSize: 15, color: '#333', margin: 0 };

export default function PrivacyPage() {
  return (
    <main style={wrap}>
      <h1 style={h1}>Privacy Policy</h1>
      <div style={updated}>Last updated: {LAST_UPDATED}</div>
      <div style={notice}>
        The Norwegian version of this policy, available in the LocalPulse app, is the legally binding one.
      </div>
      {PRIVACY.map(([h, body]) => (
        <div key={h}>
          <h2 style={h2}>{h}</h2>
          <p style={para}>{body}</p>
        </div>
      ))}
    </main>
  );
}