import React from "react";

import formatThousand from "src/helpers/formatThousand";

export default function RenderItem({ item }) {
  return (
    <div>
      <div className="rounded-t-md rounded-b-2xl overflow-hidden shadow-lg bg-white pb-3">
        <div className=" h-64 rounded-md overflow-hidden p-1">
          <img
            src={item.imageName}
            alt={item.name}
            className=" w-full h-full object-cover object-top"
          />
        </div>
        <div className="p-2">
          <div className="flex justify-between">
            <h3 className=" text-xl uppercase text-slGray-900 font-semibold">
              {item.name}
            </h3>
            <span className=" text-sm text-slGray-800 capitalize">
              {formatThousand(item.total)} Download
            </span>
          </div>
          <p className="text-lg text-slGray-800 capitalize">{item.category}</p>
        </div>
      </div>
    </div>
  );
}
