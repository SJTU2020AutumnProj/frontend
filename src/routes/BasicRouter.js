import React from 'react';
import { Redirect, HashRouter, Switch } from 'react-router-dom';

// import { history } from '../utils/history';
import AddClassView from '../views/addclassview/AddClassView';
// import ClassView from '../views/classview/ClassView';

import CorrectView from '../views/correctview/CorrectView';
import CourseListView from '../views/courselistview/ClassView';
import HomeView from '../views/homeview/HomeView';
import HomeworkView from '../views/homeworkview/HomeworkView';
import LoginView from '../views/loginview/LoginView';
import NotificationView from '../views/notificationview/NotificationView';
import RegisterView from '../views/registerview/RegisterView';
import ReleaseView from '../views/releaseview/ReleaseView';
import TeacherView from '../views/teacherview/TeacherView';
import UserView from '../views/userview/UserView';
import PrivateRouter from './PrivateRouter';
import RichEditor from "../components/richeditor/RichEditor";

class BasicRouter extends React.Component {
  constructor(props) {
    super(props);

    // history.listen((location, action) => {
    //   // clear alert on location change
    //   console.log(location, action);
    // });
  }

  render() {
    return (
      <HashRouter>
        <Switch>
          <PrivateRouter exact path="/" component={HomeView} />
          <PrivateRouter exact path="/login" component={LoginView} />
          <PrivateRouter exact path="/teacher" component={TeacherView} />
          <PrivateRouter exact path="/register" component={RegisterView} />
          <PrivateRouter exact path="/courses" component={CourseListView} />
          <PrivateRouter exact path="/homework" component={HomeworkView} />
          <PrivateRouter exact path="/correct" component={CorrectView} />
          <PrivateRouter exact path="/release" component={ReleaseView} />
          <PrivateRouter exact path="/user" component={UserView} />
          <PrivateRouter exact path="/rich" component={RichEditor} />
          <PrivateRouter exact path="/addclass" component={AddClassView} />
          <PrivateRouter exact path="/notification" component = {NotificationView}/>
          <Redirect from="/*" to="/" />
        </Switch>
      </HashRouter>
    );
  }
}

export default BasicRouter;
