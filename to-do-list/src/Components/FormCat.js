import { useState } from "react";

function FormCat({ cat, setCat }) {
  const [value, setValue] = useState("");

function handleSubmit(e){
    e.preventDefault();
    if (cat.some((catItem) => catItem.name === value)) {
        alert("Catégorie existante");
    } else {
        // Ajouter la nouvelle catégorie à la liste
        setCat([...cat, { name: value }]);
        // Réinitialiser la valeur du champ d'entrée
        setValue("");
    }
}


  return (
    <div>
      <form onSubmit={(e)=>handleSubmit(e)} className="">
        <label>Nom de la catégorie</label>
        <input value={value} onChange={(e)=>setValue(e.target.value)} type="text"></input>
        <input type="submit"></input>
      </form>
    </div>
  );
}

export default FormCat;
