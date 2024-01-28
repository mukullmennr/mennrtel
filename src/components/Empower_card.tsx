import React from "react";
import styles from "./empower_card.module.scss";
import Link from "next/link";
export default function Empower_card() {
    return (
        <div className="container">
            <div className={styles.empower}>
                <p>Empower Your Business Journey with Digital Excellence </p>
                <Link href="/">Let’s Get Started!</Link>
            </div>
        </div>
    );
}
