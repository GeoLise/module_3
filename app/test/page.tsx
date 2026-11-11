import { name } from "next/dist/server/ci-info";
import { Arapey } from "next/font/google";
import { array } from "../lib/products";

export default function Test() {
	return (
		<div className="flex flex-col gap-4 items-center">
			<h1 className="text-6xl text-red-500">Привет</h1>
			<div className="flex flex-row gap-10">
				{array.map((item) => (
					<ProductCard name={item.name} price={item.price} />
				))}
			</div>
			<div className="bg bg-white p-10">
				<img src={"/cat.png"} alt="че то" />
			</div>
		</div>
	);
}

function Square({ letter }: { letter: string }) {
	return (
		<div className="w-40 h-40 bg-pink-600 text-center flex justify-center items-center rounded-2xl text-7xl text-blue-500">
			{letter}
		</div>
	);
}

function ProductCard({ name, price }: { name: string; price: number }) {
	return (
		<div className="p-3 rounded-xl bg-white text-black flex flex-col gap-2">
			<h3 className="text-xl">{name}</h3>
			<p>{price}</p>
		</div>
	);
}
