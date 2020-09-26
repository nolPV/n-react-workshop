import React, { Component } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class FooterMenu extends Component {
    render() {
        return (
            <footer className="pt-4 my-md-5 pt-md-5 pl-5 border-top ">
            <div className="row">
              <div className="col-12 col-md text-left">
                ShirtOnDemand
                <small className="d-block mb-3 text-muted">&copy; 2020</small>
                <ul className="list-unstyled text-small ">
                  <li><a className="text-muted" href="#">Privacy Policy</a></li>
                  <li><a className="text-muted" href="#">Return and Refunds Policy</a></li>
                  <li><a className="text-muted" href="#">Terms and Conditions</a></li>
                  <li><a className="text-muted" href="#">WHY OUR APP</a></li>
                  <li><a className="text-muted" href="#">Street Arts</a></li>
                </ul>
              </div>
              <div className="col-6 col-md text-left">
                <h5>Sitemap</h5>
                <ul className="list-unstyled text-small ">
                  <li><a className="text-muted" href="#">Home</a></li>
                  <li><a className="text-muted" href="#">Design</a></li>
                  <li><a className="text-muted" href="#">User</a></li>
                  <li><a className="text-muted" href="#">Cart</a></li>
                </ul>
              </div>
              <div className="col-6 col-md text-left">
                <h5>Contact</h5>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">Resource</a></li>
                  <li><a className="text-muted" href="#">Resource name</a></li>
                  <li><a className="text-muted" href="#">Another resource</a></li>
                  <li><a className="text-muted" href="#">Final resource</a></li>
                </ul>
              </div>
            </div>
          </footer>
        )
    }
}

export default FooterMenu

