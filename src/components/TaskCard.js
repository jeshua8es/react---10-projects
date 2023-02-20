

export const TaskCard = (props, abc) => {
  return (
     <li key={props.task.id} className={props.task.completed ? "completed":"incompleted"}>
          <span>{props.task.id} - {props.task.name} - {props.abc}</span>
          <button onClick={()=>props.handleDelete(props.task.id)} className='delete'>Delete</button>
     </li>
  )
}
