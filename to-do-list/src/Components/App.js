import { useEffect, useState } from "react";
import Form from "./Form";
import Task from "./Task";
import NightMode from "./NightMode";
import FormCat from "./FormCat";
import "../index.css";
import "../styles/Mode.css";
import ListCat from "./ListCat";



function App() {
  const savedTask = localStorage.getItem("localTask");
  const savedCat = localStorage.getItem("localCat");
  const [task, setTask] = useState(savedTask ? JSON.parse(savedTask) : []);
  const [night, setNight] = useState(false);
  const [catActive, setCatActive] = useState('');
 const [cat, setCat]= useState(savedCat ? JSON.parse(savedCat) : []);

  const isNight = night;
  useEffect(() => {
    localStorage.setItem("localTask", JSON.stringify(task));
  }, [task]);

  useEffect(() => {
    localStorage.setItem("localCat", JSON.stringify(cat));
  }, [cat]);

  return (
    <div className="App h-screen flex" data-theme={isNight ? "night" : "light"}>
      <div className="menu-bar h-100 bg-[#F4F4F4] rounded-md w-1/5 p-5">
        <NightMode night={night} setNight={setNight} />
        <Form cat={cat} task={task} setTask={setTask} />
        <FormCat cat={cat} setCat={setCat}/>
        <ListCat catActive={catActive} setCatActive={setCatActive} cat={cat} setCat={setCat}/>
      </div>
      <div className="pl-3 tasks w-4/5 grid-cols-4 auto-rows-[1fr] gap-4 grid">
        <Task className="TaskCard" cat={cat} task={task} catActive={catActive} setTask={setTask} />
      </div>
    </div>
  );
}

export default App;
