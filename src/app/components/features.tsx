import React from "react";

function Features() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          {/* Section Header */}
          <div className="flex flex-col text-center w-full mb-10">
            <h1 className="text-3xl font-bold font-sans title-font text-gray-900">
              Products
            </h1>
          </div>

          {/* Responsive Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
            {/* Box 1 */}
            <div className="p-4 mb-20 bg-gray-100">
              <div className="h-auto flex flex-col items-center text-center">
                <img
                  alt="Cantilever Chair"
                  className="rounded-lg w-full h-64 object-cover bg-gray-100"
                  src="https://www.bauhaus2yourhouse.com/cdn/shop/products/mart-stam-cantilever-armchair-853313_large.jpg?v=1581025791"
                />
                <div className="w-full mt-4 ">
                  <h2 className="title-font font-medium text-lg text-[#FB2E86]">
                    Cantilever Chair
                  </h2>
                  <h3 className="text-[#151875] mb-3 ">Code - Y523201</h3>
                  <span className="title-font font-medium text-lg text-[#151875]">
                    $42.00
                  </span>
                </div>
              </div>
            </div>

            {/* Box 1 */}
            <div className="p-4 mb-20 bg-gray-100 ">
              <div className="h-auto flex flex-col items-center text-center ">
                <img
                  alt="Cantilever Chair"
                  className="rounded-lg w-full h-64 object-cover bg-gray-100"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxdDKPlELps90gvoj7IyxBMtZVnIlJK8jaygfx8eS0RBbkHegQFcLduzDcNnimoAHspOM&usqp=CAU"
                />
                <div className="w-full mt-4 hover:bg-[#2F1AC4]  ">
                  <h2 className="title-font font-medium text-lg text-[#151875]  hover:text-white hover:font-bold">
                    Cantilever Chair
                  </h2>
                  <h3 className="text-[#151875]  mb-3 hover:text-white hover:font-bold">Code - Y523201</h3>
                  <span className="title-font font-medium text-lg text-[#151875] hover:text-white  hover:font-bold ">
                    $42.00
                  </span>
                </div>
              </div>
            </div>

            {/* Box 3 */}
            <div className="p-4 bg-gray-100 mb-20">
              <div className="h-auto flex flex-col items-center text-center">
                <img
                  alt="Cantilever Chair"
                  className="rounded-lg w-full h-64 object-cover bg-gray-100"
                  src="https://dm4c9mjc2jvtf.cloudfront.net/cms/Nest-Cantilever-Chair-Knoll-MR-Chairs-Bauhaus-Edition.jpg"
                />
                <div className="w-full mt-4">
                  <h2 className="title-font font-medium text-lg text-[#FB2E86]">
                    Cantilever Chair
                  </h2>
                  <h3 className="text-[#151875] mb-3">Code - Y523203</h3>
                  <span className="title-font font-medium text-lg text-[#151875]">
                    $42.00
                  </span>
                </div>
              </div>
            </div>

            {/* Box 4 */}
            <div className="p-4 mb-20 bg-gray-100">
              <div className="h-auto flex flex-col items-center text-center">
                <img
                  alt="Cantilever Chair"
                  className="rounded-lg w-full h-64 object-cover bg-gray-100"
                  src="https://dm4c9mjc2jvtf.cloudfront.net/cms/Nest-Cantilever-Chair-Knoll-MR-Chairs-Bauhaus-Edition.jpg"
                />
                <div className="w-full mt-4">
                  <h2 className="title-font font-medium text-lg text-[#FB2E86]">
                    Cantilever Chair
                  </h2>
                  <h3 className="text-[#151875] mb-3">Code - Y523204</h3>
                  <span className="title-font font-medium text-lg text-[#151875]">
                    $42.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Features;