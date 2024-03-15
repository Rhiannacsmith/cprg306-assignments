"use client"

import ItemList from './item-list.js'
import NewItem from './new-item.js'
import itemsdata from './items.json'
import { useState } from "react"
import MealIdeas from './meal-ideas.js'
import { useUserAuth } from '../_utils/auth-context.js'

export default function Page() {
    const [items, setItems] = useState(itemsdata);
    const [selectedItemName, setSelectedItemName] = useState('');
    const { user, gitHubSignIn} = useUserAuth();

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

    if (user){
    return(
        <main className=" bg-blue-950 text-white">
        <div className="flex">
            <div>
        <h1 className="text-2xl font-bold  pl-36">Add Item</h1>
        <hr class="w-96 h-1 mx-auto bg-white rounded mt-5 mb-1 ml-2"></hr>
        <NewItem onAddItem={handleAddItem}/>
        <h1 className="text-2xl font-bold  text-center mt-1" >Shopping List</h1>
        <hr class="w-96 h-1 mx-auto bg-white rounded mt-5 mb-3 ml-2"></hr>
        <ItemList items={items} onItemSelect={handleSelectItem}/>        
        </div> 
         <div>
         <h1 className="text-2xl font-bold  pl-36">Meal Ideas</h1>
        <hr class="w-96 h-1 mx-auto bg-white rounded mt-5 mb-3 ml-3"></hr>
        <div>
        </div>
         {selectedItemName && <MealIdeas ingredient={cleanEmojiName(selectedItemName)} />} 
         </div> 
        </div>
        </main>
    )
    }
    else {
        return(
            <main className='bg-black text-white h-screen text-xl'>
            <p>You Are Not Authorized To See This, Please <button className='bg-black font-extrabold text-decoration-line: underline' onClick={gitHubSignIn}>Sign In</button> </p>
            </main>
        )
    } 
}