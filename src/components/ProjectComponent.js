import React, { useState } from "react";
import tasty from "../images/tasty.PNG";
import workout from "../images/workout.PNG";
import shop from "../images/shop.PNG";
import cardlist from "../images/cardlist.PNG";
import restaurant from "../images/restaurant.PNG";

export default function ProjectComponent() {
  return (
    <div>
      <div className="text-center py-4">
        <span className="text-green-600 text-xl font-medium">PROJECTS</span>
        <p className=" text-3xl font-bold">A selection of my</p>
        <p className=" text-3xl font-bold">favorite works.</p>
      </div>
      <div>
        <PortofolioComponent />
      </div>
    </div>
  );
}

export function PortofolioComponent() {
  let [data] = useState({
    porto: [
      {
        id: 1,
        nama: "Tasty Food",
        gambar: `${tasty}`,
        url: "https://tasty-food-kappa.vercel.app/",
        tools: [
          {
            id: 1,
            nama: "reactjs",
          },
          {
            id: 2,
            nama: "tailwindcss",
          },
        ],
      },
      {
        id: 2,
        nama: "Fitness Landing Page",
        gambar: `${workout}`,
        url: "https://fitness-landing-page.vercel.app/",
        tools: [
          {
            id: 1,
            nama: "reactjs",
          },
          {
            id: 2,
            nama: "tailwindcss",
          },
        ],
      },
      {
        id: 3,
        nama: "Online Shop Landing Page",
        gambar: `${shop}`,
        url: "https://online-shop-zeta.vercel.app/",
        tools: [
          {
            id: 1,
            nama: "reactjs",
          },
          {
            id: 2,
            nama: "tailwindcss",
          },
        ],
      },
      {
        id: 4,
        nama: "Card List",
        gambar: `${cardlist}`,
        url: "https://tailwind-cardlist.vercel.app/",
        tools: [
          {
            id: 1,
            nama: "reactjs",
          },
          {
            id: 2,
            nama: "tailwindcss",
          },
        ],
      },
      {
        id: 5,
        nama: "Restaurant Menu",
        gambar: `${restaurant}`,
        url: "https://menu-restaurant-mu.vercel.app/",
        tools: [
          {
            id: 1,
            nama: "reactjs",
          },
          {
            id: 2,
            nama: "tailwindcss",
          },
        ],
      },
    ],
  });
  return (
    <div>
      <div className=" flex flex-col mobile:w-full pb-12">
        <div className="grid mobile:grid-cols-1 mobile:px-2 laptop:grid-cols-2 tablet:gap-2 laptop:gap-10">
          {data.porto.map((items) => {
            return (
              <div key={items.id}>
                <a href={items.url} target="_blank">
                  <div className="mobile:w-full bg-white-100 shadow-md rounded mobile:flex mobile:flex-col mobile:mt-3 pb-3 tablet:h-60 hover:opacity-75 laptop:h-72">
                    <div
                      className="mobile:w-full mobile:h-40 bg-cover hover:contrast-100 flex"
                      style={{ backgroundImage: `url(${items.gambar})` }}
                    ></div>
                    <div>
                      <p className="mobile:mx-1 laptop:mx-3 laptop:mt-5 font-semibold">
                        {items.nama}
                      </p>
                      <div className="flex flex-row mobile:mt-2 mobile:space-x-2">
                        {items.tools.map((tool) => {
                          return (
                            <div key={tool.id} className="mobile:ml-2">
                              <span className="mobile:p-0 mobile:px-1 rounded-full bg-blue-400 mobile:space-x-3 mobile:text-sm text-white">
                                <span>#</span>
                                {tool.nama.toLowerCase()}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
