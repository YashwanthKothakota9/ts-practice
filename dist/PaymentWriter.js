"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
// type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[];
const paymentWriter = new _1.CSVWriter(['id', 'amount', 'to', 'notes']);
paymentWriter.addRows([
    { id: 1, amount: 100, to: 'Yash', notes: 'reg dev work' },
    { id: 2, amount: 20, to: 'vero', notes: 'reg design work' },
]);
paymentWriter.save('./data/payments.csv');
