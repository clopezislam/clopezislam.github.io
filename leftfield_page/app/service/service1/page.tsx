"use client";

import Image from "next/image";
import styles from "@/styles/Service1.module.css";

export default function Service1() {
    return (
        <div className={styles.container}>

            <div className={styles.hero}>
                <h1>Web Development Service</h1>
                <p>
                    We provide top-notch web development services tailored to your business needs.
                </p>
            </div>

            <div className={styles.sections}>
                <div className={styles.section}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/service1.jpg"
                            alt="Web Design"
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.text}>
                        <h2>Custom Websites</h2>
                        <p>
                            We build responsive, modern websites with clean design and
                            user-friendly navigation, optimized for all devices.
                        </p>
                    </div>
                </div>

                <div className={`${styles.section} ${styles.reverse}`}>
                    <div className={styles.text}>
                        <h2>E-commerce Solutions</h2>
                        <p>
                            From product catalogs to secure checkout, we provide complete
                            e-commerce solutions that help you sell online effortlessly.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/service2.jpg"
                            alt="E-commerce"
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                </div>

                <div className={styles.section}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/service3.jpg"
                            alt="SEO & Marketing"
                            width={400}
                            height={250}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.text}>
                        <h2>SEO & Marketing</h2>
                        <p>
                            Improve your online presence and reach your target audience with
                            our SEO and digital marketing strategies.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
