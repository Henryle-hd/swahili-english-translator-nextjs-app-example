"use client";
import Image from "next/image";
import logo from "../app/assets/apple-touch-icon.png";
import { useState } from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

export default function Navpage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-easycl-1 p-4">
      <div className="container mx-auto flex flex-wrap justify-between items-center">
        <div className="flex justify-center items-center gap-2">
          <Image src={logo} alt="alt" width={35} height={35} />
          <span className="text-easycl-100 font-bold text-2xl">
            <span className="text-white">SwaEng</span>TranX
          </span>
        </div>
        <Button
          className="lg:hidden text-white focus:outline-none rounded-full"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </Button>
        <ul
          className={`${
            isMenuOpen ? "block" : "hidden"
          } lg:flex lg:space-x-4 w-full lg:w-auto mt-4 lg:mt-0`}
        >
          <li className="mb-2 lg:mb-0">
            <a
              href="/eng-swa"
              className={`hover:text-easycl-100 ${
                pathname === "/eng-swa"
                  ? "text-easycl-100 font-bold"
                  : "text-gray-200"
              } block`}
            >
              Eng-Swa
            </a>
          </li>
          <li className="mb-2 lg:mb-0">
            <a
              href="/swa-eng"
              className={`hover:text-easycl-100 ${
                pathname === "/swa-eng"
                  ? "text-easycl-100 font-bold"
                  : "text-gray-200"
              } block`}
            >
              Swa-Eng
            </a>
          </li>
          <li className="mb-2 lg:mb-0">
            <a
              href="https://github.com/Henryle-hd/swahili-english-translator-nextjs-app-example"
              className="hover:text-easycl-100 text-gray-200 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li className="mb-2 lg:mb-0">
            <a
              href="https://www.npmjs.com/package/swahili-english-translator"
              className="hover:text-easycl-100 text-gray-200 block"
              target="_blank"
              rel="noopener noreferrer"
            >
              NPM
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
