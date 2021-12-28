import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

// const TopicsList = (props) => {
//   console.log('TopicsList');
//   return (
//     <div>
//       <h1>TopicsList PAGE</h1>
//     </div>
//   );
// };

// const TopicsDetail = (props) => {
//   console.log('TopicsDetail');
//   return (
//     <div>
//       <h1>TopicsDetail PAGE</h1>
//     </div>
//   );
// };

function App() {
  return (
    <div>
      <Router>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/shop">
          <ShopPage />
        </Route>
      </Router>
    </div>
  );
}

export default App;
