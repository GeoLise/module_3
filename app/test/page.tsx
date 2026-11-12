type Weather = {
	city: string;
	date: string;
	temperature: number;
	description: string;
};

export default async function Test() {
	const responce = await fetch(
		"https://first.orn1xx.ru/weather/skdjfhskdhfkshdkjfhsdf",
	);

	console.log(responce);

	if (!responce.ok) {
		return <p>Ошибка при получении данных о погоде</p>;
	}

	const data: Weather = await responce.json();

	return (
		<div className="flex flex-col gap-4 items-center">
			<h1 className="text-6xl text-red-500">Привет</h1>
			<div className="bg-pink-400 rounded-full p-16 text-3xl flex flex-col gap-2">
				<p>{data.city}</p>
				<p>{data.date}</p>
				<p>{data.description}</p>
				<p>{data.temperature}</p>
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
