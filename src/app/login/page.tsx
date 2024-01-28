"use client";

import React, { useState } from 'react';
import styles from './login.module.css';

export default function Login() {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log("email:", formData.email, "/ password:", formData.password);

        const response = await fetch('http://localhost:3001/api/v1/auth/login', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });
    
        const data = await response.json();

        localStorage.setItem("accessToken", data.accessToken);
    };
    
    return (
        <div className={styles.loginContainer}>
            <p className={styles.pageTitle}>Log in</p>
            <form className={styles.loginForm} onSubmit={handleSubmit} method="POST">
                <label htmlFor="email" className={styles.formEmailLabel}>Email</label>
                <div className={styles.inputEmailContainer}>
                    <input className={styles.inputEmailField} 
                            type="text" 
                            id="email" 
                            name="email"
                            placeholder="Type your email" 
                            onChange={handleChange}
                    />
                </div>

                <label htmlFor="password" className={styles.formPasswordLabel}>Password</label>    
                <div className={styles.inputPasswordContainer}>
                    <input className={styles.inputPasswordField}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password" 
                            onChange={handleChange}
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