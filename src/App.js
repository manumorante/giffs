import React, { useState } from 'react';
import { Link, Route, Router } from 'wouter';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';
import Search from './components/Search';

export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Router base='/giffs/build'>
          <h1><Link to='/'>Giffs</Link></h1>
        </Router>

        <Search />

        <Router base='/giffs/build'>
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
