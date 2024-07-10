"use client";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client"; // Ensure correct import

const PRODUCT_QUERY = `*[_type == "officefurniture" && !(_id in path("drafts.*"))]{
  _id, 
  name, 
  description, 
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
       <div className="mx-auto max-w-2xl pt-14 sm:pt-10 lg:pt-16 pb-8 mt-4">
         
         <div className="text-center">
           <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7CC9B1] to-[#069376] sm:text-6xl">
           officefurniture
           </h1>
           <p className="mt-6 text-lg leading-8 text-gray-600 italic">
           We provides top-quality, durable institutional furniture designed for comfort, functionality, and modern aesthetics, ensuring optimal learning environments.
           </p>
           <div className="mt-10 flex items-center justify-center gap-x-6"></div>
         </div>
       </div>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-4 items-center">
      {validProducts.map((product) => (
        <div key={product.slug} className="max-w-md mx-auto rounded-md overflow-hidden  transition-transform transform hover:scale-105">
          <div className="relative">
            <Link href={`/institutional/${product.slug}`} className="block">
              <div className="min-h-[100px] min-w-[400px] border-red-900">
                {product.images && product.images.length > 0 && (
                  <img
                    src={product.images[0].asset.url}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
            </Link>
            {/* <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div> */}
          </div>
          <div className="p-4">
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            {/* <p className="text-gray-600 text-sm mb-4">
              {product.description}
            </p> */}
            {/* Uncomment the following section if you want to add a price and a Buy Now button */}
            {/* <div className="flex items-center justify-between">
              <span className="font-bold text-lg">$19.99</span>
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                Buy Now
              </button>
            </div> */}
          </div>
        </div>
      ))}
    </div>
      </>
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return <div>Failed to load products</div>;
  }
}
