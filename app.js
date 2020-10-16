slowMath.add(6,2)
    .then((sum) => {
        console.log(`sum of 6 and 2 is ${sum}`)
        return slowMath.multiply(sum,2)
    }) .then((product) => {
        console.log(`Multiply that by 2 = ${product}`)
        return slowMath.divide(product, 4)
    }) .then((dividend) => {
        console.log(`divide this by 4 = ${dividend} `)
        return slowMath.subtract(dividend, 3)
    }) .then ((difference) => {
        console.log(`subtract 3 from the result = ${difference}`)
        return slowMath.add(difference, 98)
    }) .then ((sum) => {
        console.log(`add 98 to that and it makes ${sum}`)
        return slowMath.remainder(sum, 2)
    }) .then ((remainder) => {
        console.log(`the remainder of that divided by 2 is ${remainder} `)
        return slowMath.multiply(remainder, 50)
    }) .then ((multiply) => {
        console.log(`then that multiplied by 50 = ${multiply}`)
        return slowMath.remainder(multiply, 40)
    }) .then ((remainder) => {
        console.log(`the remainder of the number is ${remainder}`)
        return slowMath.add(remainder, 32)
    }) .then ((sum) => {
        console.log(`then the sum shoots up to ${sum}`)
        console.log(`the final result is 42. it's endgame now`)
    })
    .catch ((err) => {
        console.log(`ayy chief you messed up my page. WHY?`)
        console.log(err)
    })