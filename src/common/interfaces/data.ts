export interface Category {
  id: number;
  title: string;
  icon: number;
  value: number;
}

export interface Expense {
  id: number;
  value: number;
  dateTime: Date;
  categoryId: number;
}
