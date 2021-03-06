import React from 'react'
import Header from './Header'

export default (props) => (
  <>
    <Header />
    <div className="layout">{props.children}</div>
    <footer>
      <p className="light-text-color">
        Shakil Choudhury - {new Date().getFullYear()}
      </p>
    </footer>
  </>
)
