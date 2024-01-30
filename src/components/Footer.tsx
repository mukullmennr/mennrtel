import React from "react";
import styles from "./footer.module.scss";
import Link from "next/link";
export default function Footer() {
    return (
        <div className={styles.bg}>
            <div className={`container ${styles.footer}`}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14008.332122076996!2d77.3725033!3d28.6272735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5aa67646f43%3A0xcb0a589692bab002!2sMennrtel!5e0!3m2!1sen!2sin!4v1706551893960!5m2!1sen!2sin"
                    width="200"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className={styles.address}>
                    <p>Get in Touch</p>
                    <div>
                        <p>
                            C-717 iThum Tower Noida Sector 63 Uttar Pradesh-
                            201301
                        </p>
                        <div className={styles.details}>
                            <p>+91 9810152451</p>
                            <p>info@mennrtel.com</p>
                        </div>
                    </div>
                </div>
                <div className={styles.links}>
                    <p>USEFUL LINKS</p>
                    <div>
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
                </div>
                <div className={styles.connect}>
                    <p>CONNECT WITH US</p>
                    <div>
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
            </div>
            <div className={styles.footer2}>
                <p>
                    ©2024 Mennrtel Inc. All rights reserved. Mennrtel and the
                    Mennrtel logo are trademarks of Mennrtel Inc.
                </p>
            </div>
        </div>
    );
}
