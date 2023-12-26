"use client";

import React, { useState } from 'react';
import styles from './login.module.css';
import { POST } from '../api/auth/login/route';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("email:", email, "/ password:", password);

        await POST(email, password);
    }
    
    return (
        <div className={styles.loginContainer}>
            <p className={styles.pageTitle}>Log in</p>
            <form className={styles.loginForm} onSubmit={handleSubmit}>
                <label htmlFor="email" className={styles.formEmailLabel}>Email</label>
                <div className={styles.inputEmailContainer}>
                    <input className={styles.inputEmailField} 
                            type="text" 
                            id="email" 
                            name="email"
                            placeholder="Type your email" 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <label htmlFor="password" className={styles.formPasswordLabel}>Password</label>    
                <div className={styles.inputPasswordContainer}>
                    <input className={styles.inputPasswordField}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <button className={styles.continueButton} type="submit">
                    <span className={styles.buttonText}>Continue</span>
                </button>
            </form>
            <p className={styles.forgotPassword}>Forgot your password?</p>
        </div>
    );
}