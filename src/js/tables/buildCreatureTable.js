function buildCreatureTable(availableCreatures) {
  clearTable('seaCreatureTable');

  availableCreatures.creatures.forEach((creature) => {
    let creatureRowTemplate = creatureTableTemplate(
      creature.Name.toUpperCase(),
      creature.CritterpediaImage,
      creature.Name.toLowerCase(),
      creature.spawnRate,
      creature.price,
      creature.Shadow
    );

    let creatureTableRef = document
      .getElementById('seaCreatureTable')
      .getElementsByTagName('tbody')[0];
    let newCreatureRow = creatureTableRef.insertRow(
      creatureTableRef.rows.length
    );

    newCreatureRow.innerHTML = creatureRowTemplate;
  });
}
