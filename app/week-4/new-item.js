"use client"

import { useState } from "react"
       
export default function NewItem() 
{
const[name, setName] = useState("");
const[quantity, setQuantity] = useState(1);
const[category, setCategory] = useState("Produce");

const handleSubmit = (event) => {
    event.preventDefault();
    console.log({name, quantity, category});
    setName("");
    setQuantity(1);
    setCategory("Produce");
};

const showAlert = () => {
    alert(`Item Added! ${name}, ${quantity}, ${category}`);
};

return (

<div className= "max-w-sm mx-auto p-4 bg-slate-800">
    <form onSubmit={handleSubmit} className="max-w-sm mx-auto">
        <div className="mb-5 p-2 text-white bg-blue-500 rounded">
        <label className="font-extrabold text-lg">
            Name:
            <input className="ml-2 border-x-2 text-black" type="text" required value={name} onChange={(event) => setName(event.target.value)}/>
        </label>
        </div>

        <div className="mb-5 p-2 text-white  bg-blue-500 rounded">
        <label className="font-extrabold text-lg">
            Quantity: 
            <input className="ml-2 border-x-2 text-black" type="number" required value={quantity} onChange={(event) => setQuantity(event.target.value)} min = "1" max = "99"/>
        </label>
        </div>

        <div className="mb-5 p-2 text-white  bg-blue-500 rounded">
        <label className="font-extrabold text-lg">
            Category: 
            <select className="ml-2 border-x-2 text-black" value={category} onChange={(event) => setCategory(event.target.value)}>
                <option value="Produce">Produce</option>
                <option value="Dairy">Dairy</option>
                <option value="Bakery">Bakery</option>
                <option value="Meat">Meat</option>
                <option value="Frozen Foods">Frozen Foods</option>
                <option value="Dry Goods">Dry Goods</option>
                <option value="Canned Goods">Canned Goods</option>
                <option value="Beverages">Beverages</option>
                <option value="Snacks">Snacks</option>
                <option value="Household">Household</option>
                <option value="Other">Other</option>
            </select>
        </label>
        </div>
        <div className="flex items-center justify-center">
        <button type ="submit" onClick={showAlert} className=" text-black font-extrabold text-lg bg-gradient-to-br from-blue-300 to-blue-500 hover:bg-gradient-to-bl p-3  rounded-md">Add Item</button>
        </div>
              
    </form>
    </div>
    
)
}



//Set alert
//Reset State

