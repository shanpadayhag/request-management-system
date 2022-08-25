String.prototype.stringBetween = function (start, end) {
    const source = this.toString();

    if (source.indexOf(start) === -1) {
        return null;
    }

    const sourceSplitByStartString = source.split(start);

    if (
        sourceSplitByStartString.length === 1
        || sourceSplitByStartString[1] === ''
    ) {
        return '';
    }

    const afterStart = sourceSplitByStartString[1];

    if (afterStart.indexOf(end) === -1) {
        return afterStart;
    }

    const afterStartSplitByEnd = afterStart.split(end);

    if (afterStartSplitByEnd[0] === '') {
        return '';
    }

    return afterStartSplitByEnd[0];
};
