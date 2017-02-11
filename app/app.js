import React from 'react';
import ReactDOM from 'react-dom';

import Children from './apiComponent/Children'
import Ref from './apiComponent/Ref'
import ShouldComponentUpdate from './apiComponent/ShouldComponentUpdate'
import ComponentWillReceiveProps from './apiComponent/ComponentWillReceiveProps'


ReactDOM.render(
  <div>
    {false && <Children>it's children</Children>}
    {false && <Ref />}
    {false && <ShouldComponentUpdate />}
    {true && <ComponentWillReceiveProps />}
  </div>,
  document.getElementById('app')
);