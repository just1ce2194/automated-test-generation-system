import React from 'react';
import './styles.scss';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FileUpload from '@material-ui/icons/FileUpload';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const {Component} = React;

class TeacherDashboard extends Component {
    constructor( props ) {
        super( props );

        this.state = {
            file: null,
        };
        this.onChooseFileButtonClick = this.onChooseFileButtonClick.bind(this);
        this.onFileChange = this.onFileChange.bind(this);
        this.onUploadClick = this.onUploadClick.bind(this);
        this.renderUploadConfigMenu = this.renderUploadConfigMenu.bind(this);
        this.renderSetStudentsMenu = this.renderSetStudentsMenu.bind(this);
    }

    onChooseFileButtonClick() {
        document.getElementById('config-file-input').click();
    }

    onFileChange( event ) {
        this.setState({
            file: event.target.files[0]
        });
    }

    onUploadClick() {
        const onSuccess = () => {
            this.setState({
                file: null,
            });
        };

        const onError = () => {
            this.setState({
                file: null,
            });
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

    renderSetStudentsMenu() {
        return <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography >Назначити тест студентам</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                empty
            </ExpansionPanelDetails>
        </ExpansionPanel>;
    }

    render() {
       return <div className="contentWrapper">
            <div className="dashboard">
                { this.renderUploadConfigMenu() }
                { this.renderSetStudentsMenu() }
                <input id="config-file-input" type="file" style={{display: 'none'}}
                    onChange={this.onFileChange}/>
            </div>
        </div>;
    }
}

export default TeacherDashboard;

