import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <h2>welcome</h2>
      <p>hello word</p>
      <Image src="/home.png" alt="" width={48} height={48}></Image>
    </>
  );
}
