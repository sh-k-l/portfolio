import React from 'react';
import Landing from './Landing';

export default (props) => (
  <>
    <Landing/>
    <div className="layout">
      {props.children}      
    </div>
    <footer><p className="light-text-color">Designed and coded by Shakil Choudhury - {new Date().getFullYear()}</p></footer>
  </>
);