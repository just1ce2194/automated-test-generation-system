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

const {Component} = React;

class Dashboard extends Component {
    constructor( props ) {
        super( props );
    }

    componentWillMount() {
        this.props.fetchTrainingTests();
        this.props.fetchControlTests();
    }

    render() {
        const {trainingTests, controlTests} = this.props;

        return <div className="contentWrapper">
            <div className="dashboard">
                {
                    trainingTests.length !==0 ? <div>
                        <Typography variant="title">
                            Тренувальні тести:
                        </Typography>
                        <List component="nav">
                            {
                                trainingTests.map( ( test ) => {
                                    return <Link
                                        to={'/variant/' + test.testId}
                                        key={test.testId}>
                                        <ListItem
                                            button>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={test.testName} />
                                        </ListItem>
                                    </Link>;
                                } )
                            }
                        </List>
                    </div> : null
                }
                {
                    controlTests.length !==0 ? <div>
                        <Typography variant="title">
                            Контрольні тести:
                        </Typography>
                        <List component="nav">
                            {
                                controlTests.map( ( test ) => {
                                    return <Link
                                        to={'/variant/' + test.testId}
                                        key={test.testId}>
                                        <ListItem
                                            button>
                                            <ListItemIcon>
                                                <InboxIcon />
                                            </ListItemIcon>
                                            <ListItemText primary={test.testName} />
                                        </ListItem>
                                    </Link>;
                                } )
                            }
                        </List>
                    </div> : null
                }
            </div>
        </div>;
    }
}

Dashboard.propTypes = {
    variants: PropTypes.array,
};

export default Dashboard;

