// qupda.com — app/pulse/terms/page.js
//
// Hosted Terms of Service for LocalPulse. Public URL for App Store Connect and
// the in-app link. Norwegian (no) is authoritative; English (en) follows as a
// courtesy translation. Keep in sync with the app's src/lib/legalContent.js.

export const metadata = {
  title: 'LocalPulse — Vilkår for bruk / Terms of Service',
  description: 'Vilkår for bruk av LocalPulse, levert av Qup DA.',
};

const LAST_UPDATED = '2026';

const TERMS_NO = [
  ['1. Hvem vi er', 'LocalPulse driftes av Qup DA, organisasjonsnummer 998185599, Trondheimsveien 102 C, 0565 Oslo, Norge. Spørsmål om disse vilkårene kan rettes til jan.egil@qupda.com.'],
  ['2. Aldersgrense', 'Du må være minst 18 år for å opprette konto eller bruke appen. Ved å bruke appen bekrefter du at du oppfyller dette kravet.'],
  ['3. Kontoen din', 'Du er ansvarlig for at opplysningene på profilen din er riktige, og for å holde PIN-koden din hemmelig. Du kan slette kontoen når som helst fra Innstillinger.'],
  ['4. Oppførsel i fellesskapet', 'Du skal ikke trakassere, true, utgi deg for å være andre, eller publisere ulovlig, hatefullt eller seksuelt eksplisitt innhold. Kontoer som bryter disse reglene kan bli suspendert eller fjernet.'],
  ['5. Innhold', 'Du beholder eierskapet til bildene og teksten du publiserer, men gir oss en lisens til å vise dette innholdet i appen for å levere tjenesten.'],
  ['6. Sikkerhet ved møter', 'Å møte nye mennesker innebærer risiko. Møt alltid på et offentlig sted, fortell en venn om planene dine, og bruk skjønn. Vi gjennomfører ikke bakgrunnssjekk av brukere.'],
  ['7. Rapportering og blokkering', 'Du kan rapportere eller blokkere hvilken som helst bruker fra profilen deres eller fra et innlegg. Vi gjennomgår rapporter og handler mot kontoer som bryter vilkårene, normalt innen 24 timer.'],
  ['8. Oppsigelse', 'Vi kan suspendere eller avslutte kontoer som bryter disse vilkårene. Du kan når som helst slutte å bruke appen og slette kontoen din.'],
  ['9. Ansvarsfraskrivelse', 'Appen leveres «som den er». Så langt loven tillater, er Qup DA ikke ansvarlig for indirekte tap eller tap som følge av kontakt mellom brukere.'],
  ['10. Lovvalg', 'Disse vilkårene reguleres av norsk rett. Tvister hører under norske domstoler, med Oslo tingrett som verneting.'],
  ['11. Endringer', 'Vi kan oppdatere disse vilkårene. Fortsatt bruk etter en endring innebærer at du godtar de oppdaterte vilkårene.'],
];

const TERMS_EN = [
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
const p = { fontSize: 15, color: '#333', margin: 0 };
const divider = { border: 0, borderTop: '1px solid #e5e5e5', margin: '56px 0' };
const langLabel = { fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: 'uppercase', color: '#999', marginBottom: 12 };

function Section({ heading, rows }) {
  return (
    <>
      <div style={langLabel}>{heading}</div>
      {rows.map(([h, body]) => (
        <div key={h}>
          <h2 style={h2}>{h}</h2>
          <p style={p}>{body}</p>
        </div>
      ))}
    </>
  );
}

export default function TermsPage() {
  return (
    <main style={wrap}>
      <h1 style={h1}>Vilkår for bruk</h1>
      <div style={updated}>Sist oppdatert: {LAST_UPDATED}</div>

      <Section heading="Norsk (gjeldende versjon)" rows={TERMS_NO} />

      <hr style={divider} />

      <div style={notice}>
        This is an English translation provided for convenience. The Norwegian version above is legally binding.
      </div>
      <h1 style={{ ...h1, fontSize: 24 }}>Terms of Service</h1>
      <div style={updated}>Last updated: {LAST_UPDATED}</div>
      <Section heading="English (for convenience)" rows={TERMS_EN} />
    </main>
  );
}