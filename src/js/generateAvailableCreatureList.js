function generateAvailableCreatureList(hemisphere = getHemisphereSelection(), month = getMonthSelection(), hour = getHourSelection()) {
  let creatureData = JSON.parse(localStorage.getItem(`sea creature data`));
  let availableCreatures = [];

  if (hemisphere === 'northern') {
    creatureData.creatures.forEach((creature) => {
      if (
        creature.NHMonth.includes(month.toLowerCase()) &&
        creature.Time.includes(hour)
      ) {
        availableCreatures.push(creature);
      }
    });
  } else {
    creatureData.creatures.forEach((creature) => {
      if (
        creature.SHMonth.includes(month.toLowerCase()) &&
        creature.Time.includes(hour)
      ) {
        availableCreatures.push(creature);
      }
    });
  }

  storeLocally('availableCreatures', { creatures: availableCreatures });

  return { creatures: availableCreatures };
}
