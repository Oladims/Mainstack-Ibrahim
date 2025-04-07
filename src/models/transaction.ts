export interface Transaction {
  amount: number;
  metadata: Metadata;
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}

interface Metadata {
  name: string;
  type: string;
  email: string;
  quantity: number;
  country: string;
  product_name: string;
}

export class TransactionData implements Transaction {
  constructor(data: Transaction) {
    this.amount = data.amount;
    this.metadata = data.metadata;
    this.payment_reference = data.payment_reference;
    this.status = data.status;
    this.type = data.type;
    this.date = data.date;
  }
  amount: number;
  metadata: Metadata;
  payment_reference: string;
  status: string;
  type: string;
  date: string;
}
