import React, { useState } from 'react';
import './Employee.css';
import { Link } from 'react-router-dom';
import logo1 from './group4.png';
import logo2 from './Group 46.png';
import { FaHome, FaUser ,FaSearch} from 'react-icons/fa';
const EmployeeDetails = ({ employee }) => {
    return (
      <div className='employee-hori'>
        <p style={{ fontSize: '14px'}}>EMP ID : {employee.id}</p>
        <p style={{ fontSize: '14px' }}>Name : {employee.name}</p>
        <p style={{ fontSize: '14px' }}>DOB : {employee.age}</p>
        <p style={{ fontSize: '14px' }}>Role : {employee.position}</p>
      </div>
    );
  };
const EmployeeSearch = ({ employees, onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
  
    const handleChange = (e) => {
      setSearchTerm(e.target.value);
      onSearch(e.target.value);
    };
    return (
        <div className='employee-search'>
          <input
            type="text"
            placeholder="Search with name"
            value={searchTerm}
            onChange={handleChange}
          />
        <FaSearch className="search-icon" data-tip="Search" />

        </div>
      );
    };
    const App = () => {
        const [filteredEmployees, setFilteredEmployees] = useState([]);
        const employees = [
          { id: 1, name: 'Arjun', age: '16-11-2000', position: 'Software Engineer' },
          { id: 2, name: 'Mahesh', age: '15-01-2000', position: 'Web Developer' },
        ];
      
        const handleSearch = (searchTerm) => {
          const filtered = employees.filter((employee) =>
            employee.name.toLowerCase().includes(searchTerm.toLowerCase())
          );
          setFilteredEmployees(filtered);
        };
        return (
            <div className="employee-container">
                <div className="employee-hori>" >
            <form>
                <label><img src={logo1} alt="Logo" className="logo3" /></label>
                </form>  
              <EmployeeSearch employees={employees} onSearch={handleSearch} />
              
              <div>
                {filteredEmployees.map((employee) => (
                  <EmployeeDetails key={employee.id} employee={employee} />
                ))}
            
              </div>
              </div>
              <div className="status-bar">
                <div className="icon1">
                    <Link to="/dashboard" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FaHome /> </Link>
                </div>
                <div className="icon1">
                    <Link to="/Employee" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <FaUser /> </Link>
                </div>
                
                
            </div>
              
            </div>
            
          );
        };
export default App;