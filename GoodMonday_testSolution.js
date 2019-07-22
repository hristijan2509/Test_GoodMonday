function solve(array) {
    //array where we are storing all the positive values
    let positives = [];
    // array where we are going storing all the negative values
    let negatives = [];
    // flag for whether there is a 0 in the array
    let hasZero = false;
    let sum = 0;
    let i = 0;

    array = sort(array);

    /* 
    * with this iteration positive and
    * negative values will be
    * divided into separate arrays
    */
    for(i = 0; i < array.length; i++) {
        if (parseInt(array[i]) < 0) {
            negatives.push(parseInt(array[i]));
        }

        if (parseInt(array[i]) == 0) {
            hasZero = true;
        }

        if (parseInt(array[i]) > 0) {
            positives.push(parseInt(array[i]));
        }
    }

    /*
    * If there is a 0 in the initial array
    * and there is an odd number of negative values
    * we unset the biggest number from the negatives array,
    * since it should be multiplied with 0
     */
    if (negatives.length % 2 == 1 && hasZero) {
        negatives.length = negatives.length - 1;
    }

    /*
    * Iterating through the array containing the negative values
    * and multiplying every pair of neighbours, so that we have
    * the biggest sum. (same goes for positives array)
     */
    for (i = 0; i < negatives.length; i += 2) {
        if (i == negatives.length - 1) {
            sum += negatives[i];
            break;
        }

        let m = negatives[i] * negatives[i+1];
        let s = negatives[i] + negatives[i+1];

        /*
        * Check whether the sum of the numbers or the 
        * product of the two neighbour numbers is bigger,
        * so that we decide if we add them one by one 
        * or as a product to the final sum.
        * (same goes for positives array)
         */
        if (m > s) {
            sum += m;
        } else {
            sum += s;
        }
    }

    for (i = (positives.length - 1); i >= 0; i -= 2) {
        if (i==0) {
            sum += positives[i];
            break;
        }

        let m = positives[i] * positives[i-1];
        let s = positives[i] + positives[i-1];

        if (m > s) {
            sum += m;
        } else {
            sum += s;
        }
    }

    return sum;
}

function sort(array) {
    return array.sort();
}