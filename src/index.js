import React from 'react';
import ReactDOM from 'react-dom';

import { InstantSearch } from 'react-instantsearch/dom';
import Home from './Pages/Home/Home';

import './stylesheets/bundler/main.css';

ReactDOM.render(
  <InstantSearch appId="ENW4VC4AR0" apiKey="1d13bc5f497e3ecb05c5a1718c1c807f" indexName="prod_personal">
    <Home />
  </InstantSearch>,
  document.getElementById('root')
);
