import React from 'react'

const Footer = () => {
  return (
  <>
  <footer className="bd-footer py-4 py-md-5 mt-5 bg-light">
  <div className="containerr py-4 py-md-5 px-4 px-md-3">
    <div className="row">
      <div className="col-6 col-lg-2 offset-lg-1 mb-3">
        <h5>Social Media Link</h5>
        <ul className="list-unstyled">
          <li className="mb-2"><a href="https://instagram.com/santosh___rajput__?igshid=YmMyMTA2M2Y="><i className="fa fa-instagram" style={{fontSize:'30px',color:'black'}}></i>  </a></li>
          <li className="mb-2"><a href="https://www.facebook.com/profile.php?id=100014344862229"><i className="fa fa-facebook" style={{fontSize:'30px',color:'black'}}></i>  </a></li>
        </ul>
      </div>
      <div className="col-6 col-lg-2 offset-lg-1 mb-3">
          <span className="fs-5"><h5>All About Today</h5></span>
        <ul className="list-unstyled small text-muted">
          <li className="mb-2">All News with their own category . </li>
          <li className="mb-2">All rights are reserved <strong>®</strong>.</li>
        </ul>
      </div>
      </div>
  </div>
</footer>
  </>
  )
}

export default Footer
