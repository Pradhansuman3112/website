import React from 'react';
import {Route, IndexRoute} from 'react-router';

import CoreLayout from '../components/layouts/PageLayout/PageLayout'
import Home from '../components/Home/index';
import About from '../components/About/index';
import Crowdsale from '../components/Crowdsale/index';

import Blog from '../components/Blog/index';

import Login from '../components/Login/index';
import Cms from '../components/Cms/index';
import Cmsadd from '../components/Cmsadd/index';

import CounterRoute from '../components/Counter/index'


export default () => {
  return (
      <Route path="/" component={CoreLayout}>
          <IndexRoute component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/crowdsale" component={Crowdsale}/>
          <Route path="/blog" component={Blog}/>

          <Route path="/login" component={Login}/>
          <Route path="/cms" component={Cms} />
          <Route path="/cms/add" component={Cmsadd}/>

          <Route path="/counter" component={CounterRoute}/>
      </Route>
  );
};
// <Route path="/detail/:id" component={UserDetail}/>
