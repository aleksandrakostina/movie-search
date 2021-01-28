import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Home from './components/home/Home';
import MovieDetails from './components/movieDetails/MovieDetails';
import NotFound from './components/notFound/NotFound';
import Watchlist from './components/watchlist/Watchlist';
import MovieProvider from './redux/MovieProvider';

const App = () => {

  return (
    <>
    
    <BrowserRouter>
      <MovieProvider>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:id" component={MovieDetails} />
          <Route path="/watchlist" component={Watchlist} />
          <Route path="/" component={NotFound} />
        </Switch>
      </MovieProvider>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default App;
