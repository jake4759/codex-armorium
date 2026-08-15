# the hoard 

A Commander deck archive with live Scryfall art and TCGplayer pricing, card-move tracking,
wishlists, and an artist signing tracker for conventions.

The whole app is one self-contained file — `codex.html`. No build step, no dependencies,
no server of its own. Open the link and it runs.

**Live:** see the Pages URL in this repo's About section.

## Notes

- **Your data stays on your device.** Decks, art picks, wishlists and signing ticks live in
  the browser's localStorage. Nothing is uploaded, and there are no accounts. Two people
  opening the same link each get their own copy.
- **Installable.** On iOS use Safari → Share → Add to Home Screen; on Android, Chrome's
  "Install app". The service worker keeps it working offline, minus live pricing.
- **Pricing is never cached.** Card art is (those URLs are immutable), but prices always
  come off the wire, so the numbers are current rather than whatever you last saw.
- **Back up before you rely on it.** Settings → Export backup writes a JSON file. iOS
  clears storage for sites you haven't visited in a while, so this matters more than it
  looks.

The Hoard — App Changes & Feature Ideas

Starting Fresh / User Data

* Clear the current cache/test data so everyone starts from nothing and can build their own decks, collection, wishlist, card history, and other data themselves.
* Make sure nothing is hard-coded around my personal decks.
* For example, if Marneus currently says something like “+2 cards,” that description only makes sense for my deck setup and should not appear for every user.
* Maybe use AI to create small descriptions or summaries based on each user’s own decks and card activity.

Artist Browser

* When clicking the artist/signature icon, show a dropdown or page containing all artists represented in the user’s cards.
* Clicking an artist should open a page showing every card and every artwork created by that artist.
* If one card has multiple artworks from that artist, every artwork should appear as its own separate icon/card instead of being grouped together.
* This should make it easy to browse an artist’s work visually.

Grand Abolisher Art Issue

* Figure out why the Grand Abolisher frame/art I selected from the art button was not showing as a different artwork.
* Make sure alternate arts, frames, printings, and treatments are properly recognized as different versions when appropriate.

Card Printing, Art, Foil, and Condition Selection

* Add something similar to ManaBox when searching for a card.
* After selecting a card, let the user choose things like:
    * Specific artwork
    * Set/printing
    * Foil or nonfoil
    * Condition
    * Special frame/treatment if applicable
* The same options should also be available when changing a card that is already inside a deck.

Camera Card Scanner

* Add a feature that uses the phone camera to scan a physical MTG card and identify what card it is.
* Ideally, it should recognize the specific printing and artwork when possible instead of only identifying the card name.
* Every scanned card should automatically go into a Scan History.
* From Scan History, users should be able to select one card or multiple scanned cards and:
    * Add them to an existing deck
    * Create a new deck with them
    * Add them to a wishlist
    * Add them to their collection
    * Remove them from Scan History
* Add support for continuous scanning, so someone can scan a stack of cards one after another without stopping every time.
* Afterward, they can organize all the scanned cards together.
* If the scanner is unsure which printing or artwork it is, show the closest matching versions and let the user select the correct one.

Archidekt / Moxfield Import

* Let users paste an Archidekt or Moxfield deck link into the app.
* The app should automatically create the deck and add all the cards.
* If possible, it should also preserve the specific card printings and artworks used in the original deck.

New Deck Creation

* On the Add New Deck page, when choosing a commander, let me click the commander section and enter the full card-search interface.
* I should be able to search normally instead of being limited to the current commander selection system.

Better Card Search

* Add a search feature for finding cards based on what they do, not just their names.

For example, if I search:

“Whenever I deal combat damage”

the app should search card text through Scryfall and return cards with effects related to that phrase.

* Potentially use AI to make this search smarter so it can understand:
    * Spelling mistakes
    * Incorrect wording
    * Natural language
    * Similar effects
    * Descriptions that aren’t exact card text

For example, I could search:

“Cards that give me something when my creatures hit someone”

and the app would understand what I mean and return relevant cards.

Artist Icon Behavior

* When clicking the signature/artist icon, it should show a dropdown of artists.
* Clicking one should take me directly to that artist’s page containing all their cards and artwork.
* This ties into the Artist Browser feature above.

Deck Editing

* Let me edit the name of a deck after it has been created.
* Let me change the deck icon.
* Let me choose custom deck artwork or cover art.
* Right now, I cannot properly change these from the deck menu.

Deck List Organization

When looking at a deck list, automatically separate cards into categories such as:

* Commander
* Creatures
* Instants
* Sorceries
* Artifacts
* Enchantments
* Planeswalkers
* Lands
* Other card types when needed

Also add sorting and filtering options such as:

* Price
* Mana value
* Card type
* Color
* Name
* Artist
* Set
* Printing
* Foil/nonfoil

Devoured Section

* Add an explanation inside the Devoured section explaining what the feature does.
* Let users add decks inside Devoured.
* Let them move cards from one deck into another from this section.
* Add a searchable list of cards that were removed from decks.
* Users should be able to find those removed cards and place them into another deck.
* The system should work based on each user’s own deck activity and not rely on my existing decks.

AI Deck Descriptions

* Since everyone will start with their own decks, any descriptions should be generated dynamically.
* Maybe use AI to create small descriptions for each deck based on:
    * Cards recently added
    * Cards removed
    * Cards moved in from another deck
    * Commander
    * General deck strategy
* This could replace hard-coded text like “+2 cards” that currently only applies to my personal setup.

Add Card Button

* Move the Add Card button from the top-right corner to the bottom-left.
* Make it a floating circular button.
* Give it a different, brighter color so it stands out clearly.

Visual Style

* I really like the bubbly, rounded design style, so lean further into that.
* Use softer shapes, rounded buttons, rounded panels, and smooth transitions.
* Make the colors slightly brighter and more vibrant.
* Experiment with different fonts and typography to find something that fits the app better.
* Add more animations where they make the app feel more alive without making it slow or distracting.

Top Web Line

* Look into the line that appears at the top of the web version when opening the app.
* Either remove it or redesign it so it fits the rest of the app.

App Themes

Add a Themes section inside Settings.

Possible themes:

* Light
* Dark
* Korvold
* Marneus Calgar
* Sefris of the Hidden Ways
* Betor
* More commander/card themes later

Themes could change:

* Backgrounds
* Accent colors
* Buttons
* Lighting/glow
* Borders
* Menu colors
* Card-related UI details

The basic app layout should remain consistent so themes don’t make the app harder to use.

Change History

Add a History / Activity section showing changes made throughout the app.

Examples:

* Card added
* Card removed
* Card moved to another deck
* Card artwork changed
* Printing changed
* Deck renamed
* Commander changed
* Deck created
* Deck deleted

Show when each change happened.

It would also be cool if certain actions could eventually be undone or reverted from the history.

MTG Life Counter

Add a built-in Magic: The Gathering life counter.

When opening it, let the user choose options such as:

* 2 players
* 4 players
* Maybe custom player counts
* 20 starting life
* 40 starting life
* Custom starting life

Each player should have their own section of the screen.

Track:

* Life total
* Commander damage
* Poison counters
* Other counters if needed

For commander damage:

* Let me select which opponent’s commander dealt the damage.
* Make it easy to increase or decrease commander damage.
* Maybe use swiping or tapping on an opponent’s side to access it.

The app should automatically detect game-ending conditions.

For example:

* A player reaches 0 life
* A player takes 21 commander damage from one commander
* A player reaches the poison counter loss limit

When that happens, the app should clearly indicate that the player has lost or that another player has won.

I can give an example later of exactly how I want the life-counter screen to look and function.

More Animations

* Add more animations throughout the app where appropriate.
* Things like opening decks, changing artwork, adding cards, switching themes, or moving cards between decks could have smooth transitions.
* Keep them fast enough that they don’t get annoying.

Branding / GitHub

* Rename the GitHub repository/project to:

The Hoard
