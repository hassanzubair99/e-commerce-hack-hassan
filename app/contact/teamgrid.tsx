import React from "react";
import Image from "next/image";
import Link from "next/link";
const teamMembers = [
  {
    id: 1,
    Image: "/images/n1.png",
    name: "Username",
    profession: "Profession",
  },
  {
    id: 2,
    Image: "/images/n2.png",
    name: "Username",
    profession: "Profession",
  },
  {
    id: 3,
    Image: "/images/n5.png",
    name: "Username",
    profession: "Profession",
  },
  {
    id: 4,
    Image: "/images/n4.png",
    name: "Username",
    profession: "Profession",
  },
  {
    id: 5,
    Image: "/images/n5.png",
    name: "Username",
    profession: "Profession",
  },
  {
    id: 6,
    Image: "/images/t2.png",
    name: "Username",
    profession: "Profession",
  },
  {
    id: 7,
    Image: "/images/n2.png",
    name: "Username",
    profession: "Profession",
  },
  {
    id: 8,
    Image: "/images/n5.png",
    name: "Username",
    profession: "Profession",
  },
  {
    id: 9,
    Image: "/images/n4.png",
    name: "Username",
    profession: "Profession",
  },
];

const TeamGrid = () => {
  return (
    <div className="py-12 px-4 bg-gray-50">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
          Meet Our Team
        </h2>
      </div>

      {/* Team Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="text-center bg-white rounded-lg shadow-lg p-4"
          >
            <Image
              src={member.Image}
              alt={member.name}
              className="w-full h-60 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-bold text-gray-800">{member.name}</h3>
            <p className="text-gray-500 mb-4">{member.profession}</p>
            {/* Social Icons */}
            <div className="flex justify-center space-x-4 text-blue-500">
              <Link href="#" className="hover:text-blue-700">
                <i className="fab fa-facebook-f"></i>
              </Link>
              <Link href="#" className="hover:text-blue-700">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link href="#" className="hover:text-blue-700">
                <i className="fab fa-twitter"></i>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamGrid;
