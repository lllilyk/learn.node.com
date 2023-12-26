import React from 'react';
import styles from './login.module.css';

const Login = () => {
    return (
        <div className={styles.loginContainer}>
            <p className={styles.pageTitle}>Log in</p>
            <form className={styles.loginForm}>
                <label className={styles.formEmailLabel} htmlFor="email">Email</label>
                <div className={styles.inputEmailContainer}>
                    <input className={styles.inputEmailField} 
                            type="text" 
                            id="email" 
                            name="email"
                            placeholder="Type your email" 
                    />
                </div>

                <label className={styles.formPasswordLabel} htmlFor="password">Password</label>    
                <div className={styles.inputPasswordContainer}>
                    <input className={styles.inputPasswordField}
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Enter your password" 
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

export default Login;