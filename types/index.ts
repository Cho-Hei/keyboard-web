export type ProductProps = {
  id: string;
  img: string;
  productName: string;
  brand: string;
  price: string;
  color: string;
  connectivity?: string;
  size?: string;
  productType: string;
  features: string[];
};

export type CartProductGroup = {
  product: ProductProps;
  quantity: number;
};

export type CartContextType = {
  cartProducts: CartProductGroup[];
  addToCart: (product: ProductProps, amount: number) => void;
  setCartProducts: (cartProducts: CartProductGroup[]) => void;
  removeCartProduct: (index: number) => void;
  clearCart: () => void;
};

export type CartProductProps = {
  index: number;
  product: CartProductGroup;
  onRemove: (index: number) => void;
};

export type ItemObject = {
  id: string;
  title: string;
  selected: boolean;
};
