import { createContext, useState } from "react";

export const StockContext = createContext({})

//Item: {name, description, quantity, price, category, createdAt, updatedAt}

export function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("manager-stock")
    const itemsArray = JSON.parse(storedItems)

    if (!itemsArray) return []

    itemsArray.forEach(item => {
      item.createdAt = new Date(item.createdAt)
      item.updatedAt = new Date(item.updatedAt)
    });

    return itemsArray
  })

  const addItem = (item) => {
    setItems(currentState => {
      const updatedItems = [item, ...currentState]
      localStorage.setItem("manager-stock", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  return (
    <StockContext.Provider value={{ items, addItem }}>
      {children}
    </StockContext.Provider>
  )
}