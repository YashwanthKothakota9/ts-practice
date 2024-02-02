import { CSVWriter } from '.';

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

// type PaymentColumns = ('id' | 'amount' | 'to' | 'notes')[];

const paymentWriter = new CSVWriter<Payment>(['id', 'amount', 'to', 'notes']);

paymentWriter.addRows([
  { id: 1, amount: 100, to: 'Yash', notes: 'reg dev work' },
  { id: 2, amount: 20, to: 'vero', notes: 'reg design work' },
]);

paymentWriter.save('./data/payments.csv');
