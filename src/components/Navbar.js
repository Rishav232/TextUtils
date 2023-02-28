import React from 'react'
import PropTypes from 'prop-types'
export default function Navbar(props) {

  // const setBackground=(e)=>{
  //   document.body.style.backgroundColor=e.target.value;
  // }
  return (
    <nav className={`navbar navbar-expand-lg navbar-dark bg-dark`}>
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className={`form-check form-switch text-light"}`}>
          <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label className="form-check-label"  style={{color:"white"}}htmlFor="flexSwitchCheckDefault">{props.mode==="white"?"Enable DarkMode":"Enable LightMode"}</label>
        </div>
      </div>
  </nav>
  )
}
Navbar.propTypes={
  title:PropTypes.string.isRequired,
}
Navbar.defaultProps={
  title:"TextUtils",
}