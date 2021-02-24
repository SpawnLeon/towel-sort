module.exports = function towelSort(matrix) {
    if (typeof matrix === 'undefined') {
        return [];
    }
    let result = [];
    for (let i = 0; i < matrix.length; i += 1) {

        if (i % 2 === 0) {
            result = [...result, ...matrix[i]];
        } else {
            result = [...result, ...matrix[i].reverse()];
        }
    }
    return result;
};
