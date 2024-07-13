import React from "react";
import main from '@/public/3450.jpg'
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    // <header>
    //   {/* Hero Container */}
    //   <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
    //     {/* Component */}
    //     <div className="grid grid-cols-1 items-center justify-items-start gap-8 sm:gap-20 lg:grid-cols-2">
    //       {/* Hero Content */}
    //       <div className="flex flex-col">
    //         {/* Hero Title */}
    //         <h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">
    //           Furnish Your Office or Institution Effortlessly{" "}
    //           <span
    //             transition={{ duration: 1, delay: 0.4 }}
    //             className="text-transparent bg-clip-text bg-gradient-to-r from-[#7CC9B1] to-[#069376]"
    //           >
    //             with Nooks.
    //           </span>
    //         </h2>
    //         <p className="mb-6 max-w-lg text-base text-[#636262] md:mb-10 lg:mb-12">
    //           Transform your space with our wide range of furniture solutions
    //           designed for both institutional and office environments. Whether
    //           you're outfitting a school, office, or any other commercial space,
    //           we offer the finest selection.
    //         </p>
    //         {/* Hero Button */}
    //         <div className="flex items-center">
    //           <a
    //             href="#"
    //             className="mr-5 flex items-center bg-gradient-to-r from-[#7CC9B1] to-[#069376] px-8 py-4 font-semibold text-white transition [box-shadow:rgb(200,_255,241)-8px_8px] hover:[box-shadow:rgb(171,_196,_245)_0px_0px] md:mr-6 lg:mr-8"
    //           >
    //             <p className="mr-6 font-bold">Products</p>
    //             <svg
    //               fill="currentColor"
    //               viewBox="0 0 20 21"
    //               xmlns="http://www.w3.org/2000/svg"
    //               className="h-4 w-4 flex-none"
    //             >
    //               <title>Arrow Right</title>
    //               <polygon points="16.172 9 10.101 2.929 11.515 1.515 20 10 19.293 10.707 11.515 18.485 10.101 17.071 16.172 11 0 11 0 9"></polygon>
    //             </svg>
    //           </a>
             
    //         <Link href={'/'} className="text-white flex py-3 px-5 rounded transition ease-in-out delay-150 bg-black hover:translate-x-1 hover:scale-110 hover:bg-[#069376] duration-300">Get in touch</Link>
    //         </div>
    //       </div>
    //       {/* Hero Image */}

    //       <Image
    //         src={main}
    //         alt="Logo"
    //         className="inline-block h-full w-full max-w-[640px]"
    //       />
    //     </div>
    //   </div>
 
    <section
    class="relative overflow-hidden bg-gradient-to-b bg-white  pb-12 pt-20 sm:pb-16 sm:pt-32 lg:pb-24 xl:pb-32 xl:pt-40">
    <div class="relative z-10">
        <div
            class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
            <svg class="h-[60rem] w-[100rem] flex-none stroke-[#069376] opacity-20" aria-hidden="true">
                <defs>
                    <pattern id="e9033f3e-f665-41a6-84ef-756f6778e6fe" width="200" height="200" x="50%" y="50%"
                        patternUnits="userSpaceOnUse" patternTransform="translate(-100 0)">
                        <path d="M.5 200V.5H200" fill="none"></path>
                    </pattern>
                </defs>
                <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
                    <path d="M-300 0h201v201h-201Z M300 200h201v201h-201Z" stroke-width="0"></path>
                </svg>
                <rect width="100%" height="100%" stroke-width="0" fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)">
                </rect>
            </svg>
        </div>
    </div>
    <div class="relative z-20 mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
            <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Furnish Effortlessly 
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-[#7CC9B1] to-[#069376]"> with Nooks
           </span>
            </h1>
            <h2 class="mt-6 text-lg leading-8 text-gray-600">
              Transform your space with our wide range of furniture solutions designed for both institutional and office environments.
            </h2>
            <div class="mt-10 flex items-center justify-center gap-x-6">
                <a class="isomorphic-link isomorphic-link--internal inline-flex items-center justify-center gap-2 rounded-xl  bg-gradient-to-r from-[#7CC9B1] to-[#069376] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                    href="/institutional">Products
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                </a>
            </div>
        </div>
        <div class="relative mx-auto mt-10 max-w-lg">
            <img class="w-full rounded-2xl border border-gray-100 shadow" src="https://i.etsystatic.com/16440268/r/il/99bf5d/4945707127/il_fullxfull.4945707127_9exx.jpg" alt=""/>
        </div>
    </div>
</section>
  //  </header>
  );
};

export default Header;