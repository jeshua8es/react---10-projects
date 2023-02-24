import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import "./taskList.css";

export const TaskList = ({ xyz }) => {

    const [tasks, setTasks] = useState([
        { id: 5271, name: "Record React Lectures", completed: true },
        { id: 7825, name: "Edit React Lectures", completed: false },
        { id: 8391, name: "Watch Lectures", completed: false }
    ]);

    const [show, setShow] = useState(true);

    const styles = {
        color: show ? "3D8361" : "#be3434",
        border: "2px solid",
        borderColor: show ? "3D8361" : "#be3434",
        borderRadius: "5px",
        fontSize: "28px",
        padding: "20px"
    }

    function handleDelete(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

    return ( 
        <section className = 'tasklist'>
            <h1 style = { styles } > Task List </h1>  
            <ul>
            <button className = 'trigger'onClick = { () => setShow(!show)}>{show ? "Hide":"Show"} </button>
            {
                show && tasks.map((task) => (  
                    <TaskCard key = { task.id }
                              abc = { xyz }
                              task = { task }
                              handleDelete = { handleDelete }/>
                ))
            } 
            </ul> 
            <BoxCard result = "success" >
                <p className = "title" > Lorem ipsum dolor sit amet. </p>   
                <p className = "description" > Lorem, ipsum dolor sit amet consectetur adipisicing elit.Distinctio ipsam molestias atque soluta consequuntur debitis iure, suscipit ea eligendi quis sunt delectus perferendis, nemo repudiandae ipsa quisquam sint rerum placeat. </p>  
            </BoxCard>

            <BoxCard result = "warning" >
                <p className = "title" > Lorem ipsum dolor sit. </p>  
                <p className = "description" > Lorem ipsum, dolor sit amet consectetur adipisicing elit.Hic eaque commodi porro minus voluptas sunt neque, similique ratione.Corrupti sequi at placeat cupiditate voluptatem inventore ratione, mollitia atque ducimus ex. </p>  
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates quas laudantium similique animi ratione sed a, voluptatem aspernatur labore distinctio nemo dicta culpa molestiae veritatis ab alias voluptas sapiente commodi ? </p>  
            </BoxCard>  
        </section>
    )
}