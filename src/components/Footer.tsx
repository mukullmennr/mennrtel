import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
    return (
        <div className={`container ${styles.footer}`}>
            <div className={styles.footer1}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1864.7665884332903!2d77.37255587587805!3d28.627454168440963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce550adec536d%3A0xfc9a748d99d8bd07!2sITHUM%20TOWER%2C%20GALAXY%20BUSINESS%20PARK%2C%20Block%20A%2C%20Industrial%20Area%2C%20Sector%2062%2C%20Noida%2C%20Uttar%20Pradesh%20201309!5e1!3m2!1sen!2sin!4v1706526834555!5m2!1sen!2sin"
                    width="200"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className={styles.address}>
                    <p>Get in Touch</p>
                    <p>
                        C-717 iThum Tower Noida Sector 63 Uttar Pradesh- 201301
                    </p>
                    <div className={styles.details}>
                        <p>+91 9810152451</p>
                        <p>info@mennrtel.com</p>
                    </div>
                </div>
            </div>
            <div className={styles.footer2}>
                <div className={styles.links}>
                    <p>USEFUL LINKS</p>
                    <Link href="/" prefetch={false}>
                        Who We Are
                    </Link>
                    <Link href="/" prefetch={false}>
                        What We Do
                    </Link>
                    <Link href="/" prefetch={false}>
                        Who We Help
                    </Link>
                    <Link href="/" prefetch={false}>
                        Solutions
                    </Link>
                </div>
                <div>
                    <p>CONNECT WITH US</p>
                    <div>
                        <img src="" />
                        <img src="" />
                        <img src="" />
                        <img src="" />
                    </div>
                    <div className={styles.details2}>
                        <p>+91 9810152451</p>
                        <p>info@mennrtel.com</p>
                    </div>
                </div>
            </div>
            <div>
                <p>
                    ©2024 Mennrtel Inc. All rights reserved. Mennrtel and the
                    Mennrtel logo are trademarks of Mennrtel Inc.
                </p>
            </div>
        </div>
    );
}
