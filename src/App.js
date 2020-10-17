import React, { useState } from 'react';
import { Link, Route } from 'wouter';
import './App.css';
import ListOfGifs from './components/ListOfGifs';

export default function App() {
  const [keyword, setKeyword] = useState('404')

  return (
    <div className="App">
      <section className="App-content">
        <h1>Giffs</h1>
        <Link to='/'>home</Link>
        <Link to='/gifs/panda'>panda</Link>
        <Link to='/gifs/matrix'>matrix</Link>

        <Route
          component={ListOfGifs}
          path='/gifs/:keyword' />
      </section>
    </div>
  );
}
