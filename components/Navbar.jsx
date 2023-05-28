import React, { useEffect } from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { Cart } from "./";
import { useStateContext } from "../context/StateContext";

import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Fragment } from "react";
import Image from "next/image";

import logo from "../public/lolo2.png";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  const button =
    typeof window !== "undefined"
      ? document.querySelector("#menu-button")
      : "null";

  const menu =
    typeof window !== "undefined" ? document.querySelector("#menu") : "null";

  function show() {
    menu.classList.toggle("hidden");
  }

  return (
    <div className=" ">
      <header>
        <nav
          class="
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
          bg-[#262222]
        "
        >
          <div>
            <Link href="/">
              <Image src={logo} alt="battery" className=" w-[4.5rem]" />
            </Link>{" "}
          </div>

          <div class="h-6 w-6 cursor-pointer md:hidden block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="menu-button"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              onClick={() => show()}
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <button
              type="button"
              className="cart-icon mt-6"
              onClick={() => setShowCart(true)}
            >
              <AiOutlineShopping />
              <span className="cart-item-qty top-3">{totalQuantities}</span>
            </button>
          </div>

          <div
            class="hidden w-full md:flex md:items-center md:w-auto"
            id="menu"
          >
            <ul
              class="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
            >
              <li>
                <a class="md:p-4 py-2 block text-[#ab9574]" href="#">
                  Wigs
                </a>
              </li>
              <li>
                <a class="md:p-4 py-2 block text-[#ab9574]" href="#">
                  New Products
                </a>
              </li>
              <li>
                <a class="md:p-4 py-2 block text-[#ab9574]" href="#">
                  Haircare
                </a>
              </li>
              <li>
                <a class="md:p-4 py-2 block text-[#ab9574]" href="#"></a>
              </li>
              <li>
                <button
                  type="button"
                  className="cart-icon mt-3"
                  onClick={() => setShowCart(true)}
                >
                  <AiOutlineShopping />
                  <span className="cart-item-qty top-3">{totalQuantities}</span>
                </button>
                {showCart && <Cart />}
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
