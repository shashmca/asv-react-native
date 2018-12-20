
class Txn {
    constructor(id, amount, type, date) {
        this.id = id;
        this.amount = amount;
        this.type = type;
        this.date = date
    }
}

// data
let txns = [
    new Txn(123, 1000.00, 'CREDIT', new Date()),
    new Txn(124, 1000.00, 'CREDIT', new Date()),
    new Txn(125, 2000.00, 'DEBIT', new Date()),
    new Txn(126, 1000.00, 'DEBIT', new Date()),
    new Txn(127, 4000.00, 'CREDIT', new Date()),
    new Txn(128, 1000.00, 'DEBIT', new Date()),
    new Txn(129, 6000.00, 'CREDIT', new Date()),
    new Txn(130, 8000.00, 'DEBIT', new Date())
];


class TxnServiceV1 {
    getTxnsByAmount(amount) {
        // imperative style ==> what + how  
        let out = [];
        for (let i = 0; i < txns.length; i++) {
            let txn = txns[i];
            if (txn.amount === amount)
                out.push(txn)
        }
        return out;
    }
    getTxnsByRange(min, max) {
        let out = [];
        for (let i = 0; i < txns.length; i++) {
            let txn = txns[i];
            if (txn.amount >= min && txn.amount <= max)
                out.push(txn)
        }
        return out;
    }
}

//-----------------------------------------------------

const txnUtilLib = {
    filter(inp, predicate) {
        let out = [];
        for (let i = 0; i < txns.length; i++) {
            let txn = txns[i];
            if (predicate(txn))
                out.push(txn)
        }
        return out;
    }
}


class TxnServiceV2 {
    getTxnsByAmount(amount) {
        // deeclarative style ( what )
        return txnUtilLib.filter(txns, txn => txn.amount === amount)
    }
    getTxnsByRange(min, max) {
        return txnUtilLib.filter(txns, txn => txn.amount >= min && txn.amount <= max)
    }
}



class TxnServiceV3 {
    getTxnsByAmount(amount) {
        // deeclarative style ( what )
        return txns.filter(txn => txn.amount === amount)
    }
    getTxnsByRange(min, max) {
        return txns.filter(txn => txn.amount >= min && txn.amount <= max)
    }
}


// UI
let txnService = new TxnServiceV3();
let result = txnService.getTxnsByRange(1000.00, 4000.00)
for (let i = 0; i < result.length; i++) {
    console.log(result[i])
}