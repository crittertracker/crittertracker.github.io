function buildCreatureTable(availableCreatures = generateAvailableCreatureList()) {
  clearTable('seaCreatureTable');

  availableCreatures.creatures.forEach((creature) => {
    let creatureRowTemplate = creatureTableTemplate(
      creature.Name.toUpperCase(),
      creature.CritterpediaImage,
      creature.Name.toLowerCase(),
      creature.MovementSpeed.toUpperCase(),
      creature.price,
      creature.Shadow.toUpperCase()
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
