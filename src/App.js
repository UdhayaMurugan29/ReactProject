
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Loginform from './Components/Loginform/Loginform';
// import Dashboard from './Components/Dashboard/Dashboard';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={Loginform} />
//         <Route path="/dashboard" component={Dashboard} />
//       </Switch>
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

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Loginform from './Components/Loginform/Loginform';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      {window.location.pathname === '/dashboard' ? (
        <Dashboard />
      ) : (
        <Loginform />
      )}
    </Router>
  );
}

export default App;
