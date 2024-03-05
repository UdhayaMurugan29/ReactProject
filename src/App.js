// import React from 'react'; // working with navigate
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Loginform from './Components/Loginform/Loginform';
// import Dashboard from './Components/Dashboard/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Loginform />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

// import React from 'react';
// import Loginform from './Components/Loginform/Loginform'; // Assuming Login is your login component

// function App() {
//   return (
//     <div>
//       <Loginform />
//     </div>
//   );
// }

// export default App;

// import React from 'react'; //working in git
// import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Loginform from './Components/Loginform/Loginform';
// import Dashboard from './Components/Dashboard/Dashboard';

// function App() {
//   return (
//     <Router>
//       {window.location.pathname === '/dashboard' ? (
//         <Dashboard />
//       ) : (
//         <Loginform />
//       )}
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Loginform from './Components/Loginform/Loginform';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loginform />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* You can add more routes here */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

