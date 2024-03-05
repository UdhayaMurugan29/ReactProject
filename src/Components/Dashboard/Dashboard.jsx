// Dashboard.js
import React from 'react';
import './Dashboard.css';
import logo from './img/group4.png';
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
    { label: 'Productivity on Monday', percentage: 4, color: '#36A54680' },
    { label: 'Productivity on Tuesday', percentage: 92, color: '#36A54680' },
    { label: 'Productivity on Wednesday', percentage: 122, color: '#36A54680' },
    { label: 'Productivity on Thursday', percentage: 93, color: '#36A54680' },
    { label: 'Productivity on Friday', percentage: 89, color: '#36A54680' },
    { label: 'Productivity on Saturday', percentage: 98, color: '#36A54680' }
    // Add more days here
  ];
  
  
  return (
    <div className="dashboard-container">
      <form>
        <label><img src={logo} alt="Logo" className="logo1" /></label>
        <div className='horizontal-bar-container' >
        <input type="text1" placeholder="Employee Productivity Dashboard"  style={{ color: 'white',textAlign:'center'}} />
        <HorizontalBarContainer data={data} /> </div>
      </form> 
    </div>
  );
};
  



export default Dashboard;
