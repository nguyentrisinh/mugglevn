import React, { Component } from 'react';
import { Link } from 'react-router'

class Sidebar extends Component {

  handleClick(e) {
    e.preventDefault();
    e.target.parentElement.classList.toggle('open');
  }

  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? 'nav-item nav-dropdown open' : 'nav-item nav-dropdown';
  }

  // secondLevelActive(routeName) {
  //   return this.props.location.pathname.indexOf(routeName) > -1 ? "nav nav-second-level collapse in" : "nav nav-second-level collapse";
  // }

  render() {
    return (

      <div className="sidebar">
        <nav className="sidebar-nav">
          <ul className="nav">
            <li className="nav-item">
              <Link to={'/home/dashboard'} className="nav-link" activeClassName="active"><i className="icon-speedometer"></i> Dashboard <span className="badge badge-info"></span></Link>
            </li>

            <li className="nav-title">
              Company Management
            </li>
            <li className={this.activeRoute("/company")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> Company</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/home/company/company-list'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i>Company List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/home/company/company-create'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i>Create Company</Link>
                </li>
              </ul>
            </li>

            <li className="nav-title">
              Review Management
            </li>
            <li className={this.activeRoute("/review")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> Review</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/home/review/review-list'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i>Review List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/home/review/review-create'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i>Create Review</Link>
                </li>
              </ul>
            </li>

            <li className="nav-title">
              User Managemet
            </li>
            <li className={this.activeRoute("/user")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> User</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/home/user/user-list'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i>User List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/home/user/user-create'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i>Create User</Link>
                </li>
              </ul>
            </li>

            <li className="nav-title">
              Job Management
            </li>
            <li className={this.activeRoute("/job")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> Job</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/home/job/job-list'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i>Job List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/home/job/job-create'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i>Create Job</Link>
                </li>
              </ul>
            </li>

            <li className="nav-title">
              Skill Management
            </li>
            <li className={this.activeRoute("/skill")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> Skill</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/home/skill/skill-list'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i>Skill List</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/home/skill/skill-create'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i>Create Skill</Link>
                </li>
              </ul>
            </li>

            <li className="nav-title">
              Job-Skill Management
            </li>
            <li className={this.activeRoute("/job-skill")}>
              <a className="nav-link nav-dropdown-toggle" href="#" onClick={this.handleClick.bind(this)}><i className="icon-puzzle"></i> Job-Skill</a>
              <ul className="nav-dropdown-items">
                <li className="nav-item">
                  <Link to={'/home/job-skill/job-skill'} className="nav-link" activeClassName="active"><i className="icon-puzzle"></i>JobSkill</Link>
                </li>
              </ul>
            </li>

          </ul>
        </nav>
      </div>
    )
  }
}

export default Sidebar;
