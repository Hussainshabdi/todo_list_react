import React,{useState} from 'react';
// import { useState } from 'react';
function Todo() {
   const [txt,setText] = useState('')
   const [Items,setItems] = useState([]);
   function changetxt(e){
     setText(e.target.value)
   }

//    function reName(){
//     Items.map((elem,ind)=>{
//         return elem===key;
//     })
//    }
   function addItems(){
    // setItems([...Items,txt])
    // console.log(Items)
    if(!txt)
    {
        console.log("error")
    }
    else{

        setItems([...Items,txt]);
        setText("")
    }
    // console.log(Items)
    // console.log(Items.map(num)=>num)
   }
   let Del=(id)=>{
   const updatedItems=Items.filter((elem,ind)=>{
    return ind !== id;
})
setItems(updatedItems);
}
   
    return (
        <div className='Main_div'>
            <div className="Center_div">
                <h1>ToDo List</h1>
                <br />
                <input type="txt"value={txt} onChange={changetxt} placeholder='Add a Item' className='input'  />
                <button className='btn' onClick={addItems}> + </button>
                <br />
                <ol>

    
                    {/* <li>{Items}</li> */}
                   { Items.map((item,Ind)=>{
                        return(
                            <div key={Ind}>
                        <li><span >{item}</span><i><button className='btnDel' onClick={()=>Del(Ind)}>X</button></i></li>
                            </div>
                        )
                       
                    })}
                    {/* <li>{txt}</li> */}
                    {/* {Items.map((item)=>{
                      return<li>{item}</li>
                    })}  */}
                </ol>
            </div>
        </div>
    );
}

export default Todo;