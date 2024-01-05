export interface Account {
  id: string;
  name: string;
  budget: number;
  userId: string;
  transactions: Transaction[];
}

export interface Transaction {
  id: string;
  description: string;
  amount: number;
  type: number;
  accountId: string;
  category: Category;
}

export interface Category {
  id: string;
  name: string;
}
