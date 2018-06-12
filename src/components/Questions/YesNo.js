import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

const {Component} = React;

class YesNo extends Component {
    constructor( props ) {
        super( props );
    }

    render() {
        const question = this.props.question;

        const createMarkup = () => { return {__html: this.props.index + '. ' + question.preamble}; };

        const checkBoxes = <FormGroup row> {
            question.questionAnswers.map( ( answer, index ) => {
                return <FormControlLabel
                    key={answer.answerId}
                    control={
                        <Radio
                            checked={this.props.answer === answer.answerId}
                            onChange={() => this.props.onAnswerChange( answer.answerId )}
                            color='primary'
                        />
                    }
                    label={`${answer.answer}`}
                    />;
            } ) } </FormGroup>;

        return <div>
             <span dangerouslySetInnerHTML={createMarkup()} />
            { checkBoxes }
        </div>;
    }
}

export default YesNo;

