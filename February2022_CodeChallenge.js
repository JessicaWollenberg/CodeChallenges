var unitPrice = 299;
var fiveUniqueDiscount = .75;
var fourUniqueDiscount = .80;
var threeUniqueDiscount = .90;
var twoUniqueDiscount = .95;

function computeTotalPrice(products) {
    
    let totalPrice = 0;
    const productToCountMap = new Map([
        ['A', 0],
        ['B', 0],
        ['C', 0],
        ['D', 0],
        ['E', 0]
    ]);

    products.forEach(x => {
        var count = productToCountMap.get(x);
        count++;
        productToCountMap.set(x, count);
    })

    while(productToCountMap.size > 0) {
        for(const entry of productToCountMap.entries()) {
            if(entry[1] === 0) {
                productToCountMap.delete(entry[0]);
            }
        }

        if(productToCountMap.size > 4) {
            totalPrice += unitPrice * 5 * fiveUniqueDiscount;
        }else if(productToCountMap.size > 3) {
            totalPrice += unitPrice * 4 * fourUniqueDiscount;
        }else if(productToCountMap.size > 2) {
            totalPrice += unitPrice * 3 * threeUniqueDiscount;
        }else if(productToCountMap.size > 1) {
            totalPrice += unitPrice * 2 * twoUniqueDiscount;
        }else if(productToCountMap.size > 0) {
            totalPrice += unitPrice;
        }
        
        for(const entry of productToCountMap.entries()) {
            var count = entry[1];
            count--;
            productToCountMap.set(entry[0], count);
        }
    }
    return totalPrice.toFixed(2);
}

console.log(computeTotalPrice(['A','A','B','B','C','C','D','E']));