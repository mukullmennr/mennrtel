"use client";
import React from "react";
import Image from "next/image";
import icon from "@/../public/icon.svg";
import Link from "next/link";
export default function Nav() {
  return (
    <div className="border">
    <div className="container">
      <div className="nav">
      <div>
        <Image src={icon} alt="mennrtel" />
      </div>
      <div className="nav_menu">
        <ul>
          <li>
            <Link href="/">Who We Are</Link>
          </li>
          <li>
            <Link href="/">What We Do</Link>
          </li>
          <li>
            <Link href="/">Who We Help</Link>
          </li>
          <li>
            <Link href="/">Solutions</Link>
          </li>
        </ul>
        <button>Get Started</button>
      </div>
      </div>
    </div>
    </div>
  );
}
