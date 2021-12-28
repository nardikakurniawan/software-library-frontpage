import React from "react";
import Link from "next/link";

import * as FaIcons from "react-icons/fa";

export default function Hero() {
  return (
    <div className="  ">
      <div class="lg:grid lg:grid-cols-2 lg:gap-4 py-10 lg:py-20 h-800 ">
        <div className="lg:relative flex justify-center order-2">
          <div className="lg:absolute lg:bottom-0 lg:right-0 md:w-9/12">
            <img src="/images/img-hero-2x.png" alt="" />
          </div>
        </div>

        <div className=" order-1">
          <div className="">
            <h1 className=" text-3xl md:text-6xl lg:text-7xl text-slIndigo-600 font-bold">
              Build any app. <br />
              Run it Everywhere
            </h1>
            <p className="mt-6 text-lg md:text-2xl text-slGray-900 font-medium">
              Create, customize, and launch apps from your devices.
            </p>
          </div>

          <div className="flex justify-between md:w-3/5 mt-12 mx-auto lg:mx-0">
            <div className="shadow-lg p-6 w-40 md:w-48 text-center rounded-xl border border-slGray-400 bg-slIndigo-200">
              <h5 className=" text-2xl font-bold text-slGray-900">1000</h5>
              <span>User</span>
            </div>
            <div className="shadow-lg p-6 w-40 md:w-48 text-center rounded-xl border border-slGray-400 bg-slIndigo-200">
              <h5 className=" text-2xl font-bold text-slGray-900">2400</h5>
              <span>Download</span>
            </div>
          </div>

          <div className="mt-12 md:w-3/5 mx-auto lg:mx-0">
            <Link href="/login">
              <a className="flex w-full items-center justify-center shadow-inner py-4 bg-slIndigo-800 rounded-lg font-bold text-xl text-white hover:shadow-md hover:bg-slIndigo-600 transition-all duration-200 font-sans">
                Get Started <FaIcons.FaArrowRight className=" ml-6" />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
