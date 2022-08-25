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

function retrieveRequestDetails(id, secrets) {
    try {
        Authentication.verify(secrets);

        const workSheet = SpreadsheetApp
            .getActiveSpreadsheet()
            .getSheetByName(SheetModel.TOR_REQUEST_SHEET);

        const data = workSheet.getDataRange().getDisplayValues();

        for (const entry of data) {
            const hdMatch = entry[RequestModel.HD_COLUMN_INDEX] == id;
            const torMatch = entry[RequestModel.TOR_COLUMN_INDEX] == id;
            const diplMatch = entry[RequestModel.DIPL_COLUMN_INDEX] == id;

            if (hdMatch || torMatch || diplMatch) {
                return entry;
            }
        }

        return [];
    } catch (error) {
        return [];
    }
}

function getRequestedDocuments(secrets) {
    try {
        Authentication.verify(secrets);

        const workSheet = SpreadsheetApp
            .getActiveSpreadsheet()
            .getSheetByName(SheetModel.REQUEST_DEFAULT_DATA_SHEET);

        const lastRowNumber = workSheet.getLastRow();

        return workSheet.getRange(2, 3, lastRowNumber - 1, 2).getValues();
    } catch (error) {
        return [];
    }
}