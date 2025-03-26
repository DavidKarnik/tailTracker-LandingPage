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

        try {
            const response = await fetch(
                process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL,
                {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ email, name }),
                }
            );

            const text = await response.text();

            if (text === 'Success') {
                setMessage('Thanks for subscribing! 🐕');
                setEmail('');
                setName('');
            } else {
                setMessage('Failed to subscribe. Please try again.');
            }
        } catch (error) {
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