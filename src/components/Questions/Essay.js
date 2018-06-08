import React from 'react';
import TinyMCE from 'react-tinymce';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const {Component} = React;

class Essay extends Component {
    constructor( props ) {
        super( props );

        this.onAnswerChange = this.onAnswerChange.bind(this);
        this.onSwithChange = this.onSwithChange.bind(this);

        this.state = {
            isRich: false,
            value: '',
        };
    }

    onAnswerChange( value ) {
        this.props.onAnswerChange( value );
        this.setState( {value: value} );
    }
    onSwithChange() {
        this.setState( {isRich: !this.state.isRich} );
    }

    render() {
        const question = this.props.question;
        const label = <span><b>{ this.props.index + '. ' }</b>{ `${question.preamble}` }</span>;

        const tinymceEditor = () => <TinyMCE
                config={{
                plugins: 'autolink link image lists print preview',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'}}
                onChange={(e) => this.onAnswerChange(e.target.getContent())}
                content={this.state.value}
            />;

        const textArea = () => <textarea
            value={this.state.value}
            onChange={(e) => this.onAnswerChange(e.target.value)}
            rows={4} cols={50}/>;

        return <div>
            <div>{label}</div>
            <Switch checked={this.state.isRich} onChange={this.onSwithChange} />
            <div>
                { this.state.isRich ? tinymceEditor() : textArea() }
            </div>
        </div>;
    }
}

export default Essay;

