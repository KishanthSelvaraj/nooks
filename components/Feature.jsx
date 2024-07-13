import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";

const teamMembers = [
	{
		img: "https://placehold.co/600x500",
		name: "Product Name",
	},
	{
		img: "https://placehold.co/600x500",
		name: "Product Name",
	},
	{
		img: "https://placehold.co/600x500",
		name: "Product Name",
	},
	{
		img: "https://placehold.co/600x500",
		name: "Product Name",
	},
];

const TeamMemberItem = ({ member }) => (
	<div className="bg-[#1c1c1c] shadow-xl md:w-11/12 rounded-2xl md:p-4">
		<div>
			<img
				src={member.img}
				alt={member.name}
				className="w-full rounded-t-2xl"
			/>
			<div className="p-3">
				<h5 className="md:text-[15px] text-sm mb-1 font-medium">{member.name}</h5>    
			</div>
		</div>
	</div>
);

TeamMemberItem.propTypes = {
	member: PropTypes.object.isRequired,
};

const Features = () => {
	return (
		<section className=" light py-14 md:py-24 bg-white text-zinc-900 ">
			<div className="container px-4 mx-auto">
				<div className="flex justify-center text-center">
					<div className="sm:max-w-lg">
						<h3 className="text-3xl leading-none md:text-[45px] text-gray-800 font-bold">
							Our Products
						</h3>
						<p className="font-medium text-black opacity-60 mt-4 mb-12">
						Discover timeless elegance and unmatched comfort at our furniture shop, where quality craftsmanship meets modern design. Transform your space with our curated selection of stylish and durable pieces.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-4 gap-6">
					{teamMembers.map((member, i) => (
						<div className="col-span-2 sm:col-span-2 hover:cursor-pointer  lg:col-span-1 transition ease-in-out delay-150  hover:translate-x-1 hover:scale-110 duration-300" key={i}>
							<TeamMemberItem member={member} />
						</div>
					))}
				</div>
                <div className="flex justify-center text-center mt-20">
                    <Link href={'/'} className="text-white flex py-3 px-5 rounded transition ease-in-out delay-150 bg-black hover:translate-x-1 hover:scale-110 hover:bg-[#069376] duration-300">See more</Link>
					</div>
			</div>
		</section>
	);
};


export default Features