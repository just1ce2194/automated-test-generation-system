import {Variant} from '../components';
import {connect} from 'react-redux';

import * as VariantActions from '../actions/VariantActions';

const mapStateToProps = ( state ) => {
    return ( {
        variant: state.variant,
    } );
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    const {testId} = ownProps;
    return {
        fetchVariant: () => {
            dispatch( VariantActions.fetchVariant(testId) );
        },
        onAnswerChange: ( questionId, answer ) => {
            dispatch( VariantActions.answerChanged( questionId, answer ) );
        },
    };
};

const VariantContainer = connect( mapStateToProps,
    mapDispatchToProps )( Variant );

export default VariantContainer;
