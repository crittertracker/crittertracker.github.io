function clearTable(tableName) {
  let table = document.getElementById(tableName);
  let tableLength = table.rows.length;

  for (i = 0; i < tableLength; i++) {
    table.deleteRow(0);
  }

  resetHeaders(tableName, table);
}
