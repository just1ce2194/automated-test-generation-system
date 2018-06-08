import React from 'react';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';

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

        const label = <span><b>{ this.props.index + '. ' }</b>{ `${question.preamble}` }</span>;

        const checkBoxes = <FormGroup row> {
            question.questionAnswers.map( ( answer, index ) => {
                const isChecked = this.props.answer &&
                    this.props.answer.indexOf( answer.answerId ) >= 0;

                return <FormControlLabel
                    key={answer.answerId}
                    control={
                        <Radio
                            checked={isChecked}
                            onChange={() => this.onAnswerChange( answer.answerId )}
                            color='primary'
                        />
                    }
                    label={`${answer.answer}`}
                    />;
            } ) } </FormGroup>;

        return <div>
            { label }
            { checkBoxes }
        </div>;
    }
}

export default CheckboxQuestion;

