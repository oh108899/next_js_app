import Link from "next/link";

export default async function Loadmaps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/loadmap`)
  const loadmaps = await res.json()
  console.log(loadmaps)
  return (
    <>
      
      <ul>
        {
          loadmaps.map(item => {
            return (
              <li>
                <Link key={item.id} href={`/loadmap/${item.id}`}>{item.title}</Link>
              </li>
            )
          })
        }
      </ul>
    </>
  );
}