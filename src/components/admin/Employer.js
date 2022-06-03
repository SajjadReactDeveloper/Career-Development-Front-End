import React from 'react';
import { Switch, Route } from 'react-router-dom';
import EmployerDashboard from './EmployerDashboard';
import AddJob from '../AdminPanel/AddJob';
import ViewJobs from './AdminPanel/ViewJobs/ViewJobs';
import ViewApplicants from './AdminPanel/ViewApplicants/ViewApplicants';
import ApplicantDetailsMain from './AdminPanel/ViewApplicants/ApplicantDetailsMain';
import AddJobMain from './AdminPanel/AddJobs/AddJobMain';
import ViewApplicantMain from './AdminPanel/ViewApplicants/ViewApplicantMain';
import EmployerProfileMain from '../user/Navbar/EmployerProfileMain';

export default function User() {
  return (
    <Switch>
        <Route path="/" exact component={EmployerDashboard}/>
        <Route path="/addJob" exact component={AddJobMain}/>
        <Route path="/viewApplicants" exact component={ViewApplicantMain}/>
        <Route path="/applicantDetails" exact component={ApplicantDetailsMain}/>
        <Route path="/profile" exact component={EmployerProfileMain}/>
    </Switch>
  )
}
