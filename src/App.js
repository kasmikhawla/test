import React from 'react';
import {BrowserRouter, Switch ,Route} from'react-router-dom';
import Layout from '../src/component/hoc/Layout.jsx'
import Accueil from '../src/component/accueil/Accueil';
import Boutique from '../src/component/boutique/Boutique';


function App() {
  return (
    <BrowserRouter>
    <Layout>
        <Switch>
          <Route path="/" exact component = {Accueil} />
          <Route path="/boutique" exact component = {Boutique} />
        </Switch>
    </Layout>
    </BrowserRouter>
  );
}

export default App;
