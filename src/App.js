import React from 'react'
import './App.css'
import { Route, Router } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import { GifsContextProvider } from './context/GifsContext'
import useHashLocation from './hooks/useHashLocation'
import Info from 'pages/Info'
import Contact from 'pages/Contact'
import Header from 'components/Header'

export default function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Router hook={useHashLocation}>
          <Header />

          <GifsContextProvider>
            <Route
              component={Home}
              path='/' />

            <Route
              component={SearchResults}
              path='/search/:keyword' />

            <Route
              component={Detail}
              path='/gif/:id' />

            <Route
              component={Info}
              path='/info' />

            <Route
              component={Contact}
              path='/contact' />

          </GifsContextProvider>
        </Router>
      </section>
    </div>
  );
}
