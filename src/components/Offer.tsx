import React from "react";
import styles from "./offer.module.scss";
interface OfferProps {
    data: {
        id: string;
        heading: string;
        para: string;
        img: string;
    };
}
export default function Offer({ data }: OfferProps) {
    const card = data;
    return (
        <div
            className={styles.offer_card}
            style={{ backgroundImage: `url(${data.img})` }}
        >
            <div className={styles.offer}>
                <div className={styles.heading}>
                    <h1>{data.id}</h1>
                    <h2>{data.heading}</h2>
                </div>
                <div className={styles.content}>
                    <p className={styles.para}>{data.para}</p>
                </div>
            </div>
        </div>
    );
}
