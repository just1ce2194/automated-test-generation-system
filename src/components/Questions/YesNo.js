import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

const {Component} = React;

class YesNo extends Component {
    constructor( props ) {
        super( props );

        this.onAnswerChange = this.onAnswerChange.bind(this);
    }

    onAnswerChange( event ) {
        const value = event.target.value;
        this.props.onAnswerChange( value );
    }

    render() {
        const question = this.props.question;

        const label = <span>{ question.preamble }</span>;

        const checkBoxes = <FormGroup row> {
            question.variantsOfAnswers.map( ( item, index ) => {
                return <FormControlLabel
                    key={index}
                    control={
                        <Checkbox
                        checked={this.props.answer === item}
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

export default YesNo;

