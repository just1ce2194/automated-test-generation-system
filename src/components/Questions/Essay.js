import React from 'react';
import TinyMCE from 'react-tinymce';

const {Component} = React;

class Essay extends Component {
    constructor( props ) {
        super( props );

        this.onAnswerChange = this.onAnswerChange.bind(this);
    }

    onAnswerChange( event ) {
        this.props.onAnswerChange( event.target.getContent() );
    }

    render() {
        const question = this.props.question;
        const label = question.preamble;

        return <div>
            {label}
            <br/> <br/>
            <TinyMCE
                config={{
                plugins: 'autolink link image lists print preview',
                toolbar: 'undo redo | bold italic | alignleft aligncenter alignright'}}
                onChange={this.onAnswerChange}
            />
        </div>;
    }
}

export default Essay;

