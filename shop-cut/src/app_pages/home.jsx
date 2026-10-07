// import axios from "axios" // import React from 'react'
import { Link } from "react-router";
import { useState, useRef, useEffect } from "react";
import { RiMenuFill, RiCloseLine } from "@remixicon/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

function Home() {

  // some important varibles or constants

  const [isOpen, setIsOpen] = useState(false)
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Features", href: "/products" },
    { label: "Pricing", href: "/products" },
    { label: "About", href: "/login" },
  ]

  const hearts = useRef();

  useGSAP(
    () => {
      gsap.from(".Dilli", { y: 10, opacity: 0, duration: 1 });
      // gsap.from(".Billi", { y: -10, opacity: 0, duration: 1 });
    },
    { scope: hearts },
  );
  return (
    <>
      <header className="Dilli sticky top-0 z-50 w-full border-b backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-950/80 overflow-hidden rounded-t-lg">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

          {/* Logo Section */}
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-zinc-900 dark:bg-zinc-50" />
            <span className="font-fraunces font-600 text-xl text-zinc-900 dark:text-zinc-50 tracking-loose">
              Brand
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link to={item.href}>{item.label}</Link>
            ))}
          </nav>

          {/* Action Button & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <button className="hidden sm:inline-flex h-9 items-center justify-center rounded-md bg-zinc-900 px-4 text-sm font-medium text-zinc-50 shadow transition-colors hover:bg-zinc-900/90 dark:bg-zinc-50 dark:text-zinc-900 dark:hover:bg-zinc-50/90">
              Get Started
            </button>

            {/* Hamburger Menu Icon */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 text-zinc-900 hover:bg-zinc-100 md:hidden dark:border-zinc-800 dark:text-zinc-50 dark:hover:bg-zinc-900"
              aria-label="Toggle Menu"
            >
              {isOpen ? <RiCloseLine className="h-5 w-5" /> : <RiMenuFill className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Drawer Overlay */}
        {
          isOpen && (
            <div className="md:hidden border-b border-zinc-200 bg-white px-4 py-4 shadow-lg dark:border-zinc-800 dark:bg-zinc-950 animate-in fade-in slide-in-from-top-5 duration-200">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {item.label}
                  </a>
                ))}
                <button className="mt-2 w-full h-9 rounded-md bg-zinc-900 text-sm font-medium text-zinc-50 dark:bg-zinc-50 dark:text-zinc-900">
                  Get Started
                </button>
              </nav>
            </div>
          )
        }
      </header >
      <main></main>
      <footer></footer>
    </>
  );
}

export { Home };