function searchRequest(value, option, secrets) {
    try {
        Authentication.verify(secrets)

        const workSheet = SpreadsheetApp
            .getActiveSpreadsheet()
            .getSheetByName(SheetModel.TOR_REQUEST_SHEET)
        const { DATA_START_RANGE_COLUMN: dsrc,
            DATA_START_RANGE_ROW: dsrr,
            DATA_END_RANGE_COLUMN: derc } = RequestModel;
        const dataRange = `${dsrc}${dsrr}:${derc}${workSheet.getLastRow()}`

        const data = workSheet
            .getRange(dataRange)
            .getDisplayValues()

        if (option === RequestModel.NAME) {
            return data.filter((row) => {
                const lastNameMatch = row[RequestModel.LAST_NAME].toLowerCase().includes(value.toLowerCase());
                const firstNameMatch = row[RequestModel.FIRST_NAME].toLowerCase().includes(value.toLowerCase());
                const middleNameMatch = row[RequestModel.MIDDLE_NAME].toLowerCase().includes(value.toLowerCase());

                return lastNameMatch || firstNameMatch || middleNameMatch;
            });
        }
        return data.filter((row) => {
            const hdMatch = row[RequestModel.HD_COLUMN_INDEX].toLowerCase() == value.toLowerCase();
            const torMatch = row[RequestModel.TOR_COLUMN_INDEX].toLowerCase() == value.toLowerCase();
            const diplMatch = row[RequestModel.DIPL_COLUMN_INDEX].toLowerCase() == value.toLowerCase();

            return hdMatch || torMatch || diplMatch;
        });
    } catch (error) {
        return [];
    }
}