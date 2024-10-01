import Link from "next/link";
import Image from "next/image";

export default async function ProductDetails({ params }) {
  const { id } = params;
  const res = await fetch(`http://110.76.128.74:8005/api/v1/admin/store/products/${id}`);

  if (!res.ok) {
    throw new Error("Failed to fetch product details");
  }

  const product = await res.json();

  return (
    <div>
      <main className="flex flex-col">
        <Image src={product?.data?.main_image} alt={product?.data?.name} width={200} height={200} />
        <h1 className="p-0 m-0">{product?.data?.name}</h1>
        <p className="p-0 m-0">{product?.data?.description}</p>

        <Link href="/posts" className="mt-3 text-red-600">Back to Posts</Link>
      </main>
    </div>
  );
}
