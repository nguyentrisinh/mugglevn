import React from 'react';
import { Router, Route, IndexRoute, hashHistory, IndexRedirect } from 'react-router';

// Containers
import Full from './containers/Full/'
import Simple from './containers/Simple/'

//Dashboard
import Dashboard from './views/Dashboard/'
//Company Management
import CompanyList from './views/Company/CompanyList/Company'
import CompanyForm from './views/Company/CreateCompany/CompanyForm'
//Review Management
import ReviewForm from './views/Reviews/CreateReview/CreateReview'
import ReviewList from './views/Reviews/ReviewList/ReviewList'
//User Management
import UserList from './views/User/UserList/UserList'
import UserForm from './views/User/CreateUser/CreateUser'
//Job Management
import JobsList from './views/Job/JobsList/JobsList'
import JobForm from './views/Job/CreateJob/CreateJob'
//JobSkill Management
import JobSkill from './views/JobSkill/JobSkill'
//Skill Management
import SkillForm from './views/Skill/CreateSkill/CreateSkill'
import SkillList from './views/Skill/SkillList/SkillList'
//Simple pages
import Login from './views/Pages/Login/Login'
import Register from './views/Pages/Register/Register'

export default (
  <Router history={hashHistory}>
    <Route path="/" name="Home" component={Simple}>
      <IndexRoute component={Login}/>
    </Route>
    <Route path="/home" name="Home" component={Full}>
        <IndexRoute component={Dashboard}/>
        <Route path="dashboard" name="Dashboard" component={Dashboard}/>
        <Route path="company/" name="Company">
            <IndexRoute component={CompanyList}/>
            <Route path="company-list" name="Company List" component={CompanyList}/>
            <Route path="company-create" name="Company Form" component={CompanyForm}/>
        </Route>
        <Route path="review/" name="Review">
            <IndexRoute component={ReviewList}/>
            <Route path="review-list" name="Review List" component={ReviewList}/>
            <Route path="review-create" name="Review Form" component={ReviewForm}/>
        </Route>
        <Route path="job/" name="Job">
            <IndexRoute component={JobsList}/>
            <Route path="job-list" name="Job List" component={JobsList}/>
            <Route path="job-create" name="Job Form" component={JobForm}/>
        </Route>
        <Route path="job-skill/" name="JobSkill">
            <IndexRoute component={JobSkill}/>
            <Route path="job-skill" name="JobSkill" component={JobSkill}/>
        </Route>
        <Route path="user/" name="User">
            <IndexRoute component={UserList}/>
            <Route path="user-list" name="User List" component={UserList}/>
            <Route path="user-create" name="User Form" component={UserForm}/>
        </Route>
        <Route path="skill/" name="Skill">
            <IndexRoute component={SkillList}/>
            <Route path="skill-list" name="Skill List" component={SkillList}/>
            <Route path="skill-create" name="Skill Form" component={SkillForm}/>
        </Route>
    </Route>
      <Route path="pages/" name="Pages" component={Simple}>
          <IndexRoute component={Login}/>
          <Route path="login" name="Login Pages" component={Login}/>
          <Route path="register" name="Register Pages" component={Register}/>
      </Route>
  </Router>
);
