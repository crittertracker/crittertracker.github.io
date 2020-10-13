function buildBugTable(availableCritters) {
  clearTable('bugTable');
  ///constructors so that i dont need to put in parameters?

  availableCritters.bugs.forEach((bug) => {
    let bugRowTemplate = bugTableTemplate(
      bug.name.toUpperCase(),
      bug.image,
      bug.name.toLowerCase(),
      bug.rarity.toLowerCase(),
      bug.price,
      bug.location.toUpperCase()
    );

    let bugTableRef = document
      .getElementById('bugTable')
      .getElementsByTagName('tbody')[0];
    let newBugRow = bugTableRef.insertRow(bugTableRef.rows.length);

    newBugRow.innerHTML = bugRowTemplate;
  });
}
