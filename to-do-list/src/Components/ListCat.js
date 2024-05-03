function ListCat({ cat, setCat,setCatActive,catActive}) {

    function handleDelete(name){
        const catDelete = cat.filter((e)=>e.name !== name);
        setCat([...catDelete])
    }
    function filterCat(name){
        if(catActive === name){
            setCatActive("")
            
        }
        else{

            setCatActive(name)
            document.getElementById("catActive").classList.add("lolol ")
        }
    }
 
  return (
    <ul>
      {cat.map(({ name }, index) => (
        <div key={name + index} className="flex justify-between">
          <li id="catActive" onClick={()=>filterCat(name)}>{name}</li>
          <div onClick={()=>handleDelete(name)}>X</div>
        </div>
      ))}
    </ul>
  );
}
export default ListCat;
