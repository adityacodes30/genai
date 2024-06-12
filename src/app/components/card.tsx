import Image from "next/image"

export default function Card() {

    return (<div className="flex flex-col justify-center align-middle gap-3 items-center w-[300px] h-[400px] border-2 rounded-xl">
        <div className="w-[250px] h-[300px]"><img alt="img" src="https://picsum.photos/250/300"></img></div>
        <div className="flex flex-col w-[250px]">
            <div className="flex justify-between">
            <div className="text-lg">Title</div>
            <div className="text-md">Price</div>
            </div>
            <div className="text-sm">Description</div>
        </div>
    </div>)
    
}