



export default async function Loadmaps({params}) {
  const {id} = await params;
  const res = await fetch(`http://localhost:9999/loadmap/${id}`)
  const loadmap = await res.json()
  
  return (
    <>
      <h2>{loadmap.title}</h2>
      <p>{loadmap.desc}</p>
    </>
  );
}