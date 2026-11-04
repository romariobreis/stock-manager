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

  const getItem = (itemId) => {
    return items.find(item => item.id === +itemId)
  }

  const addItem = (item) => {
    setItems(currentState => {
      const updatedItems = [item, ...currentState]
      localStorage.setItem("manager-stock", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const updateItem = (itemId, newValues) => {
    setItems(currentState => {
      const itemIndex = currentState.findIndex(item => item.id === +itemId)
      const updatedItems = [...currentState]
      Object.assign(updatedItems[itemIndex], newValues, { updatedAt: new Date() })
      localStorage.setItem("manager-stock", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  const removeItem = (itemId) => {
    setItems(currentState => {
      const updatedItems = currentState.filter(item => item.id !== itemId)
      localStorage.setItem("manager-stock", JSON.stringify(updatedItems))
      return updatedItems
    })
  }

  return (
    <StockContext.Provider value={{ items, getItem, addItem, updateItem, removeItem }}>
      {children}
    </StockContext.Provider>
  )
}