import  { createContext, useState, useEffect, ReactNode } from 'react';

// Define the CartItem type
interface CartItem {
  productDescription: string;
  categoryId: string;
  productModel: string;
  marketPrice: number;
  supplierName: string;
  ProductName: string;

  coverImage: string ;
  id: string;
  productPrice: number;
  productQuantity: number;
}

// Define the CartContext value type
interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  getCartTotal: () => number;
  increaseproductQuantity: (item: CartItem) => void;
  decreaseproductQuantity: (item: CartItem) => void;
}

// Create the context with default values (empty or dummy implementations)
export const CartContext = createContext<CartContextType | undefined>(undefined);

// Define props for CartProvider
interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(
    localStorage.getItem('cartItems') ? JSON.parse(localStorage.getItem('cartItems')!) : []
  );

  const addToCart = (item: CartItem) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, productQuantity: cartItem.productQuantity + 1 }
            : cartItem
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, productQuantity: 1 }]);
    }
  };

  const removeFromCart = (item: CartItem) => {
    const updatedCartItems = cartItems.map((cartItem) =>
      cartItem.id === item.id && cartItem.productQuantity > 1
        ? { ...cartItem, productQuantity: cartItem.productQuantity - 1 }
        : cartItem
    );
    setCartItems(updatedCartItems.filter((cartItem) => cartItem.id !== item.id));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const getCartItemTotal = (item: CartItem) => {
    return item.productPrice * item.productQuantity;
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + getCartItemTotal(item), 0);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      setCartItems(JSON.parse(cartItems));
    }
  }, []);

  const increaseproductQuantity = (item: CartItem) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id ? { ...cartItem, productQuantity: cartItem.productQuantity + 1 } : cartItem
      )
    );
  };

  const decreaseproductQuantity = (item: CartItem) => {
    setCartItems(
      cartItems.map((cartItem) =>
        cartItem.id === item.id && cartItem.productQuantity > 1
          ? { ...cartItem, productQuantity: cartItem.productQuantity - 1 }
          : cartItem
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
        getCartTotal,
        increaseproductQuantity,
        decreaseproductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
