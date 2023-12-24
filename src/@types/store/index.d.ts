export interface Coffe {
  id: number
  tags: string[]
  title: string
  description: string
  price: number
  image: string
}

export interface Coffes {
  coffes: Coffe[]
}

interface CartItemsList {
  items: CartItem[]
}

interface CartItemsCoffe extends Coffe {
  quantity: number
}

interface CartItem {
  coffes: CartItemsCoffe[]
}
