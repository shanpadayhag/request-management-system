class ObjectHelper {
    static alternativeValueIfEmpty(value, alternativeValue) {
        if (value === '' || value === null || value === undefined || isNaN(value)) return alternativeValue;
        else return value;
    }
}

export default ObjectHelper;
