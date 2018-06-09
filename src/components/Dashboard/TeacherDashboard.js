import React from 'react';
import './styles.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FileUpload from '@material-ui/icons/FileUpload';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

const {Component} = React;

class TeacherDashboard extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            file: null,
            config: '',
            students: [],
            tests: [],
            testForStudentId: '',
            studentForTestId: '',
        };

        this.onChooseFileButtonClick = this.onChooseFileButtonClick.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onUploadClick = this.onUploadClick.bind(this);
        this.renderUploadConfigMenu = this.renderUploadConfigMenu.bind(this);
        this.renderConfigs = this.renderConfigs.bind(this);
        this.onConfigChange = this.onConfigChange.bind(this);
        this.onSubmitConfigSend = this.onSubmitConfigSend.bind(this);
        this.renderSetTestForStudentMenu = this.renderSetTestForStudentMenu.bind(this);
        this.onSetTestForStudent = this.onSetTestForStudent.bind(this);
    }

    componentDidMount() {
        this.props.fetchConfigs();
        this.props.fetchTestsForStudents( (tests) => this.setState({tests: tests} ));
        this.props.fetchStudents( (students) => this.setState({students: students} ) );
    }

    onChooseFileButtonClick() {
        document.getElementById('config-file-input').click();
    }

    onSetTestForStudent() {
        const testId = this.state.testForStudentId;
        const studentId = this.state.studentForTestId;

        const onSuccess = () => {
            this.setState({
                testForStudentId: '',
                studentForTestId: '',
            });
        };

        this.props.setTestForStudent( testId, studentId, onSuccess );
    }

    onFileChange( event ) {
        this.setState({
            file: event.target.files[0]
        });
    }

    onConfigChange( event ) {
        const config = event.target.value;

        this.setState({
            config: config,
        });
    }

    onSubmitConfigSend() {
        const config = this.state.config;

        const onSuccess = () => {
            this.setState({
                config: '',
            });
            this.props.fetchConfigs();

            this.props.fetchTestsForStudents( (tests) => this.setState({tests: tests} ));
            this.props.fetchStudents( (students) => this.setState({students: students} ) );
        };

        this.props.sendConfigForTestGeneration( config, onSuccess );
    }

    onUploadClick() {
        const onSuccess = () => {
            this.setState({
                file: null,
            });
            document.getElementById('config-file-input').value = null;
            this.props.fetchConfigs();
        };

        const onError = () => {
            this.setState({
                file: null,
            });
            document.getElementById('config-file-input').value = null;
            this.props.fetchConfigs();
        };

        this.props.uploadConfig( this.state.file, onSuccess, onError );
    }

    renderUploadConfigMenu() {
        return <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Завантажити конфігурацію на сервер</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                {
                    this.state.file === null ?
                        <div>
                            <Button variant="contained" component="span" onClick={this.onChooseFileButtonClick}>
                                Вибрати файл
                            </Button></div> :
                        <div>
                            <span className="padded">{ this.state.file.name }</span>
                            <Button variant="contained" color="default" onClick={this.onUploadClick}>
                                <FileUpload/>
                            </Button>
                        </div>
                }
            </ExpansionPanelDetails>
        </ExpansionPanel>;
    }
    

    renderSetTestForStudentMenu() {
        return <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Назначити тест студентам</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div>
                    <TextField
                        select
                        helperText="Виберіть студента"
                        value={this.state.studentForTestId}
                        onChange={(event) => this.setState({studentForTestId: event.target.value}) }
                        >
                        {
                            this.state.students.map( ( student ) => (
                                <MenuItem key={student.email} value={student.userId}>
                                    {student.email}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                    <TextField
                            select
                            helperText="Виберіть тест"
                            value={this.state.testForStudentId}
                            onChange={(event) => this.setState({testForStudentId: event.target.value}) }
                            >
                            {
                                this.state.tests.map( ( test ) => (
                                    <MenuItem key={test.testId} value={test.testId}>
                                        {test.testName}
                                    </MenuItem>
                                ))
                            }
                        </TextField>
                </div>
                <div style={{paddingLeft: 20}}>
                    <Button variant="contained" color="primary" onClick={this.onSetTestForStudent}>
                        Назначити
                    </Button>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>;
    }

    renderConfigs() {
        const configs = this.props.configs;

        return <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Згенерувати тест з вибраної конфігурації</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <div>
                    <TextField
                        select
                        helperText="Виберіть конфігурацію"
                        value={this.state.config}
                        onChange={this.onConfigChange}
                        >
                        {
                            configs.map( ( config ) => (
                                <MenuItem key={config.configurationId} value={config.configurationId}>
                                    {config.originalFileName}
                                </MenuItem>
                            ))
                        }
                    </TextField>
                </div>
                <br/>
                <div style={{paddingLeft: 50}}>
                    <Button variant="contained" color="primary" onClick={this.onSubmitConfigSend}>
                        Згенерувати тест
                    </Button>
                </div>
            </ExpansionPanelDetails>
        </ExpansionPanel>;
    }

    render() {
        return <div className="contentWrapper">
            <div className="dashboard">
                { this.renderUploadConfigMenu() }
                { this.renderConfigs() }
                { this.renderSetTestForStudentMenu() }
                <input id="config-file-input" type="file" style={{display: 'none'}}
                    onChange={this.onFileChange}/>
            </div>
        </div>;
    }
}

export default TeacherDashboard;

