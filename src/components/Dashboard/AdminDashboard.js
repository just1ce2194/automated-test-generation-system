import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import roles from '../../constants/Roles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const {Component} = React;

const CustomTableCell = withStyles(theme => ({
    head: {
      backgroundColor: 'grey',
      color: 'white',
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const styles = theme => ({
    root: {
        width: '100%',
        marginTop: 20,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

class AdminDashboard extends Component {
    constructor( props ) {
        super( props );
        this.state = {
            users: props.users,
        };
        this.onRoleChanged = this.onRoleChanged.bind( this );
        this.onUpdateUser = this.onUpdateUser.bind( this );
    }

    componentDidMount() {
        this.props.fetchUsers();
    };

    componentWillReceiveProps(props) {
        this.setState( {
            users: props.users,
        } );
    };

    onUpdateUser(user) {
        this.props.updateUser( user, this.props.fetchUsers );
    }

    onRoleChanged( userId, role ){
        const users = this.state.users.map( user => {
            if ( user.userId === userId  ) {
                user.roles = [ { name: role } ];
            }
            return user;
        } );

        this.setState( { users: users } )
    };

    render() {
        const users = this.state.users;

        const {classes} = this.props;

        const renderRole = ( user ) =>{
            const role = user.roles[0].name;

            return  <TextField
                id="select-currency"
                select
                className={classes.textField}
                value={role}
                onChange={(e) => this.onRoleChanged(user.userId, e.target.value)}
                helperText="Виберіть роль"
                margin="normal"
            >
                {Object.values(roles).map(role => (
                <MenuItem key={role} value={role}>
                    {role}
                </MenuItem>
                ))}
            </TextField>;
        };

        return <div className="contentWrapperAdmin"><Paper className={classes.root}>
            <Table className={classes.table}>
            <TableHead>
                <TableRow>
                <CustomTableCell>І'мя</CustomTableCell>
                <CustomTableCell>Прізвище</CustomTableCell>
                <CustomTableCell>Нікнейм</CustomTableCell>
                <CustomTableCell>Е-мейл</CustomTableCell>
                <CustomTableCell>Активний</CustomTableCell>
                <CustomTableCell>Роль</CustomTableCell>
                <CustomTableCell></CustomTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {users.map(user => {
                return (
                    <TableRow className={classes.row} key={user.userId}>
                    <CustomTableCell component="th" scope="row">
                        <span>{user.name}</span>
                    </CustomTableCell>
                    <CustomTableCell><span>{user.surname}</span></CustomTableCell>
                    <CustomTableCell><span>{user.username}</span></CustomTableCell>
                    <CustomTableCell><span>{user.email}</span></CustomTableCell>
                    <CustomTableCell><span>{user.isActive}</span></CustomTableCell>
                    <CustomTableCell>{renderRole(user)}</CustomTableCell>
                    <CustomTableCell>
                        <Button variant="contained" onClick={ (e) => this.onUpdateUser( user ) }>
                         Назначити
                        </Button></CustomTableCell>
                    </TableRow>
                );
                })}
            </TableBody>
            </Table>
        </Paper></div>;
    }
}

export default withStyles(styles)(AdminDashboard);

