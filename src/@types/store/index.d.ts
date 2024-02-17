export interface Coffee {
  id: number;
  tags: string[];
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface Coffees {
  coffees: Coffee[];
}

interface CartItemsList {
  items: CartItem[];
}

interface CartItemsCoffee extends Coffee {
  quantity: number;
}

interface CartItem {
  coffees: CartItemsCoffee[];
}
