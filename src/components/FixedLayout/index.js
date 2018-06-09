import React from 'react';
import './styles.scss';

const {Component} = React;

class FixedLayout extends Component {
    constructor( props ) {
        super( props );

        this.wrapper = React.createRef();
    }

    componentDidMount() {
        const {top, right} = this.props;

        this.wrapper.current.style.position = 'fixed';
        this.wrapper.current.style.top = top + 'px';
        this.wrapper.current.style.right = right + 'px';
        this.wrapper.current.style.zIndex = 9999;
    }

    render() {
       return <div ref={this.wrapper}>
                { this.props.children }
            </div>;
    }
}

export default FixedLayout;

