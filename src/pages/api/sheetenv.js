import { GoogleSpreadsheet } from 'google-spreadsheet';

const doc = new GoogleSpreadsheet(process.env.GOOGLE_SPREADSHEET_ID);

async function fetchData(sheetName) {
  try {
    await doc.useServiceAccountAuth(JSON.parse(process.env.CREDENTIALS));
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
  } catch (error) {
    console.error('Error fetching data from Google Spreadsheet:', error);
    throw error;
  }
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
