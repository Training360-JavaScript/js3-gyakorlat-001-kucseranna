const HU = {
    date(anyDate) {
        return new Intl.DateTimeFormat('hu-HU').format(anyDate);
    },
    curreny(amount) {
        return new Intl.NumberFormat('hu-HU', {
            style: 'currency',
            currency: 'HUF'
        }).format(amount);
    },

    list(arr) {
        return arr.map((item, i) => i === arr.length-1 ? ` és ${item}` : `, ${item}`)
            .join('').slice(2);
    }
};
export default HU