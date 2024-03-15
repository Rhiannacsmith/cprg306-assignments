"use client"

import Item from './item.js';
import { useState } from "react"




export default function ItemList({ items, onItemSelect }) 
{
    const [sortBy, setSortBy] = useState("name");

    const handleItemClick = (item) => {
        // item should be an object with a name property
        onItemSelect(item);
    };

    items.sort((a, b) => 
    {
        if (sortBy === "category") {
            if (a.category < b.category) {
                return -1;
            }
            if (a.category > b.category) {
                return 1;
            }
        } 
        else {
            if (a[sortBy] < b[sortBy]) {
                return -1;
            }
            if (a[sortBy] > b[sortBy]) {
                return 1;
            }
        }
        return 0;
    });

    return (
        <div >
            <button className='p-3 ml-5 m-2 w-36 bg-gradient-to-br from-blue-300 to-blue-500 hover:bg-gradient-to-bl font-extrabold text-xl rounded-md' onClick={() => setSortBy("name")}>Name</button>
            <button className=' p-3 ml-7 m-2 w-36 bg-gradient-to-br from-blue-300 to-blue-500 hover:bg-gradient-to-bl font-extrabold text-xl rounded-md' onClick={() => setSortBy("quantity")}>Category</button>
            <ul>
            {items.map((item) => (
                <li key={item.id} onClick={() => handleItemClick(item)}>
                    <Item  name={item.name} quantity={item.quantity} category={item.category} newProp={item.newProp} onSelect={onItemSelect}/>
                </li>               
            ))}
            </ul>
        </div>
    );
}
