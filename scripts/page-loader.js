const loadInfo = new Map([
    ["/pages/home.html", false],
    ["/pages/rules.html", false],
    ["/pages/maps.html", false],
    ["/pages/voting.html", false],
    ["/pages/discord.html", false],
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