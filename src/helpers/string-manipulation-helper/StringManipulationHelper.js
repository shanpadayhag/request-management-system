class StringManipulationHelper {
    static humanName(last, first, middle) {
        return `${last.toTitleCase()}, ${first.toTitleCase()} ${middle?.toTitleCase() ?? ''}`
    }

    static yearLevel(value) {
        if (value == 1) {
            return '1st Year';
        } else if (value == 2) {
            return '2nd Year';
        } else if (value == 3) {
            return '3rd Year';
        } else {
            return '4th Year';
        }
    }
}

export default StringManipulationHelper;
