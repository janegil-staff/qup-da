// src/app/terms/page.js
//
// Terms of Service for Staff Arts (Qup DA). Served at /terms.
// Server Component — uses inline styles (no styled-jsx).

import Link from 'next/link';

export const metadata = {
  title: 'Terms of Service — Staff Arts',
  description: 'The terms governing use of the Staff Arts app, operated by Qup DA.',
};

const C = {
  wrap: {
    maxWidth: 760,
    margin: '0 auto',
    padding: '48px 24px 96px',
    background: '#faf7f2',
    color: '#1a1a1a',
    fontFamily: "Georgia, 'Times New Roman', serif",
    lineHeight: 1.65,
    fontSize: 17,
  },
  h1: { fontSize: 30, color: '#2d4a6e', marginBottom: 4 },
  h2: { fontSize: 21, color: '#2d4a6e', marginTop: 38 },
  meta: { color: '#666', fontSize: 15, marginBottom: 32 },
  link: { color: '#c97060' },
  footer: { marginTop: 48, paddingTop: 20, borderTop: '1px solid #ddd', color: '#666', fontSize: 14 },
};

export default function TermsPage() {
  return (
    <main style={C.wrap}>
      <h1 style={C.h1}>Terms of Service</h1>
      <p style={C.meta}>Staff Arts &middot; Last updated: [INSERT DATE]</p>

      <p>
        These Terms of Service ("Terms") govern your use of the{' '}
        <strong>Staff Arts</strong> mobile application (the "App"), operated by{' '}
        <strong>Qup DA</strong> (organisation number 912&nbsp;372&nbsp;022),
        Norway ("we", "us", "Qup DA"). By creating an account or using the App,
        you agree to these Terms. If you do not agree, please do not use the App.
      </p>

      <h2 style={C.h2}>1. The service</h2>
      <p>
        Staff Arts is a marketplace where artists can list artworks and events
        and where users can browse listings and send each other private messages.
        Staff Arts is a venue that connects users.{' '}
        <strong>We do not process payments and are not a party to any transaction</strong>{' '}
        between users. Any sale, purchase, delivery, or payment is arranged solely
        between the users involved, at their own risk.
      </p>

      <h2 style={C.h2}>2. Accounts</h2>
      <ul>
        <li>You must be at least 16 years old to use the App.</li>
        <li>You are responsible for keeping your login PIN confidential and for all activity under your account.</li>
        <li>You agree to provide accurate information and to keep it up to date.</li>
        <li>You may delete your account at any time from within the App under Settings.</li>
      </ul>

      <h2 style={C.h2}>3. Content you post</h2>
      <p>
        You retain ownership of the artworks, images, listings, and messages you
        post ("Your Content"). By posting Your Content, you grant Qup DA a
        non-exclusive, worldwide, royalty-free licence to host, store, display,
        and distribute it solely for the purpose of operating and promoting the
        App.
      </p>
      <p>You represent and warrant that:</p>
      <ul>
        <li>you own or have all necessary rights to Your Content and to the works you list;</li>
        <li>Your Content does not infringe the intellectual-property, privacy, or other rights of any third party;</li>
        <li>you have the legal right to offer, list, or sell any item you post;</li>
        <li>Your Content is accurate and not misleading, including any description of how a work was created.</li>
      </ul>

      <h2 style={C.h2}>4. Acceptable use</h2>
      <p>
        When using the App, including the messaging feature, you agree{' '}
        <strong>not</strong> to:
      </p>
      <ul>
        <li>harass, threaten, abuse, or impersonate any person;</li>
        <li>post or send content that is unlawful, defamatory, hateful, sexually explicit, or otherwise objectionable;</li>
        <li>post content that infringes anyone's intellectual-property or other rights;</li>
        <li>send spam, scams, or unsolicited commercial messages;</li>
        <li>attempt to gain unauthorised access to the App, other accounts, or our systems;</li>
        <li>use the App for any illegal purpose or in violation of any applicable law.</li>
      </ul>

      <h2 style={C.h2}>5. Reporting and moderation</h2>
      <p>
        We do not tolerate objectionable content or abusive behaviour. Users can
        report content or other users, and may block users they do not wish to
        interact with. We may review reported content and may remove content or
        suspend or terminate accounts that violate these Terms, at our discretion
        and without prior notice where necessary. We aim to act on credible
        reports of objectionable content promptly.
      </p>

      <h2 style={C.h2}>6. Transactions between users</h2>
      <p>
        Because Staff Arts does not handle payments, any agreement to buy or sell
        an artwork is solely between the buyer and the seller. We do not verify
        the quality, legality, safety, or authenticity of listed works, nor the
        identity of users, and we make no guarantees about any transaction. You
        deal with other users at your own risk and should exercise appropriate
        caution.
      </p>

      <h2 style={C.h2}>7. Intellectual property</h2>
      <p>
        The App itself, including its design, software, branding, and "Staff
        Arts" name, is owned by Qup DA and protected by applicable laws. These
        Terms do not grant you any rights in our intellectual property beyond
        using the App as intended.
      </p>

      <h2 style={C.h2}>8. Termination</h2>
      <p>
        You may stop using the App and delete your account at any time. We may
        suspend or terminate your access if you breach these Terms or if we
        discontinue the App. On termination, the licences you granted for Your
        Content end, except for content already shared with or downloaded by
        other users.
      </p>

      <h2 style={C.h2}>9. Disclaimers</h2>
      <p>
        The App is provided "as is" and "as available". To the fullest extent
        permitted by law, we disclaim all warranties, express or implied,
        including fitness for a particular purpose and non-infringement. We do not
        warrant that the App will be uninterrupted, error-free, or secure.
      </p>

      <h2 style={C.h2}>10. Limitation of liability</h2>
      <p>
        To the fullest extent permitted by applicable law, Qup DA shall not be
        liable for any indirect, incidental, or consequential damages, or for any
        loss arising from transactions or interactions between users, content
        posted by users, or your use of (or inability to use) the App. Nothing in
        these Terms limits liability that cannot be limited under Norwegian law,
        including your statutory rights as a consumer.
      </p>

      <h2 style={C.h2}>11. Privacy</h2>
      <p>
        Our handling of personal data is described in our{' '}
        <Link style={C.link} href="/privacy">Privacy Policy</Link>, which forms
        part of these Terms.
      </p>

      <h2 style={C.h2}>12. Changes to these Terms</h2>
      <p>
        We may update these Terms from time to time. We will post the updated
        version here and revise the "Last updated" date. Continued use of the App
        after changes take effect constitutes acceptance of the revised Terms.
      </p>

      <h2 style={C.h2}>13. Governing law and disputes</h2>
      <p>
        These Terms are governed by the laws of Norway. Any dispute arising from
        these Terms or your use of the App shall be subject to the jurisdiction of
        the Norwegian courts, without prejudice to any mandatory
        consumer-protection rights you may have in your country of residence.
      </p>

      <h2 style={C.h2}>14. Contact</h2>
      <p>
        Qup DA<br />
        Organisation number: 912&nbsp;372&nbsp;022<br />
        Norway<br />
        Support: <a style={C.link} href="mailto:support@qupda.com">support@qupda.com</a>
      </p>

      <footer style={C.footer}>
        &copy; Qup DA. By using Staff Arts you agree to these Terms of Service.
      </footer>
    </main>
  );
}