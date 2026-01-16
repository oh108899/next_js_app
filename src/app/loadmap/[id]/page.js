



export default async function Loadmaps({params}) {
  const {id} = await params;
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/loadmap/${id}`)
  const loadmap = await res.json()
  
  return (
    <>
      <h3>{loadmap.title}</h3>
      <p style={{'white-space': 'pre-line'}}>{loadmap.desc}</p>
    </>
  );
}