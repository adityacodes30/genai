import Image from "next/image";
import Navbar from "./components/navbar";
import Card from "./components/card";

export default function Home() {
  return (
    <main className="flex flex-col">
     <Navbar /> 
     <div className="flex flex-row justify-evenly pt-20 flex-wrap gap-3">
       <Card />
       <Card />
       <Card />
      </div>
    </main>
  );
}
