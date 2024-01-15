"use client";
import React from "react";
import Link from "next/link";
import { inter } from "@/fonts/fonts";

export default function Nav() {
    // const nav = document.querySelector(".border") ;
    // let lastScrollY = window.scrollY;
    // window.addEventListener("scroll", () => {
    //     if (lastScrollY < window.scrollY) {
    //         nav.classList.add("nav--hidden");
    //     } else {
    //         nav.classList.remove("nav--hidden");
    //     }

    //     lastScrollY = window.scrollY;
    // });
    return (
        <div className={`${inter.className} border`}>
            <div className="container">
                <div className="nav">
                    <div className="nav_icon">
                        <div>
                            <input
                                type="checkbox"
                                id="Toggle"
                                // onClick={handleCheckboxClick}
                            />
                            <label htmlFor="Toggle">
                                <div className="Menu-container">
                                    <div className="line" id="active"></div>
                                </div>
                            </label>
                        </div>
                        <div className="nav_img">
                            <Link href="/">
                                <img src="/icon.svg" alt="mennrtel" />
                            </Link>
                        </div>
                    </div>
                    <div className="nav_menu">
                        <ul id="menu">
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
                        <div>
                            <button>Get free email quote</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
