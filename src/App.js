import React, { useState } from 'react';
import { Link, Route } from 'wouter';
import './App.css';
import Home from './pages/Home';
import SearchResults from './pages/SearchResults';
import Detail from './pages/Detail';

export default function App() {

  return (
    <div className="App">
      <section className="App-content">
        <h1><Link to='/'>Giffs</Link></h1>

        <Route
          component={Home}
          path='/' />

        <Route
          component={SearchResults}
          path='/search/:keyword' />

        <Route
          component={Detail}
          path='/gif/:id' />
      </section>
    </div>
  );
}
