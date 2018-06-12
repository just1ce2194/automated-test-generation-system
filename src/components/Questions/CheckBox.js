import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBox from '@material-ui/core/Checkbox';

const {Component} = React;

class CheckboxQuestion extends Component {
    constructor( props ) {
        super( props );

        this.onAnswerChange = this.onAnswerChange.bind(this);
    }

    onAnswerChange( value ) {
        let answer = this.props.answer;

        if ( answer ) {
            if ( answer.indexOf( value ) >= 0 ) {
                answer.splice( answer.indexOf( value ), 1 );
            } else {
                answer.push( value );
            }
        } else {
            answer = [value];
        }
        this.props.onAnswerChange( answer );
    }

    render() {
        const question = this.props.question;

        const createMarkup = () => { return {__html: this.props.index + '. ' + question.preamble}; };

        const checkBoxes = <FormGroup row> {
            question.questionAnswers.map( ( answer, index ) => {
                const isChecked = this.props.answer &&
                    this.props.answer.indexOf( answer.answerId ) >= 0;

                return <FormControlLabel
                    key={answer.answerId}
                    control={
                        <CheckBox
                            checked={isChecked}
                            onChange={() => this.onAnswerChange( answer.answerId )}
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

export default CheckboxQuestion;

