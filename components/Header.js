import React, { Component } from 'react';
import PropTypes from 'prop-types';
import upperBar from './images/upperBar.png';
import { StateBar } from './index';

const propTypes = {
  location: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object
};
const defaultProps = {
  location: {},
  match: {},
  history: {}
};

class MyComponent extends Component {
    state = {

    }
    render() {
        /* url 을 검사해서 savedstore 면 찜한가게, cart 면 장바구니, mypage  My배민이 출력되도록*/
        const testPathName = () => {
          let ss = /savedstore/;
          let ca = /cart/;
          let my = /mypage/;
          let menu = /menu/; //메뉴별 이름...
          let search = /search/;
          let review = /review/;
          let login = /login/;
          let event = /event/;
          let register = /register/;
          if(ss.test(this.props.location.pathname)){
            return "찜한가게";
          }
          if(ca.test(this.props.location.pathname)){
            return "장바구니";
          }
          if(my.test(this.props.location.pathname)){
            return "My배민";
          }
          if(review.test(this.props.location.pathname)){
            return "리뷰쓰기";
          }
          if(event.test(this.props.location.pathname)){
            return "이벤트";
          }
          if(register.test(this.props.location.pathname)){
            return "have to be vanish";
          }
          if(menu.test(this.props.location.pathname)){
            // console.log("you're in menu");
            const fullPath = this.props.location.pathname;
            let splicedPath = fullPath.split('/');
            let lastPath = splicedPath.pop();
            // console.log(lastPath);
            switch(lastPath) {
              case "kfood":
                return "한식"
              case "snack":
                return "분식"
              case "jfood":
                return "돈까스・회・일식"
              case "chicken":
                return "치킨"
              case "pizza":
                return "피자"
              case "cfood":
                return "중국집"
              case "jokbo":
                return "족발・보쌈"
              case "night":
                return "야식"
              case "soup":
                return "찜・탕"
              case "packed":
                return "도시락"
              case "cafe":
                return "카페・디저트"
              case "fastfood":
                return "패스트푸드"
              case "franchise":
                return "프랜차이즈"
              case "ranking":
                return "맛집랭킹"
              default:
                return "have to be vanish"
            }
          }
          if(search.test(this.props.location.pathname)){
            return "검색";
          }
          if(login.test(this.props.location.pathname)){
            return "have to be vanish";
          }
          return "경기 구리시 이문안로99번길 11-1";
        };
        const time = () => {
          const d = new Date();
          let h = d.getHours();
          if(h > 12){
            h = "오후 "+(h-12);
          } else {
            h = "오전 "+h;
          }
          let m = String(d.getMinutes());
          if(m.length < 2){
            m = '0'+m
          }
          return h+":"+m;
        }
        // console.log(this.props.location.pathname);
        return(
            <div className="header">
                <img src={upperBar} alt="upper_bar" className="imgTag"/>
                <p className="upperBarTime">{time()}</p>
                <StateBar stateBarTitle={testPathName()}
                          location={this.props.location}
                          match={this.props.match}
                          history={this.props.history}/>
            </div>
        );
    }
}

MyComponent.propTypes = propTypes;
MyComponent.defaultProps = defaultProps;

export default MyComponent;
