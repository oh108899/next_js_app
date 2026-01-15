import Link from "next/link";

export default async function Loadmaps() {
  const res = await fetch(`http://localhost:9999/loadmap`)
  const loadmaps = await res.json()
  console.log(loadmaps)
  return (
    <>
      <h2>프론트엔드 개발자 로드맵</h2>
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