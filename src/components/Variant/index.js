import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import {RadioButton, YesNo, CheckBox, Essay} from '../Questions';
import './styles.scss';

const {Component} = React;

class Variant extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidMount() {
        this.props.fetchVariant();
    }

    onAnswerChange( questionId, answer ) {
        this.props.onAnswerChange( questionId, answer );
    }

    renderQuestion( question, questionIndex ) {
        const onAnswerChange = ( answer ) =>
            this.onAnswerChange( questionIndex, answer );

        const answer = this.props.variant.answers[questionIndex];

        switch ( question['@type'] ) {
            case 'RadioButtonQuestion':
                return <RadioButton
                    answer={answer}
                    onAnswerChange={onAnswerChange}
                    question={question} />;
            case 'YesNoQuestion':
                return <YesNo
                    answer={answer}
                    onAnswerChange={onAnswerChange}
                    question={question} />;
            case 'CheckboxQuestion':
                return <CheckBox
                    answer={answer}
                    onAnswerChange={onAnswerChange}
                    question={question} />;
            case 'EssayQuestion':
                return <Essay
                    answer={answer}
                    onAnswerChange={onAnswerChange}
                    question={question} />;
            default:
                return null;
        }
    }

    render() {
        const questions = this.props.variant.questions;
        const renderedQuestions = questions.map( ( item, index ) => {
            return <div
                key={index}
                className="question">
                { this.renderQuestion( item, index ) }
                { ( index < questions.length ) ? <Divider/> : null }
            </div>;
        });

        return <div className="questionList">
            { renderedQuestions }
        </div>;
    }
}

Variant.propTypes = {
    variant: PropTypes.object,
};

export default Variant;

