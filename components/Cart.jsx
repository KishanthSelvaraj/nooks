"use client";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client"; // Ensure correct import

const PRODUCT_QUERY = `*[_type == "productcart" && !(_id in path("drafts.*"))]{
  _id, 
  name, 
  description, 
  price, 
  price_id, 
  images[]{asset -> {url}}, 
  categories[]-> {_id,name}
}`;

export default async function ProductsPage() {
  try {
    const products = await sanityFetch({ query: PRODUCT_QUERY });

    console.log("Fetched products:", products);

    // Filter out null products
    const validProducts = products.filter(product => product !== null);
    validProducts.forEach(product => {
      console.log("Product categories:", product.name);
    });

    return (
      <>
         <main className="flex flex-col items-center bg-gray-100 min-h-screen p-10 gap-12">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-800 mb-8">
            Cart
          </h1>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
            <a href="/">Go to Home</a>
          </button>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {validProducts.map((product) => (
              <li
                key={product._id}
                className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
              >
                <Link href={`/product/${product.slug}`} className="block">
                  {product.images && product.images.length > 0 && (
                    <img
                      src={product.images[0].asset.url}
                      alt={product.name}
                      className="w-full h-64 object-cover"
                    />
                  )}
                </Link>
                <div className="p-4">
                  <h2 className="text-2xl font-bold mb-2 text-gray-800">
                    {product.name}
                  </h2>
                  <p className="text-gray-500 mb-4">{product.description}</p>
                  <p className="text-lg font-semibold text-[#fe3939]">
                    ${product.price}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </main>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return <div>Failed to load products</div>;
  }
}
