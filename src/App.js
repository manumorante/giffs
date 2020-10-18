import React from 'react';
import { Link, Route, Router } from 'wouter';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import Search from './components/Search';
import './App.css';

export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1><Link to='/'>Giffs</Link></h1>

        <Search />

        <Router base={process.env.PUBLIC_URL}>
          <Route
            component={Home}
            path='/' />

          <Route
            component={SearchResults}
            path='/search/:keyword' />

          <Route
            component={Detail}
            path='/gif/:id' />
        </Router>
      </section>
    </div>
  );
}
