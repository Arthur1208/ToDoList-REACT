import { act } from "react";
import "../styles/Task.css"



function Task({task, setTask,cat,catActive}) {

    function deleteTask(name,desc){
        const tabDelete = task.filter((e)=>e.name !== name & e.desc !== desc)
       setTask(tabDelete);
    }

    return(
        task.map(({name,desc,cat},index) => !catActive || catActive === cat ? (
            <div key={name+"-"+index} className="containerTask bg-slate-500 rounded-md w-full h-full p-10 relative">
            <h1 className="text-4xl">{name}</h1>
            <p className="text-lg break-words">{desc}</p>
            <p>{cat}</p>
            <button className="absolute top-5 right-5" onClick={()=>deleteTask(name,desc)}>X</button>
            </div>
            
        ):null)
    
    )
}


export default Task