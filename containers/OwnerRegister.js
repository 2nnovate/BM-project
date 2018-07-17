import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { RegisterStore } from '../components';

const propTypes = {
};
const defaultProps = {
};

class Register extends Component {
    state = {

    }
    render() {
        return(
            <div>
              <h3  className="hanna center">
                사장님 페이지
              </h3>
              <RegisterStore />
            </div>
        );
    }
}

Register.propTypes = propTypes;
Register.defaultProps = defaultProps;

export default Register;
