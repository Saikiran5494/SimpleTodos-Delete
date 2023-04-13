// Write your code here
import './index.css'

const TodoItem = props => {
  const {items, deleteItem} = props
  const {title, id} = items

  const onDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="item-container">
      <p className="paragraph">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
