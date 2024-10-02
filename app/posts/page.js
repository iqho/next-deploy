// app/posts/page.js
import Link from "next/link";
import Image from "next/image";

export default async function Posts() {
  const res = await fetch("http://110.76.128.74:8005/api/v1/admin/pos-service/products");

  if (!res.ok) {
    throw new Error("Failed to fetch products");
  }

  const data = await res.json();

  return (
    <div>
      <main className="flex flex-col">
        <h1>Posts</h1>
        <ul>
          {data.data?.map((product) => (
            <li key={product.id} className="p-4">
              <Link href={`/posts/${product.id}`}>
                <Image src={product.main_image} alt={product.name} width={200} height={200} /> {product.name}
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
