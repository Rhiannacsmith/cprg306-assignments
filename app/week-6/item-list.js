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
            <button className='m-4 p-3 w-1/12 focus:bg-blue-300 bg-blue-500 font-extrabold text-xl' onClick={() => setSortBy("name")}>Name</button>
            <button className='bg-blue-500 m-4 p-3 w-1/12 focus:bg-blue-300 font-extrabold text-xl' onClick={() => setSortBy("quantity")}>Category</button>
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
