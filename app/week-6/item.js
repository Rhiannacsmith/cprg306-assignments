export default function Item({ name, quantity, category }) {
    return (
        <ul>
    <div className="m-4 p-3 bg-blue-500 rounded w-3/12" >          
            <li className="font-bold text-blue-200 text-xl"><h2>{name}</h2> 
            <p className="text-sm">Buy {quantity} In {category}</p>
            </li>         
    </div>
        </ul>
    );
}
