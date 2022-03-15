function copyFunction() {
    var copyText = document.getElementById("myInput");
  
    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */
  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);
}

/**
 * --------- Rules ---------
 */
const rules = new Map([
  ["No swearing", "Swearing of any kind is not allowed, either from chat, books, signs or map art."],
  ["No griefing", "This is not a faction server so griefing of any kind is strictly not allowed."],
  ["No bug abuse", "Bugs or glitches that give you an unfair advantage are strictly not allowed. This does not include going to the nether roof."],
  ["No advertising", "Similar to no swearing, advertising of any kind is not allowed, either from chat, books, signs, or map art. This only includes advertising servers or large groups."],
  ["No cheating", "Only mods that don't give you an unfair advantage are allowed. Examples of well-known allowed mods: Optifine, Sodium, Lithium, etc."],
  ["No NSFW", "Any NSFW (Not safe for work) is strictly not allowed and will be removed immediately."],
  ["No begging", "This includes store ranks, staff ranks, and even in-game loot"],
  ["No selling items for real-world money", "To comply with Minecraft's EULA, selling any items for real-world money is strictly not allowed"]
]);

function displayRules() {
  const cardContainer = document.getElementById('cards-container');
  let counter = 0;

  for (const entry of rules.entries()) {
    const ruleElement = createRuleTemplate();
    cardContainer.appendChild(ruleElement);

    const title = document.getElementsByClassName("card-title")[counter];
    const text = document.getElementsByClassName("card-text")[counter];

    title.innerText = entry[0];
    text.innerText = entry[1];

    counter++;
  }
}

function createRuleTemplate() {
  const cardContainer = createElement('div', 'card');
  const cardBodyContainer = createElement('div', 'card-body');
  const cardTitle = createElement('h4', 'card-title');
  const cardParagraph = createElement('p', 'card-text');

  cardContainer.appendChild(cardBodyContainer);
  cardBodyContainer.appendChild(cardTitle);
  cardBodyContainer.appendChild(cardParagraph);

  return cardContainer;
}

function createElement(type, className) {
  const newElement = document.createElement(type);
  newElement.classList.add(className);
  return newElement;
}

/**
 * Page loading
 */
 const loadInfo = new Map([
  ["/pages/rules.html", false],
  ["/pages/maps.html", false],
  ["/pages/voting.html", false],
]);

function loadPage(path) {
  if (!hasBeenLoaded(path)) {
    $(function() {
      $("#content-container").load(path); 
    });
    
    setLoaded(path);
  }
}

function hasBeenLoaded(path) {
  return loadInfo.get(path);
}

function setLoaded(path) {
  // First setting all other options to false
  for (const page of loadInfo.entries()) {
    loadInfo.set(page[0], false);
  }

  // Setting primary option true
  loadInfo.set(path, true);
}


