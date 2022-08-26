class UserHelper {
    getUserEmail() {
        const email = Session.getActiveUser().getEmail()
        const workSheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SheetModel.USER_EMAIL_SHEET)
        const data = workSheet.getDataRange().getDisplayValues()

        const user = data.filter(row => row[1].toLowerCase() === email.toLowerCase());

        if (user.length < 1) return email;
        return user[0][1]
    }
}