import React from 'react';
import { Redirect, Router, Switch } from 'react-router-dom';

import { history } from '../utils/history';
import ClassView from "../views/classview/ClassView";
import CorrectView from "../views/correctview/CorrectView";
import HomeView from '../views/homeview/HomeView';
import HomeworkView from "../views/homeworkview/HomeworkView";
import LoginView from '../views/loginview/LoginView';
import RegisterView from '../views/registerview/RegisterView';
import ReleaseView from "../views/releaseview/ReleaseView";
// import LoginRouter from './LoginRouter';
import PrivateRouter from './PrivateRouter';
import TeacherView from "../views/teacherview/TeacherView";

class BasicRouter extends React.Component {
  constructor(props) {
    super(props);

    history.listen((location, action) => {
      // clear alert on location change
      console.log(location, action);
    });
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <PrivateRouter exact path="/teacher" component={TeacherView} />
          <PrivateRouter exact path="/register" component={RegisterView} />
          <PrivateRouter exact path="/" component={HomeView} />
          <PrivateRouter exact path="/class" component={ClassView} />
          <PrivateRouter exact path="/homework" component={HomeworkView} />
          <PrivateRouter exact path="/correct" component={CorrectView} />
          <PrivateRouter exact path="/release" component={ReleaseView} />
          <PrivateRouter exact path="/login" component={LoginView} />
          <Redirect from="/*" to="/" />
        </Switch>
      </Router>
    );
  }
}

export default BasicRouter;
