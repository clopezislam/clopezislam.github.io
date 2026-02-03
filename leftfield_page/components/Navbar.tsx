"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <Link href="/">
                    <Image
                        src="/logo.png"   // place logo in /public/logo.png
                        alt="Logo"
                        width={40}
                        height={40}
                    />
                </Link>
            </div>

            <ul className={styles.links}>
                <li><Link href="/">Home</Link></li>
                <li className={styles.dropdown}>
                    <a href="#">Our Services</a>
                    <ul className={styles.dropdownMenu}>
                        <li><Link href="/service/service1">Service 1</Link></li>
                        <li><Link href="/service/service2">Service 2</Link></li>
                        <li><Link href="/service/service3">Service 3</Link></li>
                    </ul>
                </li>
                <li><Link href="/testamonial">Testimonials</Link></li>
                <li><Link href="/about">Request Quotes</Link></li>
                <li><Link href="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
}
