import "../styles/Form.css";
import { useState } from "react";

function Form({ task, setTask, cat }) {
  const [nameInput, setNameInput] = useState("");
  const [descInput, setDescInput] = useState("");
  const [catInput, setCatInput] = useState("");

  function getTask(e) {
    e.preventDefault();
    setTask([...task, { name: nameInput, desc: descInput, cat: catInput}]);

    setNameInput("");
    setDescInput("");
    setShowModal(false)
    console.log(nameInput);
    console.log(descInput);
  }

  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button
        className="text-sm px-6 py-3 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Ajouter une tâches
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Ajouter une tâche</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-100 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black opacity-100 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="p-5">
                <form
                  onSubmit={(e) => {
                    getTask(e);
                  }}
                  className="formTask"
                >
                  <label>Nom de la tâche</label>
                  <input
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                    className="name"
                    type="text"
                  />

                  <label>Description</label>
                  <textarea
                    value={descInput}
                    onChange={(e) => setDescInput(e.target.value)}
                    className="desc"
                  />
                  <select
                    value={catInput}
                    onChange={(e) => setCatInput(e.target.value)}
                    className="desc"
                  ><option></option>
                    {cat.map(({name},index)=>(
                        <option key={index} value={name}>{name}</option>
                    ))}
                  </select>

                  <input type="submit" />
                </form>
                </div>
              </div>
            </div>
          </div>

          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </div>
  );
}

export default Form;
