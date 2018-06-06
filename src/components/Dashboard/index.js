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

    componentDidMount() {
        this.props.fetchVariantsList();
    }

    render() {
        const variants = this.props.variants;

        return <div className="contentWrapper">
            <div className="dashboard">
                <Typography variant="title">
                    Доступні тести:
                </Typography>
                <List component="nav">
                    {
                        variants.map( ( variant, index ) => {
                            return <Link
                                to={'/variant/' + variant}
                                key={index}>
                                <ListItem
                                    button>
                                    <ListItemIcon>
                                        <InboxIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={variant} />
                                </ListItem>
                                </Link>;
                        } )
                    }
                </List>
            </div>
        </div>;
    }
}

Dashboard.propTypes = {
    variants: PropTypes.array,
};

export default Dashboard;

