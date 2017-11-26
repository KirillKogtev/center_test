import React, {Component} from 'react';
import {connect} from 'react-redux';
import App from './App';
import {countNewsChange, countPageChange, sortNewsChange} from "./actions";

class AppContainer extends Component {
    render() {
        return (
            <App {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => (state);
const mapDispatchToProps = (dispatch) => ({
    countNewsChange: (val) => dispatch(countNewsChange(val)),
    countPageChange: (val) => dispatch(countPageChange(val)),
    sortNewsChange: (val) => dispatch(sortNewsChange(val)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);