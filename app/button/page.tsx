/** biome-ignore-all lint/a11y/useButtonType: <explanation> */
/** biome-ignore-all lint/suspicious/noDoubleEquals: <explanation> */
/** biome-ignore-all lint/correctness/useJsxKeyInIterable: <explanation> */
"use client";

import { useState } from "react";
import { products as initialProducts } from "../lib/products";

export default function ButtonPage() {
	const [count, setCount] = useState(0);

	const [bukvi, setBukvi] = useState("");

	const [products, setProducts] = useState(initialProducts);

	const [id, setId] = useState(0);

	const [name, setName] = useState("");

	const [price, setPrice] = useState(0);

	function handleClick() {
		setCount(count + 1);
		console.log(count);
	}

	function handleDelete(id: number) {
		const savedproducts = products.filter((prod) => prod.id != id);
		setProducts(savedproducts);
	}

	function handleCreate(id: number, price: number, name: string) {
		const newProduct = {
			id: id,
			price: price,
			name: name,
		};

		const updatedArray = [...products, newProduct];

		setProducts(updatedArray);
	}

	return (
		<div className="w-screen h-screen flex flex-col items-center justify-center gap-4">
			{/* <div className="flex flex-row gap-2">
				<button
					onClick={() => handleClick()}
					className="bg-red-500 rounded-2xl p-2"
				>
					кнопка
				</button>
				<p>{count}</p>
				<p>{bukvi}</p>
			</div> */}
			<div className="bg-green-600 p-6 rounded-2xl">
				<form
					onSubmit={(e) => {
						e.preventDefault();
						e.stopPropagation();
						handleCreate(id, price, name);
					}}
					className="flex flex-col gap-2"
				>
					<input
						className="bg-white p-1 placeholder:text-black/50 text-black"
						placeholder="Id"
						onChange={(e) => setId(Number(e.target.value))}
					/>
					<input
						className="bg-white p-1 placeholder:text-black/50 text-black"
						placeholder="Цена"
						onChange={(e) => setPrice(Number(e.target.value))}
					/>
					<input
						className="bg-white p-1 placeholder:text-black/50 text-black"
						placeholder="Название"
						onChange={(e) => setName(e.target.value)}
					/>
					<button type="submit" className="bg-yellow-400 text-black">
						Отправить
					</button>
				</form>
			</div>
			<div className="flex flex-col gap-2">
				<input
					onChange={(e) => setBukvi(e.target.value)}
					placeholder="Введите текст"
					className="w-60 h-10 bg-white text-black placeholder:text-black/50"
				/>
				<div className=" w-screen h-1/2 bg-white flex flex-row gap-10">
					{products
						.filter((prod) => prod.name.toLowerCase().includes(bukvi))
						.map((prod) => (
							<div className="flex flex-col">
								<ProductCard name={prod.name} id={prod.id} price={prod.price} />
								<button
									onClick={() => handleDelete(prod.id)}
									className="bg-red-700 p-1"
								>
									Удалить
								</button>
							</div>
						))}
				</div>
			</div>
		</div>
	);
}

function ProductCard({
	id,
	name,
	price,
}: {
	id: number;
	name: string;
	price: number;
}) {
	return (
		<div className="flex flex-col gap-3 p-1 rounded-2xl text-black bg-red-300 border w-fit !aspect-square">
			<p>{id}</p>
			<p>{name}</p>
			<p>{price} $</p>
		</div>
	);
}
