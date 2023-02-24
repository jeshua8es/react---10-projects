import "./taskCard.css";
import styles from "./TaskCard.module.css";

export const TaskCard = (props, abc) => {
    return ( 
      <div className="taskcard">
        <li key = { props.task.id } className = { props.task.completed ? "completed":"incompleted" } >
          <span classname={styles.title}> { props.task.id } - { props.task.name } - { props.abc } </span> 
          <button onClick = {
            () => props.handleDelete(props.task.id) }
                  className = 'delete' > Delete 
          </button> 
        </li>
      </div>
    )
}