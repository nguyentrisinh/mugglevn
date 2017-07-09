import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="app-footer">
        {/*<a href="http://coreui.io">CoreUI</a> &copy; 2017 creativeLabs.*/}
          <a>Muggle.vn</a> &copy; 2017 muggle.vn.
          {/*<span className="float-right">Powered by <a href="http://coreui.io">CoreUI</a></span>*/}
          <span className="float-right">Powered by <a>Muggle.vn</a></span>
      </footer>
    )
  }
}

export default Footer;
