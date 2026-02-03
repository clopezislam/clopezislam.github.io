"use client";
import  Link  from "next/link";
import styles from "@/Navbar.module.css"


export default function Navbar() {

    return(
        <nav>
            {/* Add drop options with their own redirections on hover */}
            <ul>
                <li><Link href={"/leftfield_page/public"}>Home</Link></li>
                <li><Link href={"/service"}>Our Services</Link></li>
                <li><Link href={"/testamonial"}>Testamonial</Link></li>
                <li><Link href={"/about"}>Request Quotes</Link></li>
                <li><Link href={"/contact"}>Contact Us</Link></li>
            </ul>
        </nav>
    )
}