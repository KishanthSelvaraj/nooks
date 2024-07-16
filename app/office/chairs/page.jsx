"use client";
import Link from "next/link";
import { sanityFetch } from "@/sanity/lib/client"; // Ensure correct import

const PRODUCT_QUERY = `*[_type == "officechair" && !(_id in path("drafts.*"))]{
  _id, 
  name, 
  description, 
  price, 
  price_id, 
  images[]{asset -> {url}}, 
   "slug": slug.current,
  categories[]-> {_id,name}
}`;

export default async function ProductsPage() {
  try {
    const products = await sanityFetch({ query: PRODUCT_QUERY });

    console.log("Fetched products:", products);

    // Filter out null products
    const validProducts = products.filter((product) => product !== null);
    validProducts.forEach((product) => {
      console.log("Product categories:", product.name);
    });

    return (
      <section className="bg-white">
        {/* new */}
        <div class="pb-5 flex items-center gap-x-6  justify-start  md:ml-[100px] md:pt-[100px] md:pb-0 lg:ml-[100px] lg:pt-[100px] lg:pb-0 pt-[80px] ml-[10px] ">
                <a class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl  bg-gradient-to-r from-[#7CC9B1] to-[#069376] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="/office">Back
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        <div className="mx-auto max-w-2xl pt-0 pb-8  ">  
          
        <div className="text-center">
           <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#7CC9B1] to-[#069376] sm:text-6xl">
           Office Chairs
           </h1>
           <p className="mt-6 text-lg leading-8 text-gray-600 italic">
           We provides top-quality, durable institutional furniture designed for comfort, functionality, and modern aesthetics, ensuring optimal learning environments.
           </p>
           <div className="mt-10 flex items-center justify-center gap-x-6"></div>
         </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 items-center lg:px-[150px] text-center ">
          {validProducts.map((product) => (
            <div
              key={product.slug}
              className="max-w-md mx-auto rounded-md overflow-hidden  transition-transform transform hover:scale-105"
            >
              <div className="relative">
                <Link href={`/institutional/${product.slug}`} className="block">
                  <div class="relative group transition-all duration-500 hover:bg-[#aee4d3] hover:border-[#069376] hover:border-b w-[248px] h-[318px]">
                    <img
                      class="transition-all duration-500  group-hover:rounded-br-[80px] w-[248px] h-[248px]"
                      src={product.images[0].asset.url}
                    />
                    <div class="transition-all duration-500 p-1 group-hover:pl-1.5 ">
                      <div class=" flex items-center justify-center">
                        <a
                          class=" inline-flex items-center justify-center gap-2 rounded-xl   px-4 py-3 text-lg font-semibold text-black  transition-all duration-150 "
                          href="/gallery"
                        >
                          {product.name}
                          
                        </a>
                      </div>
                      {/* <p class="text-sm text-gray-700 font-sans">Software Engineering Team Lead</p> */}
                    </div>
                    {/* <svg
                      class="transition-all duration-500 opacity-0 group-hover:opacity-100 absolute bottom-[12px] right-[3px] text-[#069376]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="64"
                      viewBox="0 0 45 64"
                      fill="none"
                    >
                      <path
                        d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z"
                        fill="#F04E29"
                      />
                    </svg> */}
                  </div>
                </Link>
                {/* <Link href={`/institutional/${product.slug}`} className="block">
                    <div className="min-h-[100px] min-w-[400px] border-red-900">
                      {product.images && product.images.length > 0 && (
                        <img
                          src={product.images[0].asset.url}
                          alt={product.name}
                          className="w-full h-full object-cover"
                        />
                      )}
                    </div>
                  </Link> */}
                {/* <div className="absolute top-0 right-0 bg-red-500 text-white px-2 py-1 m-2 rounded-md text-sm font-medium">
              SALE
            </div> */}
              </div>
              {/* <div class="mt-10 flex items-center justify-center gap-x-6">
                <a
                  class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl  bg-gradient-to-r from-[#7CC9B1] to-[#069376] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                  href={`/institutional/${product.slug}`}
                >
                  {product.name}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div> */}
            </div>
          ))}
        </div>
      </section>
    );
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return <div>Failed to load products</div>;
  }
}
