// STOCK SPAN
function stockSpan(quotes) {
    let differences = [];

    for (let i = 0; i < quotes.length; i++) {
        let difference = 1;

        for (let j = i-1; j >= 0; j--) {
            if (quotes[j] <= quotes[i]) {
                difference++;
            } else {
                break;
            }
        }
        differences.push(difference);
    }
    return differences;
}

// console.log(stockSpan([7, 11, 8, 6, 4, 8, 9]));