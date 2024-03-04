import React from 'react';
import './Loginform.css';
import logo from './img/Group 3.png';

const Loginform = () => {
  return (
    
    <div className="login-form">
    
    <form>
      
      <label><img src={logo} alt="Logo" className="logo" /></label>
      <label class = 'text'> We are electric </label>
      <label htmlFor="username"> </label>
      <input type="text" id="username" name="username" placeholder="Email" />
      <label htmlFor="password"> </label>
      <input type="password" id="password" name="password" placeholder="Password" />
      <label></label><button type="submit">Login</button><label></label>
      <label class="forgot-password">Forgoit Password?</label>
     
    </form></div>
  )
}

export default Loginform