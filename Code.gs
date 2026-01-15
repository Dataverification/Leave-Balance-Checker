function doGet() {
  return HtmlService.createTemplateFromFile('Index')
    .evaluate()
    .setTitle('Dashboard Cuti Karyawan')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}

function getDataCuti() {
  const ss = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = ss.getSheetByName('Data_Karyawan');
  const data = sheet.getDataRange().getDisplayValues();
  
  // Menghilangkan header dan mengubahnya jadi array of objects
  const headers = data[0];
  const rows = data.slice(1);
  
  return rows.map(row => {
    let obj = {};
    headers.forEach((header, i) => {
      obj[header.replace(/\s+/g, '_')] = row[i];
    });
    return obj;
  });
}
