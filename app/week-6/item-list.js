"use client"

import Item from './item.js';
import { useState } from "react"



export default function ItemList({ items }) 
{
    const [sortBy, setSortBy] = useState("name");

    function handleAddItem(item) {
        setItems([...items, item]);
    }

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
        <div>
            <button className='m-4 p-3 w-1/12 bg-gradient-to-br from-blue-300 to-blue-500 hover:bg-gradient-to-bl font-extrabold text-xl rounded-md' onClick={() => setSortBy("name")}>Name</button>
            <button className=' m-4 p-3 w-1/12 bg-gradient-to-br from-blue-300 to-blue-500 hover:bg-gradient-to-bl font-extrabold text-xl rounded-md' onClick={() => setSortBy("quantity")}>Category</button>
            <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <Item  name={item.name} quantity={item.quantity} category={item.category} newProp={item.newProp} />
                </li>               
            ))}
            </ul>
        </div>
    );
}
