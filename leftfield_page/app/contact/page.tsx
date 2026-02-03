"use client";

import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import styles from "@/styles/Contact.module.css";

export default function ContactPage() {
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_KEY!);

    const resetForm = () => {
        // reload page  reset form state
        window.location.reload();
    };

    if (state.succeeded) {
        return (
            <div className={styles.success}>
                <h1>Message Sent</h1>
                <p>Thanks for reaching out. We’ll get back to you shortly.</p>
                <div className={styles.buttons}>
                    <Link href="/" className={styles.button}>
                        Home
                    </Link>
                    <button onClick={resetForm} className={styles.button}>
                        Submit Another
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <p className={styles.subtitle}>
                Have a question or want a quote? Fill out the form below.
            </p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <input name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <input name="phone" placeholder="Phone Number (optional)" />
                <textarea name="message" placeholder="Your Message" rows={5} required />
                <ValidationError prefix="Message" field="message" errors={state.errors} />

                <button type="submit" disabled={state.submitting}>
                    {state.submitting ? "Sending..." : "Send Message"}
                </button>
            </form>
        </div>
    );
}
