"use client";
//클라이언 컴포넌트용 useParams 함수, 주소표시줄의 id 파악
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";

export default function Control() {
  const params = useParams();
  const id = params?.id;
  const router = useRouter();

  const handleDelete = ()=>{
    const ok = window.confirm('정말 삭제할까요?');
    if(!ok) return;
    
    const options = {
      method:'DELETE'     
    }
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/topics/${id}`, options)
    .then(res=>res.json())
    .then(()=>{
      router.push('/');//삭제후 홈으로 이동
      router.refresh();//이동한 페이지 새로고침
    });
  }

  return (
    <ul className="nav gap-1">
      <li>
        <Link href="/create" className="btn btn-primary">Create</Link>
      </li>
      {
        id && <>
          <li>
            <Link href={`/update/${id}`} className="btn btn-secondary">Update</Link>
          </li>
          <li><button type="button" className="btn btn-danger" onClick={handleDelete}>Delete</button></li>
        </>
      }
    </ul>
  )
}