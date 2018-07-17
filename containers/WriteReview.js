import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { WriteReviewView } from '../components'

const propTypes = {
};
const defaultProps = {
};

class WriteReview extends Component {
    state = {

    }
    componentDidMount(){
      $('.do-nicescrol').css('display', 'none');
      const headerHeight = $('.header').height();
      const headerHeigthPixel = headerHeight+"px";
      $('.section').css('margin-top', headerHeigthPixel);
    }
    componentWillUnmount() {
      $('.do-nicescrol').css('display', 'block');
    }
    render() {
      $('.statebar div.center').css('margin-bottom', '.8rem');
        return(
            <div className="section">
              <WriteReviewView />
            </div>
        );
    }
}

WriteReview.propTypes = propTypes;
WriteReview.defaultProps = defaultProps;

export default WriteReview;
