import { useState } from 'react';
import styles from '../styles/SubscribeForm.module.css';

export default function SubscribeForm() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage('');

        console.log("Sending request to:", process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL);

        try {
            const response = await fetch(process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, name }),
                mode: 'cors',
            });

            const text = await response.text();
            console.log("Response:", text);

            if (response.ok && text.includes("Success")) {
                setMessage('Thanks for subscribing! 🐕');
                setEmail('');
                setName('');
            } else {
                setMessage('Failed to subscribe. Response: ' + text);
            }
        } catch (error) {
            console.error("Fetch error:", error);
            setMessage('An error occurred. Please try again later.');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h3>Get Updates</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Your Email*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Your Name (Optional)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Hit Me Up!'}
                </button>
            </form>
            {message && <p className={styles.message}>{message}</p>}
        </div>
    );
}