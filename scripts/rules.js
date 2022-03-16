const minecraftRules = new Map([
    ["No Swearing", "Swearing of any kind is not allowed, either from chat, books, signs or map art."],
    ["No Griefing", "This is not a Faction server, so griefing of any kind is strictly not allowed."],
    ["No Bug abuse", "Bugs or glitches that give you an unfair advantage are strictly not allowed. This does not include going to the nether roof."],
    ["No Advertising", "Similar to no swearing, advertising of any kind is not allowed, either from chat, books, signs, or map art. This only includes advertising servers or large groups."],
    ["No Cheating", "Only mods that don't give you an unfair advantage are allowed. Examples of well-known allowed mods: Optifine, Sodium, Lithium, etc."],
    ["No NSFW", "Any NSFW (Not safe for work) is strictly not allowed and will be removed immediately."],
    ["No Begging", "This includes store ranks, staff ranks, and even in-game loot"],
    ["No Selling items for real-world money", "To comply with Minecraft's EULA, selling any items for real-world money is strictly not allowed"]
  ]);

  const discordRules = new Map([
    ["Discord Guidelines", "All users must abide by the Discord Terms of Service (ToS) and Guidelines. Anybody who is found breaking the discord ToS and/or Guidelines will be reported and banned from the server."],
    ["English Speaking Server.", "Other languages are reserved to 💬┃international-chat As to enforce Discord's Terms, all users must be a minimum of 13 years old."],
    ["Behaviour", "Respect everyone. All posts, images, videos, messages, etc, must be considered Safe for Work and not considered undesirable."],
    ["No impersonation", "Please do not impersonate people. Nobody likes this!"],
    ["No Spamming", "Do not spam! This will not be tolerated!"],
    ["Intentional Disruption", "Intentionally making people feel uncomfortable is strictly not allowed."],
    ["Appear Appropriate", "Avatars, Usernames, Emotes, Status all must be appropriate."],
    ["Nothing Illegal", "Any malicious/illegal activities will result in a ban."],
    ["No Begging", "NEVER ask/beg for any purchases, nitro or staff "],
    ["Don't use \"@\"", "NEVER use @ everyone, @ here or @ role anywhere on the server "],
    ["No Streaming", "NEVER stream, post or upload any copyrighted material "],
    ["Zalgo Letters", "Any from of Zalgo letters is not allowed and will be changed by staff"],
    ["Channel specific", " Images, Screenshots, Videos, and Memes must be kept within relevant channels."],
    ["Mic", "No mic spam, ASMR, NSFW, and don't make people feel uncomfortable"],
    ["No riots or Raids", "Any form of rioting or raids is strictly not allowed "],
  ]);

  function displayMinecraftRules() {
    displayRules(minecraftRules);
    setDisplayHeader("Minecraft");
  }

  function displayDiscordRules() {
    displayRules(discordRules);
    setDisplayHeader("Discord");
  }
  
  function displayRules(type) {
    const cardContainer = document.getElementById('cards-container');
    wipeContainer(cardContainer);
    let counter = 0;
  
    for (const entry of type.entries()) {
      const ruleElement = createRuleTemplate();
      cardContainer.appendChild(ruleElement);
  
      const title = document.getElementsByClassName("card-title")[counter];
      const text = document.getElementsByClassName("card-text")[counter];
  
      title.innerText = (counter + 1) + ".) " + entry[0];
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

  function setDisplayHeader(type) {
    const headerContainer = document.getElementById("rules-header");
    const title = headerContainer.getElementsByTagName('h1')[0];
    title.innerHTML = type + " Rules";
  }

  function wipeContainer(container) {
    while(container.firstChild) {
      container.removeChild(container.firstChild);
    }
  }
  