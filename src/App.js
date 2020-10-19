import React from 'react'
import './App.css'
import { Link, Route, Router } from 'wouter'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import Search from './components/Search'
import StaticContext from './context/StaticContext'
import { GifsContextProvider } from './context/GifsContext'
import ActiveLink from './components/ActiveLink'
import useHashLocation from './hooks/useHashLocation'

export default function App() {
  return (
    <StaticContext.Provider value={
      {
        name: 'Manu Morante',
        learning: true
      }
    }>
      <div className="App">
        <section className="App-content">
          <Router hook={useHashLocation}>
            <h1><Link to='/'>Giffs</Link></h1>

            <Search />

            <p><ActiveLink href="/">Home</ActiveLink></p>
            <p><ActiveLink href="/panda">Search panda</ActiveLink></p>
            <p><ActiveLink href="/batman">Search batman</ActiveLink></p>

            <GifsContextProvider>
              <Route
                component={Home}
                path='/' />

              <Route
                component={SearchResults}
                path='/:keyword' />

              <Route
                component={Detail}
                path='/gif/:id' />
            </GifsContextProvider>
          </Router>
        </section>
      </div>
    </StaticContext.Provider>
  );
}
