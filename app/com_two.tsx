import React from "react"; 
import Image from "next/image";

const EditorSections = () => {
  return (
    <div className="mx-auto px-4 py-8 bg-white">
      {/* Editors Pick Section */}
      <section className="mb-12">
        <h2 className="text-center text-2xl font-bold text-black mb-4">EDITORS PICK</h2>
        <p className="text-center text-gray-500 mb-8">
          Problems trying to resolve the conflict between the two major realms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* MEN */}
          <div className="relative">
            <Image src="/images/boy1.png" alt="Men" className="w-full h-[500px] object-cover rounded" />
            <button className="absolute bottom-4 left-4 bg-white text-gray-800 px-4 py-1 rounded shadow">
              MEN
            </button>
          </div>

          {/* WOMEN */}
          <div className="relative">
            <Image src="/images/girl1.png" alt="Women" className="w-full h-[500px] object-cover rounded" />
            <button className="absolute bottom-4 left-4 bg-white text-gray-800 px-4 py-1 rounded shadow">
              WOMEN
            </button>
          </div>

          {/* ACCESSORIES */}
          <div className="relative">
            <Image src="/images/girl2.png" alt="Accessories" className="w-full h-[500px] object-cover rounded" />
            <button className="absolute bottom-4 left-4 bg-white text-gray-800 px-4 py-1 rounded shadow">
              ACCESSORIES
            </button>
          </div>

          {/* KIDS */}
          <div className="relative">
            <Image src="/images/boy2.png" alt="Kids" className="w-full h-[500px] object-cover rounded" />
            <button className="absolute bottom-4 left-4 bg-white text-gray-800 px-4 py-1 rounded shadow">
              KIDS
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section>
        <h2 className="text-center text-2xl font-bold text-black mb-4">BESTSELLER PRODUCTS</h2>
        <p className="text-center text-gray-500 mb-8">
          Problems trying to resolve the conflict between the two major realms.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <Image
              src="/images/G1.png"
              alt="Product 1"
              className="w-full rounded mb-4"
            />
            <h3 className="text-lg font-semibold text-black">Graphic Design</h3>
            <p className="text-sm text-gray-500">English Department</p>
            <div className="flex justify-center space-x-2 mt-2">
              <span className="w-4 h-4 rounded-full bg-[#23A6F0]"></span>
              <span className="w-4 h-4 rounded-full bg-[#23856D]"></span>
              <span className="w-4 h-4 rounded-full bg-[#E77C40]"></span>
              <span className="w-4 h-4 rounded-full bg-[#252B42]"></span>
            </div>
          </div>
          {/* Repeat for other products */}
          {/* Ensure all quotes and characters are properly escaped */}
        </div>
      </section>
    </div>
  );
};

export default EditorSections;
