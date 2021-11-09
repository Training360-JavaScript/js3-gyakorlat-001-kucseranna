const removeDuplicatesFromArray = (arr) => {
    let arrWoDuplicates = arr.filter((element, index) => {
        return arr.indexOf(element) === index;
    })
    return arrWoDuplicates;
};
export default removeDuplicatesFromArray
