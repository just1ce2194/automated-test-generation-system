import React from 'react';
import PropTypes from 'prop-types';

const {Component} = React;

// import styles from './ControlPanel.css';

class VariantsList extends Component {
    constructor( props ) {
        super( props );
    }

    componentDidMount() {
        this.props.fetchVariantsList();
    }

    render() {
        const variants = this.props.variants;

        return <div>
            {
                variants.map( ( item ) => {
                    return <span>{item}</span>;
                } )
            }
        </div>;
    }
}

VariantsList.propTypes = {
    variants: PropTypes.array,
};

export default VariantsList;

