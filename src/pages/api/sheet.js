import { GoogleSpreadsheet } from 'google-spreadsheet';
import credentials from 'credentials.json';

const doc = new GoogleSpreadsheet('18eVcJy6z-UOegP50OtHw2O-5YbqhMGtu9vVCLQY__Z8');




async function fetchData(sheetName) {
  await doc.useServiceAccountAuth(credentials);
  await doc.loadInfo();

  const sheet = doc.sheetsByTitle[sheetName];
  const rows = await sheet.getRows();

  return rows.map((row) => {
    const rowData = {};
    sheet.headerValues.forEach((header) => {
      rowData[header] = row[header];
    });
    return rowData;
  });
}

export default async (req, res) => {
  try {
    const dataSheetData = await fetchData('Data');
    const employeesSheetData = await fetchData('Employees');

    res.status(200).json({ data: dataSheetData, employees: employeesSheetData });
  } catch (error) {
    console.error('Error in API route:', error);
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
};

