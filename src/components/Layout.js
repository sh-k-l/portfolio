import React from 'react';
import Landing from './Landing';

export default (props) => (
  <>
    <Landing/>
    <div style={{margin:"3rem auto", maxWidth:"650px"}}>
      {props.children}
    </div>
  </>
);