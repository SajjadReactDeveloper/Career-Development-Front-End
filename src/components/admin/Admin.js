import React from 'react'
import AddJob from './AdminPanel/AddJobs/AddJob';
import AdminPanel from './AdminPanel/AdminPanel';
import { Switch, Route } from 'react-router-dom';
import AddJobMain from './AdminPanel/AddJobs/AddJobMain';
import AddTestMain from './AdminPanel/EntryTest/AddTestMain';
import AddPaperMain from './AdminPanel/PastPapers/AddPaperMain';
import LearningDashboard from './AdminPanel/Learning Material/LearningDashboard';
import AddFileMain from './AdminPanel/Learning Material/AddFileMain';
import AddVideoMain from './AdminPanel/Learning Material/AddVideoMain';
import ProfileMain from '../user/ProfileMain';
import Login from '../user/Screens/Login'
import ViewApplicantMain from '../../components/admin/AdminPanel/ViewApplicants/ViewApplicantMain'
import ApplicantDetailsMain from './AdminPanel/ViewApplicants/ApplicantDetailsMain';

export default function Admin() {
  return (
    <Switch>
    <Route path="/" exact component={AdminPanel} />
    <Route path="/addJob" exact component={AddJobMain} />
    <Route path="/addTest" exact component={AddTestMain} />
    <Route path="/addPaper" exact component={AddPaperMain} />
    <Route path="/addMaterial" exact component={LearningDashboard} />
    <Route path="/addFile" exact component={AddFileMain} />
    <Route path="/addVideo" exact component={AddVideoMain} />
    <Route path="/profile" exact component={ProfileMain} />
    <Route path="/login" exact component={Login} />
    <Route path="/viewApplicants" exact component={ViewApplicantMain} />
    <Route path="/applicantDetails" exact component={ApplicantDetailsMain} />
    </Switch>
  )
}
