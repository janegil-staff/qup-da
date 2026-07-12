// qupda.com - app/pulse/terms/page.js
//
// Hosted Terms of Service for LocalPulse (English). The Norwegian version
// available in the app is the legally binding one. Plain ASCII only.

export const metadata = {
  title: 'LocalPulse - Terms of Service',
  description: 'Terms of Service for LocalPulse, operated by Qup DA.',
};

const LAST_UPDATED = '2026';

const TERMS = [
  ['1. Who we are', 'LocalPulse is operated by Qup DA, company registration number 998185599, Trondheimsveien 102 C, 0565 Oslo, Norway. Questions about these terms can be sent to jan.egil@qupda.com.'],
  ['2. Eligibility', 'You must be at least 18 years old to create an account or use the app. By using the app you represent that you meet this requirement.'],
  ['3. Your account', 'You are responsible for the accuracy of the information on your profile and for keeping your PIN secure. You may delete your account at any time from Settings.'],
  ['4. Community conduct', 'You agree not to harass, threaten, impersonate, or post unlawful, hateful, or sexually explicit content. Accounts that violate these rules may be suspended or removed.'],
  ['5. Content', 'You retain ownership of the photos and text you post, but grant us a licence to display that content within the app to provide the service.'],
  ['6. Meeting safely', 'Meeting new people carries risk. Always meet in public, tell a friend your plans, and use your judgment. We do not conduct background checks on users.'],
  ['7. Reporting and blocking', 'You can report or block any user from their profile or from a post. We review reports and act against violating accounts, normally within 24 hours.'],
  ['8. Termination', 'We may suspend or terminate accounts that violate these terms. You may stop using the app and delete your account at any time.'],
  ['9. Disclaimer', 'The app is provided "as is". To the extent permitted by law, Qup DA is not liable for indirect losses or for losses arising from contact between users.'],
  ['10. Governing law', 'These terms are governed by Norwegian law. Disputes fall under the Norwegian courts, with Oslo District Court as legal venue.'],
  ['11. Changes', 'We may update these terms. Continued use after a change means you accept the updated terms.'],
];

const wrap = { maxWidth: 720, margin: '0 auto', padding: '48px 24px', fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, sans-serif', color: '#1a1a1a', lineHeight: 1.6 };
const h1 = { fontSize: 30, fontWeight: 800, marginBottom: 4 };
const updated = { color: '#666', fontSize: 14, marginBottom: 8 };
const notice = { background: '#f4f4f5', borderLeft: '3px solid #999', padding: '10px 14px', fontSize: 13, color: '#444', margin: '16px 0 32px' };
const h2 = { fontSize: 18, fontWeight: 700, marginTop: 28, marginBottom: 6 };
const para = { fontSize: 15, color: '#333', margin: 0 };

export default function TermsPage() {
  return (
    <main style={wrap}>
      <h1 style={h1}>Terms of Service</h1>
      <div style={updated}>Last updated: {LAST_UPDATED}</div>
      <div style={notice}>
        The Norwegian version of these terms, available in the LocalPulse app, is the legally binding one.
      </div>
      {TERMS.map(([h, body]) => (
        <div key={h}>
          <h2 style={h2}>{h}</h2>
          <p style={para}>{body}</p>
        </div>
      ))}
    </main>
  );
}