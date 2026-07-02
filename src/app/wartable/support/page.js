// app/wartable/support/page.js  →  https://qupda.com/wartable/support
// Simple support page to satisfy the App Store Support URL requirement.

export const metadata = {
  title: "Wartable — Support",
  description: "Help and support for the Wartable app.",
};

export default function WartableSupport() {
  return (
    <main style={{ maxWidth: 680, margin: "0 auto", padding: "48px 24px", lineHeight: 1.6, fontFamily: "system-ui, sans-serif", color: "#1c1c1c" }}>
      <h1>Wartable Support</h1>
      <p>
        Need help with Wartable? We're happy to assist. Wartable turns your
        World of Warcraft character into a shareable showcase — gear, Mythic+
        score, raid progress, and achievements.
      </p>

      <h2>Contact</h2>
      <p>
        For questions, bug reports, or feedback, email us at{" "}
        <a href="mailto:jan.egil.staff@qupda.com">jan.egil.staff@qupda.com</a>.
        We aim to respond within a few business days.
      </p>

      <h2>Frequently asked</h2>

      <h3>Do I need a Battle.net account to use Wartable?</h3>
      <p>
        No. You can view any character without signing in — just choose the
        region and realm, enter a character name, and search. Signing in with
        Battle.net is optional and only used to load your own characters
        automatically.
      </p>

      <h3>How do I share my character?</h3>
      <p>
        Generate a share code in the app and send it to anyone. They can view
        your character showcase using that code.
      </p>

      <h3>Why can't I find a character?</h3>
      <p>
        Make sure you've selected the correct region (for example, Europe or
        Americas) and realm — the same realm name can exist in more than one
        region. Character data is retrieved from Blizzard's public Battle.net
        API and may take a short time to update after in-game changes.
      </p>

      <h3>My data looks out of date.</h3>
      <p>
        Wartable shows data from Blizzard's Battle.net API, which can lag behind
        live in-game changes by a short period. It will refresh as Blizzard's
        data updates.
      </p>

      <h2>About</h2>
      <p>
        Wartable is developed by Qup DA, Bergen, Norway. It is a fan-made
        companion app and is not affiliated with or endorsed by Blizzard
        Entertainment.
      </p>
    </main>
  );
}