import ItemList from './item-list.js'

export default function Page() {
    return(
        <main className=" bg-blue-950">
            <h1 className=" text-3xl font-bold text-blue-200 pl-4 pt-2">Shopping List</h1>   
        <ItemList/>   
        </main>
    )
}