class DateHelper {
    static formatDateToHumanDate(dateString) {
        const dateObject = new Date(dateString);
        const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        if (dateObject.toString() === 'Invalid Date') {
            return dateString;
        }

        const month = monthNames[dateObject.getMonth()];
        const date = dateObject.getDate();
        const year = dateObject.getFullYear();

        return `${month} ${date}, ${year}`;
    }
}

export default DateHelper;
