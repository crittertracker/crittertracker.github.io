function buildFishTable(availableCritters, availableCreatures) {
  clearTable('fishTable');

  if (!availableCritters.fish === false) {
    availableCritters.fish.forEach((fish) => {
      let fishRowTemplate = fishTableTemplate(
        fish.name.toUpperCase(),
        fish.image,
        fish.name.toLowerCase(),
        fish.rarity.toLowerCase(),
        fish.price,
        fish.location.toUpperCase(),
        fish.shadowsize.toUpperCase()
      );

      let fishTableRef = document
        .getElementById('fishTable')
        .getElementsByTagName('tbody')[0];
      let newFishRow = fishTableRef.insertRow(fishTableRef.rows.length);

      newFishRow.innerHTML = fishRowTemplate;
    });
  }
}
