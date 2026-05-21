// app/privacy/page.jsx
//
// Privacy Policy for Staff Arts (Qup DA). Served at /privacy.
// Plain React + scoped <style jsx> so it needs no Tailwind/CSS-module setup.

export const metadata = {
  title: 'Privacy Policy — Staff Arts',
  description: 'How Qup DA collects and processes personal data in the Staff Arts app.',
};

export default function PrivacyPage() {
  return (
    <main className="wrap">
      <h1>Privacy Policy</h1>
      <p className="meta">Staff Arts &middot; Last updated: [INSERT DATE]</p>

      <p>
        This Privacy Policy explains how <strong>Qup DA</strong> (organisation
        number 912&nbsp;372&nbsp;022), a company registered in Norway ("we",
        "us", "Qup DA"), collects and processes personal data when you use the{' '}
        <strong>Staff Arts</strong> mobile application (the "App"). Qup DA is the
        data controller for the personal data described here.
      </p>

      <p>
        We are committed to protecting your privacy and processing your personal
        data in accordance with the EU General Data Protection Regulation (GDPR)
        and the Norwegian Personal Data Act.
      </p>

      <div className="note">
        If you have any questions about this policy or wish to exercise your data
        rights, contact us at{' '}
        <a href="mailto:privacy@qupda.com">privacy@qupda.com</a>.
      </div>

      <h2>1. What the App is</h2>
      <p>
        Staff Arts is a marketplace where artists can list artworks and events,
        and where users can browse listings and send private messages to one
        another. The App does not process payments; any sale or transaction is
        arranged directly between users outside the App.
      </p>

      <h2>2. Personal data we collect</h2>
      <p>We collect only the data needed to provide the App's features:</p>

      <table>
        <thead>
          <tr>
            <th>Data</th>
            <th>Purpose</th>
            <th>Legal basis (GDPR Art. 6)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Email address</td>
            <td>Account creation, login, security codes, and essential service communication</td>
            <td>Performance of a contract (6(1)(b))</td>
          </tr>
          <tr>
            <td>PIN (stored only as a one-way bcrypt hash — never in plain text)</td>
            <td>Authenticating your login</td>
            <td>Performance of a contract (6(1)(b))</td>
          </tr>
          <tr>
            <td>Display name</td>
            <td>Identifying you to other users on listings and in messages</td>
            <td>Performance of a contract (6(1)(b))</td>
          </tr>
          <tr>
            <td>Profile image and bio (optional)</td>
            <td>Your public profile, if you choose to add them</td>
            <td>Consent (6(1)(a))</td>
          </tr>
          <tr>
            <td>Language preference</td>
            <td>Showing the App in your chosen language</td>
            <td>Legitimate interest (6(1)(f))</td>
          </tr>
          <tr>
            <td>Artwork and event listings, including images you upload</td>
            <td>Displaying your listings in the marketplace</td>
            <td>Performance of a contract (6(1)(b))</td>
          </tr>
          <tr>
            <td>Messages you send to other users</td>
            <td>Delivering and storing your conversations</td>
            <td>Performance of a contract (6(1)(b))</td>
          </tr>
          <tr>
            <td>Limited technical data (e.g. timestamps of activity)</td>
            <td>Operating, securing, and debugging the service</td>
            <td>Legitimate interest (6(1)(f))</td>
          </tr>
        </tbody>
      </table>

      <p>
        We do <strong>not</strong> collect special categories of personal data,
        we do not run advertising, and we do not sell your personal data to
        anyone.
      </p>

      <h2>3. Messages between users</h2>
      <p>
        Staff Arts lets you exchange private messages with other users. Message
        content is stored on our servers so it can be delivered and shown in your
        conversation history. Messages are not end-to-end encrypted. Please do
        not share sensitive personal or financial information through the
        messaging feature. You are responsible for the content you send.
      </p>

      <h2>4. Who processes your data (sub-processors)</h2>
      <p>
        We use a small number of trusted service providers to operate the App.
        They process data only on our instructions:
      </p>
      <ul>
        <li><strong>MongoDB</strong> — database hosting for accounts, listings, and messages.</li>
        <li><strong>Cloudinary</strong> — storage and delivery of images you upload.</li>
        <li><strong>DigitalOcean</strong> — hosting of our application servers.</li>
      </ul>
      <p>
        Some of these providers may process data outside the European Economic
        Area (EEA). Where that happens, the transfer is protected by appropriate
        safeguards such as the European Commission's Standard Contractual
        Clauses.
      </p>

      <h2>5. How long we keep your data</h2>
      <p>
        We keep your personal data for as long as your account is active. When
        you delete your account, we delete or irreversibly anonymise your
        personal data, including your listings and messages, except where we are
        legally required to retain certain information for a limited period.
        Backups are overwritten on a routine cycle.
      </p>

      <h2>6. Your rights under the GDPR</h2>
      <p>You have the right to:</p>
      <ul>
        <li>access the personal data we hold about you;</li>
        <li>correct inaccurate or incomplete data;</li>
        <li>delete your data ("right to be forgotten");</li>
        <li>restrict or object to certain processing;</li>
        <li>receive your data in a portable format;</li>
        <li>withdraw consent at any time, where processing is based on consent.</li>
      </ul>
      <p>
        You can delete your account and associated data directly in the App under
        Settings. To exercise any other right, email{' '}
        <a href="mailto:privacy@qupda.com">privacy@qupda.com</a>. You also have
        the right to lodge a complaint with the Norwegian Data Protection
        Authority (<em>Datatilsynet</em>) at{' '}
        <a href="https://www.datatilsynet.no" target="_blank" rel="noopener noreferrer">
          www.datatilsynet.no
        </a>.
      </p>

      <h2>7. Security</h2>
      <p>
        We use industry-standard measures to protect your data, including
        transport encryption (HTTPS), hashing of PINs, and access controls. No
        system is completely secure, but we take reasonable steps to protect your
        information.
      </p>

      <h2>8. Children</h2>
      <p>
        The App is not intended for children under the age of 16. We do not
        knowingly collect personal data from children under 16. If you believe a
        child has provided us with personal data, contact us and we will delete
        it.
      </p>

      <h2>9. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. We will post the updated
        version here and revise the "Last updated" date. Significant changes will
        be communicated in the App where appropriate.
      </p>

      <h2>10. Contact</h2>
      <p>
        Qup DA<br />
        Organisation number: 912&nbsp;372&nbsp;022<br />
        Norway<br />
        Privacy enquiries: <a href="mailto:privacy@qupda.com">privacy@qupda.com</a><br />
        General support: <a href="mailto:support@qupda.com">support@qupda.com</a>
      </p>

      <footer>
        &copy; Qup DA. This document is provided for transparency about our data
        practices.
      </footer>

      <style jsx>{`
        .wrap {
          max-width: 760px;
          margin: 0 auto;
          padding: 48px 24px 96px;
          background: #faf7f2;
          color: #1a1a1a;
          font-family: Georgia, 'Times New Roman', serif;
          line-height: 1.65;
          font-size: 17px;
        }
        h1 {
          font-size: 30px;
          color: #2d4a6e;
          margin-bottom: 4px;
        }
        h2 {
          font-size: 21px;
          color: #2d4a6e;
          margin-top: 38px;
        }
        .meta {
          color: #666;
          font-size: 15px;
          margin-bottom: 32px;
        }
        a {
          color: #c97060;
        }
        ul {
          padding-left: 22px;
        }
        li {
          margin: 6px 0;
        }
        table {
          border-collapse: collapse;
          width: 100%;
          margin: 16px 0;
          font-size: 15px;
        }
        th,
        td {
          border: 1px solid #ddd;
          padding: 8px 10px;
          text-align: left;
          vertical-align: top;
        }
        th {
          background: #f1ece4;
        }
        .note {
          background: #f1ece4;
          border-left: 4px solid #c97060;
          padding: 12px 16px;
          margin: 20px 0;
          font-size: 15px;
        }
        footer {
          margin-top: 48px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          color: #666;
          font-size: 14px;
        }
      `}</style>
    </main>
  );
}