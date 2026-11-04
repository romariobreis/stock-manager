import { useNavigate } from "react-router-dom"
import useStock from "../hooks/useStock"

export default function DeleteButton({ itemId, itemName }) {
  const navigate = useNavigate()
  const { removeItem } = useStock()
  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
      removeItem(itemId)
      navigate("/items")
    }
  }
  return (
    <button className="button is-danger is-small" onClick={handleDelete}>Excluir</button>
  )
}