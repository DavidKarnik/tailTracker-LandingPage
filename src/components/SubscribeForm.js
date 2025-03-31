'use client'; // Povinné pro interaktivní prvky
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

        try {
            // Odesíláme na Next.js API route
            const response = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, name }),
            });

            const data = await response.json();

            if (response.ok) {
                setMessage('Děkujeme za přihlášení! 🐕');
                setEmail('');
                setName('');
            } else {
                throw new Error(data.error || 'Nepodařilo se odeslat');
            }
        } catch (error) {
            setMessage(`Chyba: ${error.message}`);
            console.error('Submit error:', error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className={styles.formContainer}>
            <h3>Dáme Vám vědět, až bude produkt připravený!</h3>
            <form onSubmit={handleSubmit} id="subscribe-form">
                <input
                    type="email"
                    placeholder="E-mail*"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="text"
                    placeholder="Jméno (nepovinné)"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Odesílám...' : 'Odeslat'}
                </button>
            </form>
            {message && (
                <p className={message.includes('Chyba') ? styles.error : styles.success}>
                    {message}
                </p>
            )}
        </div>
    );
}