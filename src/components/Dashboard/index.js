import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import { Link } from 'react-router-dom';
import StudentDashboard from './StudentDashboard';
import TeacherDashboard from './TeacherDashboard';
import AdminDashboard from './AdminDashboard';
import roles from '../../constants/Roles';

const {Component} = React;

class Dashboard extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        switch ( this.props.userRole ) {
            case roles.student:
                return <StudentDashboard {...this.props} />;
            case roles.teacher:
                return <TeacherDashboard {...this.props} />;
            case roles.admin:
                return <AdminDashboard {...this.props} />;
            default:
                return null;
        }
    }
}

export default Dashboard;

