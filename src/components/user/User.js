import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './Screens/Login';
import Signup from './Screens/Signup';
import ForgotPassword from './Screens/ForgotPassword';
import AdminPanel from '../admin/AdminPanel/AdminPanel';
import UploadAttachments from '../admin/AdminPanel/UploadAttachments/UploadAttachments';
import ViewApplicants from '../admin/AdminPanel/ViewApplicants/ViewApplicants';
import ApplicantsDetails from '../admin/AdminPanel/ViewApplicants/ApplicantsDetails';
import AddTest from '../admin/AdminPanel/EntryTest/AddTest';
import ViewTest from '../admin/AdminPanel/EntryTest/ViewTest';
import AddFile from '../admin/AdminPanel/Learning Material/AddFile';
import AddVideo from '../admin/AdminPanel/Learning Material/AddVideo';
import ViewVideos from '../admin/AdminPanel/Learning Material/ViewVideos';
import VideoDetail from '../admin/AdminPanel/Learning Material/VideoDetail';
import ViewFiles from '../admin/AdminPanel/UploadAttachments/ViewFiles';
import ViewFile from '../admin/AdminPanel/Learning Material/ViewFiles';
import AddPaper from '../admin/AdminPanel/PastPapers/AddPaper';
import ViewPaper from '../admin/AdminPanel/PastPapers/ViewPaper';
import Navbar from './Navbar/Navbar';
import Sidebar from './Navbar/Sidebar';
import AdminSidebar from './Navbar/AdminSidebar';
import DiscussionForm from './Discussion/DiscussionForm';
import ViewDiscussion from './Discussion/ViewDiscussion';
import DiscussionDetail from './Discussion/DiscussionDetail';
import Profile from './Profile';
import AddJob from '../AdminPanel/AddJob';
import UserDashboard from '../UserDashboard';
import UserProfileMain from '../../components/user/Screens/UserProfileMain';
import ViewTestMain from '../admin/AdminPanel/EntryTest/ViewTestMain';
import ViewPaperMain from '../admin/AdminPanel/PastPapers/ViewPaperMain';
import ViewMaterialMain from '../admin/AdminPanel/Learning Material/ViewMaterialMain';
import ViewFileMain from '../admin/AdminPanel/Learning Material/ViewFileMain';
import ViewVideosMain from '../admin/AdminPanel/Learning Material/ViewVideosMain';
import ViewVideoDetailMain from '../admin/AdminPanel/Learning Material/ViewVideoDetailMain';
import ViewJobMain from '../admin/AdminPanel/ViewJobs/ViewJobMain';
import AddDiscussionMain from './Discussion/AddDiscussionMain';
import ViewDiscussionMain from './Discussion/ViewDiscussionMain';
import DiscussionDetailMain from './Discussion/DiscussionDetailMain';
import ViewTestMainScreen from '../admin/AdminPanel/EntryTest/ViewTestMainScreen';

export default function User() {
  return (
    <Switch>
        <Route path="/" exact component={UserDashboard}/>
        <Route path="/admin/AddJob" exact component={AddJob}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
        <Route path="/forgot" exact component={ForgotPassword}/>
        <Route path="/upload" exact component={UploadAttachments}/>
        <Route path="/viewApplicants" exact component={ViewApplicants}/>
        <Route path="/applicantDetails" exact component={ApplicantsDetails}/>
        <Route path="/addTest" exact component={AddTest}/>
        <Route path="/viewTest" exact component={ViewTestMainScreen}/>
        <Route path="/viewTests" exact component={ViewTest}/>
        <Route path="/addFile" exact component={AddFile}/>
        <Route path="/addVideo" exact component={AddVideo}/>
        <Route path="/viewVideo" exact component={ViewVideosMain}/>
        <Route path="/videoDetail" exact component={ViewVideoDetailMain}/>
        <Route path="/viewFile" exact component={ViewFileMain}/>
        <Route path="/viewFile" exact component={ViewFile}/>
        <Route path="/addPaper" exact component={AddPaper}/>
        <Route path="/viewPaper" exact component={ViewPaperMain}/>
        <Route path="/navbar" exact component={Navbar}/>
        <Route path="/sidebar" exact component={Sidebar}/>
        <Route path="/admin/sidebar" exact component={AdminSidebar}/>
        <Route path="/discussion" exact component={AddDiscussionMain}/>
        <Route path="/viewDiscussion" exact component={ViewDiscussionMain}/>
        <Route path="/discussionDetail" exact component={DiscussionDetailMain}/>
        <Route path="/profile" exact component={UserProfileMain}/>
        <Route path="/viewMaterial" exact component={ViewMaterialMain}/>
        <Route path="/viewJobs" exact component={ViewJobMain}/>
    </Switch>
  )
}
