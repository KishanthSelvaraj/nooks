const Features_2 = () => {

    const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8.25v7.5m3.75-3.75H8.25m12-6.75A9.75 9.75 0 1112 2.25a9.75 9.75 0 0110.5 10.5h-3z" />
                </svg>,
            title: "Institutional Furniture",
            desc: "Explore our range of high-quality institutional furniture, including classroom desks, hostel beds, cafeteria tables, and more."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12H3m6-9l1.5 9h-3L9 3zm6 9l1.5 9h-3L15 12zm6-3a9.75 9.75 0 11-9.75-9.75A9.75 9.75 0 0121 9z" />
                </svg>,
            title: "Office Furniture",
            desc: "Discover our stylish and ergonomic office furniture, perfect for creating a productive and comfortable workspace."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18m-6 8V4m-6 16V4" />
                </svg>,
            title: "Classroom Solutions",
            desc: "Single and double desks, writing pad chairs, and teachers' tables to enhance the learning environment."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.75 12.75h14.5m-10.75 4h7m-7-8h7m-3.5 8v-8" />
                </svg>,
            title: "Hostel Furnishings",
            desc: "Comfortable single and bunk beds, along with study tables, designed to create a homely hostel experience."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 15.5l3.75-3.75 5.25 5.25m-9-7.5h9" />
                </svg>,
            title: "Cafeteria & Dining",
            desc: "Modern and durable cafeteria and dining tables and chairs, ideal for communal dining spaces."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.25v13.5m13.5-13.5v13.5m-10.5-7.5h7.5m-7.5 4.5h7.5m-7.5-9h7.5" />
                </svg>,
            title: "Library Furniture",
            desc: "Functional and aesthetic library furniture, including display racks, magazine racks, tables, and chairs."
        },
    ];

    return (
        <section className="py-14 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 text-center text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto">
                    <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Discover Nooks' Quality Furniture
                    </h3>
                    <p className="mt-3">
                        At Nooks, we provide a diverse range of high-quality furniture solutions for institutional and office environments. Explore our products to find the perfect fit for your needs.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 mx-auto bg-gray-200 text-[#44cda2] rounded-full flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Features_2;