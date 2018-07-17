import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BlankView } from '../components';
// import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const propTypes = {
};
const defaultProps = {
};
// Redux state 사용예정
// this.props.(...) 로 사용자의 기록 받아올 예쩡
// this.props.savedstore, this.props.instancePay, this.props.call
class SavedStore extends Component {
    componentDidMount() {
      // section 에 header, footer 영역 만큼 marin 값 주기
      // **section 의 높이가 몇 보다 작으면 프로그래밍적으로 높이 설정하기
      setTimeout(()=>{
        const headerHeight = $('.header').height();
        const headerHeigthPixel = headerHeight+"px";
        const footerHeight = $('.footer').height();
        const documentHeight = $(document).height();
        const sectionShouldHeigth = documentHeight-headerHeight-footerHeight+"px";
        $('.section').css('margin-top', headerHeigthPixel);
        // **리덕스 state 로 전달받은 값이 없을 경우에만 실행되도록 설정
        // **아래 조건문 더 수정할 필요 있음...
        if(this.props.records === undefined || this.props.records.length === 0){
          $('.section').css('height', sectionShouldHeigth);
        };
      },0);
    }
    render() {
      // console.log($('.section').css('height'))
      const view = (path) => {
        switch(path){
          case "/savedstore":
            if(this.props.savedStore === undefined || this.props.savedStore.length === 0){
              return <BlankView blankNum="1" image="https://ucarecdn.com/dae27b1f-6182-430a-b470-ae19646c6d32/savedBlank.png"/>
            }
            break;
          case "/savedstore/instancepay":
            if(this.props.instancePay === undefined || this.props.instancePay.length === 0){
              return <BlankView blankNum="2" image="https://ucarecdn.com/507ead1a-cec1-44e5-b1c2-2e8b1a1c4a48/defaultBlank.png"/>
            }
            break;
          case "/savedstore/call":
            if(this.props.call === undefined || this.props.call.length === 0){
              return <BlankView blankNum="3" image="https://ucarecdn.com/507ead1a-cec1-44e5-b1c2-2e8b1a1c4a48/defaultBlank.png"/>
            }
            break;
        }
      };
      return(
          <div className="section">
            {view(this.props.location.pathname)}
          </div>
      );
    }
}

SavedStore.propTypes = propTypes;
SavedStore.defaultProps = defaultProps;

export default SavedStore;
