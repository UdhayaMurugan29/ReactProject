import React, { useState } from 'react';
import './Loginform.css';
import logo from './img/Group 3.png';

const Loginform = () => {
  
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: '' });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let errors = {};
        if (!formData.email) {
            errors.email = 'Email is required';
        } else if (formData.email !== 'user') {
            errors.email = 'Invalid email';
        }
        if (!formData.password) {
            errors.password = 'Password is required';
        } else if (formData.password !== 'password') {
            errors.password = 'Invalid password';
        }
        if (Object.keys(errors).length === 0) {
          setErrors(errors);
        } else {
            setErrors(errors);
        }
    };

    return (
        <div className="login-form">
            <form onSubmit={handleSubmit}>
                <label><img src={logo} alt="Logo" className="logo" /></label>
                <label className='text'> We are electric </label>
                <label htmlFor="username"></label>
                <input type="text" id="username" name="email" placeholder="Email" value={formData.email} onChange={handleChange} style={{ color: 'white',textAlign:'center'}} />
                <label htmlFor="password"></label>
                <input type="password" id="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} style={{ color: 'white',textAlign:'center'}}  />
                <label><button type="submit">Login</button></label>
                <label classname="error"style={{ color: '#36A546CC', textAlign: 'center',font: 'normal normal normal 16px/21px Mulish' }}>{errors.email && <span>{errors.email}</span>}</label>
                <label style={{ color: '#36A546CC', textAlign: 'center',font: 'normal normal normal 16px/21px Mulish' }}>{errors.password && <span>{errors.password}</span>} </label>

                <label className="forgot-password">Forgot Password?</label>
            </form>
        </div>
    )
}


export default Loginform
