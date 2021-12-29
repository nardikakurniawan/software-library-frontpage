import React from "react";

import RenderItem from "./RenderItem";

export default function ListCategories() {
  const data = [
    {
      imageName: "/images/img-project-1.jpg",
      name: "Bulletproof-react",
      category: "Website",
      total: 976,
    },
    {
      imageName: "/images/img-project-2.jpg",
      name: "Avilion-bootstrap",
      category: "Website",
      total: 5901,
    },
    {
      imageName: "/images/img-project-3.jpg",
      name: "e-Startup",
      category: "Desktop",
      total: 290,
    },
    {
      imageName: "/images/img-project-4.jpg",
      name: "ONE PAGE WEBSITE",
      category: "Website",
      total: 2310,
    },
    {
      imageName: "/images/img-project-5.jpg",
      name: "nice admin apps",
      category: "Android",
      total: 529,
    },
    {
      imageName: "/images/img-project-6.jpg",
      name: "TECHIE WEBSITE",
      category: "arduino",
      total: 120,
    },
  ];

  return (
    <>
      <div className=" border-b-2 border-slGray-600 pb-6">
        <h3 className=" text-xl text-slIndigo-600 font-semibold ">Category</h3>

        <div className="mt-6 flex justify-between shadow-md md:w-9/12 lg:w-2/5 py-6 px-6 bg-white rounded-xl">
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-slGray-200 checked:bg-slIndigo-600 checked:border-slIndigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value="website"
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-slGray-900 font-semibold"
              for="flexCheckDefault"
            >
              Website
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-slGray-200 checked:bg-slIndigo-600 checked:border-slIndigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value="android"
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-slGray-900 font-semibold"
              for="flexCheckDefault"
            >
              Android
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-slGray-200 checked:bg-slIndigo-600 checked:border-slIndigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value="Desktop"
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-slGray-900 font-semibold"
              for="flexCheckDefault"
            >
              Desktop
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-slGray-200 checked:bg-slIndigo-600 checked:border-slIndigo-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              value="Arduino"
              id="flexCheckDefault"
            />
            <label
              class="form-check-label inline-block text-slGray-900 font-semibold"
              for="flexCheckDefault"
            >
              Arduino
            </label>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-4 gap-4 mt-10">
        {data?.length > 0 ? (
          data.map((item, index) => {
            return <RenderItem item={item} key={index}></RenderItem>;
          })
        ) : (
          <div className="flex items-center justify-center bg-gray-200 w-full text-center py-12">
            No item found
          </div>
        )}
      </div>
    </>
  );
}
