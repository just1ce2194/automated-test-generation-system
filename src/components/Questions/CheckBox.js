import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const {Component} = React;

class CheckboxQuestion extends Component {
    constructor( props ) {
        super( props );

        this.onAnswerChange = this.onAnswerChange.bind(this);
    }

    onAnswerChange( event ) {
        const value = event.target.value;
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

        const label = <span>{ question.preamble }</span>;

        const checkBoxes = <FormGroup row> {
            question.variantsOfAnswers.map( ( item, index ) => {
                const isChecked = this.props.answer &&
                    this.props.answer.indexOf( item ) >= 0;

                return <FormControlLabel
                    key={index}
                    control={
                        <Checkbox
                            checked={isChecked}
                            onChange={this.onAnswerChange}
                            value={item}
                            color='primary'
                            />
                    }
                    label={item}
                    />;
            } ) } </FormGroup>;

        return <div>
            { label }
            { checkBoxes }
        </div>;
    }
}

export default CheckboxQuestion;

