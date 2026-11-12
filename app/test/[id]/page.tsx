import { products } from "@/app/lib/products";

type Props = {
	params: Promise<{ id: string }>;
};

export default async function TestProduct({ params }: Props) {
	const { id } = await params;

	const foundProduct = products.find((prod) => prod.id === Number(id));

	if (!foundProduct) {
		return <p>Не найдено</p>;
	}

	return <div>{foundProduct.name}</div>;
}
