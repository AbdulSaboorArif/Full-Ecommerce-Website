
export const addToCart = (product: ProductTypeGloble) => {
  const cart: ProductTypeGloble[] = JSON.parse(localStorage.getItem("cart") || "[]")
  const existingProductIndex = cart.findIndex((item) => item._id === product._id)

  if (existingProductIndex > -1) {
    cart[existingProductIndex].quantity += 1
  } else {
    cart.push({ ...product, quantity: 1 })
  }

  localStorage.setItem("cart", JSON.stringify(cart))
}

export const removeFromCart = (productId: string) => {
  let cart: ProductTypeGloble[] = JSON.parse(localStorage.getItem("cart") || "[]")
  cart = cart.filter((item) => item._id !== productId)
  localStorage.setItem("cart", JSON.stringify(cart))
}

export const updateCartQuantity = (productId: string, quantity: number) => {
  const cart: ProductTypeGloble[] = JSON.parse(localStorage.getItem("cart") || "[]")
  const productIndex = cart.findIndex((item) => item._id === productId)
  if (productIndex > -1) {
    cart[productIndex].quantity = quantity
    localStorage.setItem("cart", JSON.stringify(cart))
  }
}

export const getCartItems = (): ProductTypeGloble[] => {
  if (typeof window !== "undefined") {
    return JSON.parse(localStorage.getItem("cart") || "[]")
  }
  return []
}