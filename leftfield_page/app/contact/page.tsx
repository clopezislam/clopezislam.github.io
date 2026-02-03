"use client"

import { ChangeEvent, useState, FormEvent} from "react";

interface ContactInfo {

    name: string;
    email: string;
    phone: string;
    message: string;
}

export default function ContactPage()
{
    const [formData, setFormData] = useState<ContactInfo>({
            name:"",
            email:"",
            phone: "",
            message: "",
        });

    const [status, setStatus] = useState<string>("");

    //On click of the form, update the local state of formData to be sent
    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ... formData, [event.target.name]: event.target.value });
    }

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setStatus("Sending...");

        try {
            //Provide api endpoint here, posts user info to this endpoint
            const response = await fetch("api/contactEmail", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("success");
            }
            else
            {
                setStatus("error");
            }
        }
        catch (error) {
            console.error(error);
            setStatus("error");
        }
    }

    return (
        <div>
            <h1> Contact Us</h1>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
                <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="phone"
                    placeholder="Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit" >Submit</button>
            </form>
        </div>
    )

}