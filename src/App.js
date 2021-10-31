// import logo from './logo.svg';
import { Switch, Route } from 'react-router';
import './App.css';
import Container from './components/Container/Container';
import AppBar from './components/AppBar/AppBar';

import HomeView from './views/HomeView';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Route path="/" exact>
        <HomeView />
      </Route>
    </Container>
  );
}
