import React from 'react';
import Landing from './Landing';

export default (props) => (
  <>
    <Landing/>
    <div style={{margin:"3rem auto", maxWidth:"650px"}}>
      {props.children}
      <footer><p>Designed and coded by Shakil Choudhury - {new Date().getFullYear()}</p></footer>
    </div>
  </>
);