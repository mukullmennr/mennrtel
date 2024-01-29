import React from "react";
import styles from "./form.module.scss";
export default function Form() {
    return (
        <div className={styles.card}>
            <div className={`container ${styles.container}`}>
                <div className={styles.form_content}>
                    <p className={styles.heading1}>
                        Take Your First Step Toward Your Digitalized Business
                    </p>
                    <p className={styles.heading2}>
                        Get started by entering your phone number to get a free
                        quote and we hope to connect soon!
                    </p>
                </div>
                <div className={styles.form}>
                    <form>
                        <input type="text" placeholder="Please Enter Name" />
                        <input type="text" placeholder="Please Enter Email" />
                        <input
                            type="text"
                            placeholder="Please Enter Phone number"
                        />
                        <button>Get a Free Quote</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
