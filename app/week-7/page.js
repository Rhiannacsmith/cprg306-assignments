"use client"

import ItemList from './item-list.js'
import NewItem from './new-item.js'
import itemsdata from './items.json'
import { useState } from "react"
import Item from './item.js'
import MealIdeas from './meal-ideas.js'

export default function Page() {
    const [items, setItems] = useState(itemsdata);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        const newItems = [...items, newItem];
        setItems(newItems);
    };

    const handleSelectItem = (newItem) => {
        setSelectedItemName(newItem.name);
    };

    const cleanEmojiName = (ingredientName) => {
        let emojiName = ingredientName.split(',')[0].trim();
        emojiName = emojiName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
        return emojiName;
    };

    return(
        <main className=" bg-blue-950 ">
        <div className="flex">
            <div>
        <h1 className="text-2xl font-bold text-blue-200 pl-36">Add Item</h1>
        <hr class="w-96 h-1 mx-auto bg-white rounded mt-5 mb-1 ml-2"></hr>
        <NewItem onAddItem={handleAddItem}/>
        <h1 className="text-2xl font-bold text-blue-200 text-center mt-1" >Shopping List</h1>
        <hr class="w-96 h-1 mx-auto bg-white rounded mt-5 mb-3 ml-2"></hr>
        <ItemList items={items} onItemSelect={handleSelectItem}/>        
        </div> 
         <div>
         <h1 className="text-2xl font-bold text-blue-200 pl-36">Meal Ideas</h1>
        <hr class="w-96 h-1 mx-auto bg-white rounded mt-5 mb-3 ml-3"></hr>
        <div>
        </div>
         {selectedItemName && <MealIdeas ingredient={cleanEmojiName(selectedItemName)} />} 
         </div> 
        </div>
        </main>
    )
}