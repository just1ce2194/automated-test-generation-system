import {Variant} from '../components';
import {connect} from 'react-redux';

import * as VariantActions from '../actions/VariantActions';

const mapStateToProps = ( state ) => {
    return ( {
        variant: state.variant,
    } );
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        fetchVariant: () => {
            dispatch( VariantActions.fetchVariant() );
        },
        onAnswerChange: ( questionId, answer ) => {
            dispatch( VariantActions.answerChanged( questionId, answer ) );
        },
    };
};

const VariantContainer = connect( mapStateToProps,
    mapDispatchToProps )( Variant );

export default VariantContainer;
