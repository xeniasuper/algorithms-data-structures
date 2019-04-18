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

function stockSpanEffective(quotes) {
    let days = [0];
    let spans = [1];

    for (let i = 1; i < quotes.length; i++) {
        while (!(days.length === 0) && quotes[days[days.length-1]] <= quotes[i]) {
            days.pop();
        }
        if (days.length === 0) {
            spans[i] = i+1;
        } else {
            spans[i] = i-days[days.length-1];
        }
        days.push(i);
    }
    return spans;
};

// console.log(stockSpanEffective([7, 11, 8, 6, 4, 8, 9]));