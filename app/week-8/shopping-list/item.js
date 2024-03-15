export default function Item({ name, quantity, category, onSelect }) {
    return (
        <ul>
    <div className="m-4 p-3 bg-blue-500 rounded max-w-sm">          
            <li className="font-bold text-blue-200 text-xl"  onClick={onSelect}><h2>{name}</h2> 
            <p className="text-sm">Buy {quantity} In {category}</p>

            </li>         
    </div>
        </ul>
    );
}
