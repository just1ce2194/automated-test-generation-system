import {Dashboard} from '../components';
import {connect} from 'react-redux';

import * as DashboardActions from '../actions/DashboardActions';

const mapStateToProps = ( state ) => {
    return ( {
        variants: state.dashboard.variants,
    } );
};

const mapDispatchToProps = ( dispatch, ownProps ) => {
    return {
        fetchVariantsList: () => {
            dispatch( DashboardActions.fetchVariants() );
        },
    };
};

const DashboardContainer = connect( mapStateToProps,
    mapDispatchToProps )( Dashboard );

export default DashboardContainer;
