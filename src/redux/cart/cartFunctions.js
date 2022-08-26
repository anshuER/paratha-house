// function to add the cart items in the cart and managing the quantity of the added items
export const addItemToCart = (cartItems, cartItemToadd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToadd.id
  );

  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToadd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...cartItemToadd, quantity: 1 }];
};

// function to remove the item if the number of quantity is 1 and function is called then it will remove the item
export const removeItem = (cartItems, cartItemToRemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

// function to get the total of the cart dishes prices
export const totalItems = (initialItems, addedItems) => {
  const total = initialItems.reduce(
    ...(initialItems + addedItems.quantity * addedItems.price),
    0
  );
  return total;
};
