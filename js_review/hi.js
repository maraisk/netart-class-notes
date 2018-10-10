

let action = process.argv[2]
let amount = Number(process.argv[3])
let balance = 1000

if(typeof isNaN(amount)){
    console.log('oh no, u passed ${argv[3]} instead of a number')
    return
}

if(action == 'give'){
    balance += amount
    console.log('deposit!')
    console.log('${balance}')
} else if(action == 'take') {
    console.log('gonna do some wirhdrawing')
    balance -= amount
    console.log('${balance}')
} else {
    console.log('sorry, '+action+' is not a function')
}
