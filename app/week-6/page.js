"use client"

import ItemList from './item-list.js'
import NewItem from './new-item.js'
import itemsdata from './items.json'
import { useState } from "react"
import Item from './item.js'


export default function Page() {
    const [items, setItems] = useState(itemsdata);

    const handleAddItem = (newItem) => {
        const newItems = [...items, newItem];
        setItems(newItems);
    };

    return(
       <div className='justify-content content-end'>
        <main className=" bg-blue-950">
         <NewItem onAddItem={handleAddItem}/> 
         <h1 className=" text-3xl font-bold text-blue-200 pl-4 pt-2">Shopping List</h1>  
         <ItemList items={items}/>
        </main>
        </div>
    )
}