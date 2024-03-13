import Link from "next/link";

export default function page() {
  return (
  <main className="h-screen bg-slate-400 font-bold"> 
    <h1>CPRG 306: Web Development 2 - Assignments</h1>
    <ul>
      <li className="hover:underline">
        <Link href="week-2">Week 2</Link> 
      </li>
      <li className="hover:underline">
        <Link href="week-3">Week 3</Link> 
      </li>
      <li className="hover:underline">
        <Link href="week-4">Week 4</Link> 
      </li>
      <li className="hover:underline">
        <Link href="week-5">Week 5</Link> 
      </li>
      <li className="hover:underline">
        <Link href="week-6">Week 6</Link> 
      </li>
      <li className="hover:underline">
        <Link href="week-7">Week 7</Link> 
      </li>
    </ul>
  </main>
  );
}
