/** biome-ignore-all lint/correctness/useJsxKeyInIterable: <explanation> */
const numbers = [2, 5, 16, 18, 89];

const letters = ["A", "B", "C", "D", "E"];

const catPictures = [
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQru0yaadyYqUQAeaMi4wbrnnBgw_LtKbwBb1dh9CHAXgy_eu8hbEp9en89&s=10",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7nM1cFeifX8uGZjmVkfBK3syc4rn6TY5Ql0VXy4jo1TR-yGXgi4ymy6I&s=10",
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdkktJT80ZTXqprdX5YqQAwcfWlssSMWsAlujYV0jC2w&s=10",
];

export default function MakPage() {
	return (
		<div className="flex flex-col gap-2">
			<Header />
			{numbers.map((num) => (
				<NumberCard chislo={num} />
			))}
			{letters.map((letter) => (
				<LetterCard letter={letter} />
			))}
			{catPictures.map((href) => (
				<CatCard href={href} />
			))}
		</div>
	);
}

function Header() {
	type PageLink = {
		name: string;
		link: string;
	};

	const pageLinks: PageLink[] = [
		{
			name: "Главная",
			link: "/",
		},
		{
			name: "Тестовая страница",
			link: "/test",
		},
	];

	return (
		<header className="w-screen bg-white p-4 flex flex-row gap-2">
			{pageLinks.map((pageLink) => (
				<a className="text-black" href={pageLink.link}>
					{pageLink.name}
				</a>
			))}
		</header>
	);
}

function NumberCard({ chislo }: { chislo: number }) {
	return <span>{chislo}</span>;
}

function LetterCard({ letter }: { letter: string }) {
	return <text>{letter}</text>;
}

function CatCard({ href }: { href: string }) {
	return (
		<div className="w-40 h-40 overflow-hidden relative">
			<img className=" object-cover w-full h-full" src={href} alt="котик" />
		</div>
	);
}
