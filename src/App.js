import { Header } from './components/Header';
import { Footer } from './components/Footer'; 
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';

import './App.css';

function App() {
    const info = "Random";

    //aqui modifique y sigo modificando y le sigo dando

    return ( 
        <div className = "App">
        <Header / >
        <AddTask / >    
        <TaskList info = { info }/> 
        <Footer / >
        </div>
    );
}
export default App;

// function App() {

//   const [count, setCount] = useState(0);

//    function handleAdd() {    
//      setCount(count => count + 1);
//      setCount(count => count + 1);
//      setCount(count => count + 1);
//     }

//   function handleSub(){
//     setCount(count-1);
//   }

//   function handleReset(){
//     setCount(0);
//   }

//   return (
//         <div className="App">
//           <div className="box">
//             <p>{count}</p>
//               <button onClick={handleAdd} className="add">ADD</button>
//               <button onClick={handleSub} className="sub">SUB</button>
//               <button onClick={handleReset} className="reset">RESET</button>
//           </div>
//         </div>
//   );
// }

// export default App;