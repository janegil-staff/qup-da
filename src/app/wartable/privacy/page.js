// app/wartable/privacy/page.js  (or wherever your qupda.com routes live)
// Wartable Privacy Policy. Review every clause against what the app ACTUALLY
// does before publishing — accuracy here is both a legal and an App Store
// requirement. Update the effective date and contact email as needed.

export const metadata = {
  title: "Wartable — Privacy Policy",
  description: "Privacy policy for the Wartable app.",
};

export default function WartablePrivacy() {
  return (
    <main style={{ maxWidth: 760, margin: "0 auto", padding: "48px 24px", lineHeight: 1.6, fontFamily: "system-ui, sans-serif", color: "#1c1c1c" }}>
      <h1>Privacy Policy for Wartable</h1>
      <p><strong>Last updated:</strong> July 2, 2026</p>

      <p>
        Wartable ("the app") is developed by Qup DA ("we", "us"). This policy
        explains what information the app handles and how. By using Wartable, you
        agree to the practices described here.
      </p>

      <h2>Who we are</h2>
      <p>
        Qup DA, Bergen, Norway (org. 912 372 022). For any privacy questions,
        contact us at <a href="mailto:jan.egil.staff@codelab.no">jan.egil.staff@codelab.no</a>.
      </p>

      <h2>What Wartable does</h2>
      <p>
        Wartable lets you view World of Warcraft character information — gear,
        Mythic+ rating, raid progress, and achievements — and share a character
        via a short code. Character data is retrieved from Blizzard
        Entertainment's public Battle.net API.
      </p>

      <h2>Information we handle</h2>
      <p><strong>Battle.net account (optional sign-in).</strong> If you choose to
        sign in with Battle.net, we use Battle.net OAuth to authenticate you. An
        authentication token is stored securely on your device (using the
        device's secure storage) so you stay signed in. We use this only to load
        your own characters. You can use the app without signing in.</p>

      <p><strong>Character data.</strong> Character information shown in the app
        comes from Blizzard's public Battle.net API. This is game data (such as
        character name, realm, gear, and achievements) and is publicly available
        through Blizzard's services.</p>

      <p><strong>Share codes.</strong> When you share a character, the app
        generates a short code linked to that character's public data so others
        can view the showcase. No private account information is shared.</p>

      <p><strong>We do not collect</strong> your name, email, contacts, location,
        or payment information. We do not sell your data. We do not use the app to
        show third-party advertising.</p>

      <h2>Data storage</h2>
      <p>
        Authentication tokens are stored locally on your device in secure
        storage. Any character/share data needed for the sharing feature is
        processed through our backend solely to provide that feature and is not
        used for any other purpose.
      </p>

      <h2>Third-party services</h2>
      <p>
        Wartable relies on Blizzard Entertainment's Battle.net API to retrieve
        game data and to authenticate optional sign-in. Your use of Battle.net is
        governed by Blizzard's own privacy policy and terms. Wartable is a
        fan-made companion app and is not affiliated with or endorsed by Blizzard
        Entertainment.
      </p>

      <h2>Children's privacy</h2>
      <p>
        Wartable is not directed at children under 13, and we do not knowingly
        collect personal information from children.
      </p>

      <h2>Your choices</h2>
      <p>
        You can use Wartable without signing in. If you have signed in, signing
        out removes the stored authentication token from your device. You may
        contact us at any time to ask questions about your data.
      </p>

      <h2>Changes to this policy</h2>
      <p>
        We may update this policy from time to time. Changes will be posted on
        this page with a revised "Last updated" date.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Email{" "}
        <a href="mailto:jan.egil.staff@qupda.com">jan.egil.staff@qupda.com</a>.
      </p>
    </main>
  );
}