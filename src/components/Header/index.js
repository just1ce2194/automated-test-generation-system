import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from 'react-router-dom';

const title = 'Система автоматизовної генерації тестів';

const {Component} = React;

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

const HomeIcon = (props) => {
    return (
        <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
        </SvgIcon>
    );
};

class Header extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            anchorEl: null,
        };

        this.handleMenu = this.handleMenu.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleMenu(event) {
        this.setState({anchorEl: event.currentTarget});
    }

    handleClose() {
        this.setState({anchorEl: null});
    }

    onDashboardIconClick() {
        window.location.href = '/dashboard';
    }

    render() {
        const {classes} = this.props;
        const visibleUser = this.props.user;

        const anchorEl = this.state.anchorEl;
        const isMenuOpen = Boolean(anchorEl);

        const accountInfoBar = visibleUser.loggedIn ?
            <div>
                <IconButton
                    onClick={this.handleMenu}
                    color="inherit"
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true">
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={isMenuOpen}
                    onClose={this.handleClose}>
                    <MenuItem onClick={this.props.logOut}>Вийти</MenuItem>
                </Menu>
            </div> :
            // TODO add event redirect to login page
            <Button color="inherit">Ввійти</Button>;

        return <AppBar position="static">
            <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                <Link to={'/dashboard'}>
                    <HomeIcon/>
                </Link>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
                {title}
            </Typography>
            {
                visibleUser.loggedIn ?
                <Typography variant="title" color="inherit">
                    {visibleUser.name}
                </Typography> : null
            }
            {accountInfoBar}
            </Toolbar>
        </AppBar>;
    }
}

Header.propTypes = {};

export default withStyles(styles)(Header);


