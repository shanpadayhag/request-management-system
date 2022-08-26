class DateHelper {
    static formatDate(dateObj) {
        const month = dateObj.getMonth();
        const date = dateObj.getDate();
        const year = dateObj.getFullYear();

        return `${month}/${date}/${year}`;
    }
}