function storeAllCritterData() {
  const requestN = new Request(`src/json/critters_northern.json`);
  const requestS = new Request(`src/json/critters_southern.json`);
  const requestC = new Request(`src/json/seacreatures.json`);

  if (localStorage.getItem(`northern bug/fish data`) === null) {
    fetch(requestN)
      .then((response) => response.json())
      .then((data) => storeLocally(`northern bug/fish data`, data));
  }

  if (localStorage.getItem(`southern bug/fish data`) === null) {
    fetch(requestS)
      .then((response) => response.json())
      .then((data) => storeLocally(`southern bug/fish data`, data));
  }

  if (localStorage.getItem(`sea creature data`) === null) {
    fetch(requestC)
      .then((response) => response.json())
      .then((data) => storeLocally(`sea creature data`, data));
  }
}

function storeLocally(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}
