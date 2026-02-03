"use client";
import styles from "./PageWrapper.module.css";

interface PageWrapperProps {
    title?: string;
    subtitle?: string;
    children: React.ReactNode;
}

export default function PageWrapper({ title, subtitle, children }: PageWrapperProps) {
    return (
        <div className={styles.container}>
            {title && <h1>{title}</h1>}
            {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            <div className={styles.content}>{children}</div>
        </div>
    );
}
