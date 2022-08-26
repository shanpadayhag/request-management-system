class StringManipulationHelper {
    static humanName(last, first, middle) {
        return `${last.toTitleCase()}, ${first.toTitleCase()} ${middle?.toTitleCase() ?? ''}`
    }

    static yearLevel(value) {
        const yearLevelList = ['1st Year', '2nd Year', '3rd Year', '4th Year', '5th Year']
        return yearLevelList[value - 1];
    }
}

export default StringManipulationHelper;
