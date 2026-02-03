"use client";

import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
    return (
        <div className={styles.container}>

            <div className={styles.hero}>
                <h1>Home</h1>
                <p>Welcome! This can be replaced with any intro or banner text.</p>
            </div>


            <div className={styles.overviews}>

                <div className={styles.section}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/overview1.jpg"
                            alt="Overview 1"
                            width={300}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.text}>
                        <h2>Overview 1</h2>
                        <p>
                            This is a brief description of overview 1. It explains what this
                            section is about in a short paragraph.
                        </p>
                    </div>
                </div>


                <div className={`${styles.section} ${styles.reverse}`}>
                    <div className={styles.text}>
                        <h2>Overview 2</h2>
                        <p>
                            This is a brief description of overview 2. You can add more
                            details, bullet points, or images here as needed.
                        </p>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/overview2.jpg"
                            alt="Overview 2"
                            width={300}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                </div>


                <div className={styles.section}>
                    <div className={styles.imageWrapper}>
                        <Image
                            src="/overview3.jpg"
                            alt="Overview 3"
                            width={300}
                            height={200}
                            className={styles.image}
                        />
                    </div>
                    <div className={styles.text}>
                        <h2>Overview 3</h2>
                        <p>
                            This is a brief description of overview 3. It alternates back to
                            image left, text right.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
