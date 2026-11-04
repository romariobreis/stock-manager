import useStock from "../hooks/useStock"

export default function DeleteButton({ itemId, itemName }) {
  const { removeItem } = useStock()
  const handleDelete = () => {
    if (confirm(`Tem certeza que deseja excluir ${itemName}?`)) {
      removeItem(itemId)
    }
  }
  return (
    <button className="button is-danger is-small" onClick={handleDelete}>Excluir</button>
  )
}