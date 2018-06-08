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
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const {Component} = React;

class UserDashboard extends Component {
    constructor( props ) {
        super( props );

        this.renderTrainingTests = this.renderTrainingTests.bind(this);
    }

    componentWillMount() {
        this.props.fetchTrainingTests();
        this.props.fetchControlTests();
    }

    renderTrainingTests() {
        const {trainingTests} = this.props;

        return <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Тренувальні тести:</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
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
            </ExpansionPanelDetails>
        </ExpansionPanel>;
    }

    renderControlTests() {
        const {controlTests} = this.props;

        return <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Контрольні тести:</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
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
            </ExpansionPanelDetails>
        </ExpansionPanel>;
    }

    render() {
        return <div className="contentWrapper">
            <div className="dashboard">
                {
                    this.renderTrainingTests()
                }
                {
                    this.renderControlTests()
                }
            </div>
        </div>;
    }
}

export default UserDashboard;

