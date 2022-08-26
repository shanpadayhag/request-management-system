class RequestControllerHelper {
    isHonoraryDismissal(data) {
        const workSheet = SpreadsheetApp
            .getActiveSpreadsheet()
            .getSheetByName(SheetModel.REQUEST_DEFAULT_DATA_SHEET);
        const lastRowNumber = workSheet.getLastRow();
        const consideredDocuments = workSheet.getRange(2, 5, lastRowNumber - 1, 1).getValues()
        const requestedDocuments = data.requestedDocs

        for (const doc of consideredDocuments) {
            if (doc[0] !== '' && requestedDocuments.includes(doc[0])) {
                return data.controlNumber;
            }
        }

        return '';
    }

    isTOR(data) {
        const workSheet = SpreadsheetApp
            .getActiveSpreadsheet()
            .getSheetByName(SheetModel.REQUEST_DEFAULT_DATA_SHEET);
        const lastRowNumber = workSheet.getLastRow();
        const consideredDocuments = workSheet.getRange(2, 6, lastRowNumber - 1, 1).getValues()
        const requestedDocuments = data.requestedDocs

        for (const doc of consideredDocuments) {
            if (doc[0] !== '' && requestedDocuments.includes(doc[0])) {
                return data.controlNumber;
            }
        }

        return '';
    }

    isDiploma(data) {
        const workSheet = SpreadsheetApp
            .getActiveSpreadsheet()
            .getSheetByName(SheetModel.REQUEST_DEFAULT_DATA_SHEET);
        const lastRowNumber = workSheet.getLastRow();
        const consideredDocuments = workSheet.getRange(2, 7, lastRowNumber - 1, 1).getValues()
        const requestedDocuments = data.requestedDocs

        for (const doc of consideredDocuments) {
            if (doc[0] !== '' && requestedDocuments.includes(doc[0])) {
                return data.controlNumber;
            }
        }

        return '';
    }

    addWorkDays(startDate, days) {
        const dayOfWeek = startDate.getDay();
        let daysToAdd = days + (~~(days / 6))

        if (0 === dayOfWeek) daysToAdd++;

        startDate.setDate(startDate.getDate() + daysToAdd);

        const dueDateDayOfWeek = startDate.getDay();

        if (0 === dueDateDayOfWeek) startDate.setDate(startDate.getDate() + 1);

        return startDate;
    }
}