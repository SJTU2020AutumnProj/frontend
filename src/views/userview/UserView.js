import React from 'react';

import MyFooter from '../../components/footer/MyFooter';
import LoginedHeader from '../../components/loginedheader/LoginedHeader';
import UserHeader from '../../components/userheader/UserHeader';
import {UserProfile} from '../../components/userprofile/UserProfile';
import {NotificationList} from "../../components/notificationlist/NotificationList";
import {withRouter} from "react-router-dom";

class UserView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            curSection: 1,
        };
        console.log("userview");
    }

    menuCallback = (key) => {
        switch (key) {
            case 'Message':
                this.setState({curSection: 0});
                break;
            case 'Profile':
                this.setState({curSection: 1});
                break;
            case 'File':
                this.setState({curSection: 2});
                break;
            case 'Setting':
                this.setState({curSection: 3});
                break;
            case 'UserManage':
                this.setState({curSection: 4});
                break;
            default:
                this.setState({curSection: 3});
                console.log("error!");
                break;
        }
    };

    render() {
        const curSection = this.state.curSection;
        const content = curSection === 0 ? <NotificationList/> : curSection === 1 ?
            <UserProfile/> : curSection === 2 ? <></> : curSection === 3 ? <></> : <></>;
        return (
            <div className="teacher-view">
                <LoginedHeader/>
                <UserHeader menuCallback={this.menuCallback}/>
                <div>{content}</div>
                <MyFooter/>
            </div>
        );
    }
}

export default withRouter(UserView);
