"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname();

  return (
    <nav className="bg-nav-bg fixed w-1/3 m-auto top-5 left-2/4 rounded-full py-5 z-10 -translate-x-2/4">
      <ul className="flex justify-center flex-row gap-12">
        <li className="transform-none transition-all peer">
          <Link href="/">Home</Link> {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about">About Us</Link> {path === "/about" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  );
}
