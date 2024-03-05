// Dashboard.js
import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import logo2 from './img/Group 46.png';
import logo1 from './img/group4.png';
const HorizontalBar = ({ label, percentage, color }) => {
  const gradient = `linear-gradient(to right, ${color} ${percentage}%, transparent ${percentage}%)`;

  return (
    <><div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px', marginTop: '10px' }}>
      <div style={{ width: '179px', top :'302px',left:'473px',height:'15px', textAlign: 'left',font: 'normal normal normal 12px/16px Mulish', color: '#FFFFFF',opacity :'1'}}>{label}</div>
      <div style={{ marginLeft: '10px', color: '#36A546CC',font: 'normal normal normal 14px/19px Mulish',color: '#36A546', opacity: '1' }}>{percentage}%</div>
    </div><div style={{ display: 'block' }}>
        <div style={{ height: '11px', width: '183px', background: gradient, borderRadius: '5px' }}></div>
      </div></>
    
  );
};

  const HorizontalBarContainer = ({ data }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column'}}>
        {data.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px' }}>
            <HorizontalBar label={item.label} percentage={item.percentage} color={item.color} />
          </div>
        ))}
      </div>
    );
  };
  
const Dashboard = () => {
  const data = [
    { label: 'Productivity on Monday', percentage: 4, color: '#36A54680' },
    { label: 'Productivity on Tuesday', percentage: 92, color: '#36A54680' },
    { label: 'Productivity on Wednesday', percentage: 122, color: '#36A54680' },
    { label: 'Productivity on Thursday', percentage: 93, color: '#36A54680' },
    { label: 'Productivity on Friday', percentage: 89, color: '#36A54680' },
    { label: 'Productivity on Saturday', percentage: 98, color: '#36A54680' }
    // Add more days here
  ];
  
  
  return (
    <><div className="dashboard-container">
      <form>
        
         <label><img src={logo1} alt="Logo" className="logo1" /></label>
         <Link to="/login">
         <label><img src={logo2} alt="Logo" className="logo2" /></label>  </Link>
        <div className='horizontal-bar-container'>
          <input type="text1" placeholder="Employee Productivity Dashboard" />
          <HorizontalBarContainer data={data} /> </div>
      </form>

    </div><div className="status-bar">
    
      <div className="icon">
      <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
        <FaHome /> </Link>
      </div>
      
      <div className="icon">
      <Link to="/Employee" style={{ textDecoration: 'none', color: 'inherit' }}>
        <FaUser /> </Link>
      </div>
    
      </div></>
     
  );
};
export default Dashboard;
