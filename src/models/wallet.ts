export interface Wallet {
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}

export class WalletData implements Wallet {
  constructor(data: Wallet) {
    this.balance = data.balance;
    this.total_payout = data.total_payout;
    this.total_revenue = data.total_revenue;
    this.pending_payout = data.pending_payout;
    this.ledger_balance = data.ledger_balance;
  }
  balance: number;
  total_payout: number;
  total_revenue: number;
  pending_payout: number;
  ledger_balance: number;
}
