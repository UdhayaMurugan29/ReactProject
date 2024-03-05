// Dashboard.js
import React from 'react';
import './Dashboard.css';
import logo from './img/group4.png';
const HorizontalBar = ({ label, percentage, color }) => {
  const gradient = `linear-gradient(to right, ${color} ${percentage}%, transparent ${percentage}%)`;

  return (
    <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', marginTop: '20px' }}>
      <div style={{ width: '200px', marginRight: '10px', color: '#36A546CC', textAlign: 'center' }}>{label}</div>
      <div style={{ display: 'block', height: '20px', width: '200px', background: gradient, borderRadius: '5px' }}></div>
      <div style={{ marginLeft: '10px', color: '#36A546CC' }}>{percentage}%</div>
    </div>
  );
};



  const HorizontalBarContainer = ({ data }) => {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
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
    { label: 'Productivity on Monday', percentage: 4, color: 'green' },
    { label: 'Productivity on Tuesday', percentage: 10, color: 'green' },
    // Add more days here
  ];
  
  
  return (
    <div className="dashboard-container">
      <form>
        <label><img src={logo} alt="Logo" className="logo1" /></label>
        <label style={{ color: '#36A546CC', display: 'block' }}>Employee Productivity Dashboard</label>
        <HorizontalBarContainer data={data} />
      </form>
    </div>
  );
};
  



export default Dashboard;
