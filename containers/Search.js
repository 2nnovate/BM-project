import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {RealSearchBar} from '../components'

const propTypes = {
};
const defaultProps = {
};

class Search extends Component {
    state = {

    }
    componentDidMount() {
      setTimeout(()=>{
        const headerHeight = $('.header').height();
        const headerHeigthPixel = headerHeight+"px";
        $('.section').css('margin-top', headerHeigthPixel);
        $('.statebar').css('border-bottom', '0');
        $('.footer').css('display', 'none');
      },0);
    }
    componentWillUnmount() {
      $('.statebar').css('border-bottom', '1px solid #e5e5e5');
      $('.footer').css('display', 'block');
    }
    render() {
        return(
            <div className="section">
              <RealSearchBar />
            </div>
        );
    }
}

Search.propTypes = propTypes;
Search.defaultProps = defaultProps;

export default Search;
