import React from 'react';
import PropTypes from 'prop-types';
import Divider from '@material-ui/core/Divider';
import {RadioButton, YesNo, CheckBox, Essay} from '../Questions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import './styles.scss';

const {Component} = React;

class Variant extends Component {
    constructor( props ) {
        super( props );

        this.onVariantSubmit = this.onVariantSubmit.bind(this);
        this.onAnswerChange = this.onAnswerChange.bind(this);
        this.renderResult = this.renderResult.bind(this);
    }

    componentDidMount() {
        this.props.fetchVariant();
    }

    componentWillMount() {
        this.props.clearVariant();
    }

    onAnswerChange( questionId, answer ) {
        this.props.onAnswerChange( questionId, answer );
    }

    onVariantSubmit() {
        this.props.submitVariant(this.props.variant);
    }

    renderResult() {
        const result = this.props.variant.result;

        return <div className="variant">
            <Typography variant="title" color="inherit">
                Поздоровляємо! Ви закінчили тест
            </Typography>
            <Typography color="inherit">
                Ваша оцінка - {result.points} з {result.total} балів.
            </Typography>
        </div>;
    }

    renderQuestion( question, index ) {
        const onAnswerChange = ( answer ) =>
            this.onAnswerChange( question.questionId, answer );

        const answer = this.props.variant.answers[question.questionId];

        switch ( question['questionType'] ) {
            case 'RADIOBUTTON':
                return <RadioButton
                    answer={answer}
                    onAnswerChange={onAnswerChange}
                    question={question} index={index} />;
            case 'YES_NO':
                return <YesNo
                    answer={answer}
                    onAnswerChange={onAnswerChange}
                    question={question} index={index} />;
            case 'CHECKBOX':
                return <CheckBox
                    answer={answer}
                    onAnswerChange={onAnswerChange}
                    question={question} index={index} />;
            case 'ESSAY':
                return <Essay
                    answer={answer}
                    onAnswerChange={onAnswerChange}
                    question={question} index={index} />;
            default:
                return null;
        }
    }

    render() {
        if ( !Boolean( this.props.variant.id ) ) return null;

        if ( Object.keys(this.props.variant.result).length !== 0 ) {
            return this.renderResult();
        }

        const label = <Typography variant="title">
            Варіант - { this.props.variant.name }
            </Typography>;
        const questions = this.props.variant.questions;
        const renderedQuestions = questions.map( ( q, index ) => {
            return <div
                key={q.questionId}
                className="question">
                { this.renderQuestion( q, index + 1 ) }
                { ( index < questions.length ) ? <Divider/> : null }
            </div>;
        });

        return <div className="variant">
            {label}
            <div className="questionList">
                { renderedQuestions }
            </div>
            <div className="submitButton">
                <Button variant="contained" color="primary" onClick={this.onVariantSubmit}>
                    Відправити рішення
                </Button>
            </div>
        </div>;
    }
}

Variant.propTypes = {
    variant: PropTypes.object,
};

export default Variant;

