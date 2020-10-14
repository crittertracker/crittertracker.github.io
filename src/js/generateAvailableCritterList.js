function generateAvailableCritterList(hemisphere = getHemisphereSelection(), month = getMonthSelection(), hour = getHourSelection()) {
  let critterData = JSON.parse(
    localStorage.getItem(`${hemisphere} bug/fish data`)
  );

  let availableBugs = [];
  let availableFish = [];

  critterData.bugs.forEach((bug) => {
    if (bug.time.includes(hour) && bug.month.includes(month))
      availableBugs.push(bug);
  });

  critterData.fish.forEach((fish) => {
    if (fish.time.includes(hour) && fish.month.includes(month))
      availableFish.push(fish);
  });

  storeLocally('availableCritters', {
    bugs: availableBugs,
    fish: availableFish,
  });

  return { bugs: availableBugs, fish: availableFish };
}
