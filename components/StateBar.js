import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  stateBarTitle: PropTypes.string,
  location: PropTypes.object,
  match: PropTypes.object,
  history: PropTypes.object
};
const defaultProps = {
  stateBarTitle: "No title",
  location: {},
  match: {},
  history: {}
};

class StateBar extends Component {
    componentDidMount() {
      $(document).ready(function(){
        $('.sidenav').sidenav();
      });
    }
    // savedstore/... 에 따라 스타일 변경(볼드, 바텀보더)**
    render() {
      let menu = /menu/;
      if(menu.test(this.props.location.pathname)){
        // console.log('shold delete margin bottom')
        $('div.center').css('margin-bottom', '0');
      }else{
        $('div.center').css('margin-bottom', '.8rem');
      }

      const menus = [{name:"한식", path:"/menu/kfood", test:"kfood"}, {name:"분식", path:"/menu/snack", test:"snack"}, {name:"돈까스・회・일식", path:"/menu/jfood", test:"jfood"},
      {name:"치킨", path:"/menu/chicken", test:"chicken"}, {name:"피자", path:"/menu/pizza", test:"pizza"}, {name:"중국집", path:"/menu/cfood", test:"cfood"},
      {name:"족발・보쌈", path:"/menu/jokbo", test:"jokbo"}, {name:"야식", path:"/menu/night", test:"night"}, {name:"찜・탕", path:"/menu/soup", test:"soup"},
      {name:"도시락", path:"/menu/packed", test:"packed"}, {name:"카페・디저트", path:"/menu/cafe", test:"cafe"}, {name:"패스트푸드", path:"/menu/fastfood", test:"fastfood"},
      {name:"프랜차이즈", path:"/menu/franchise", test:"franchise"}, {name:"맛집랭킹", path:"/menu/ranking", test:"ranking"}];
      const selectedStyle = {
        borderBottom: '5px solid black',
        fontWeight: '800',
        color: 'black',
        paddingBottom: '0.6rem'
      }
      const noExtraState = () => {
        $('div.center').css('margin-bottom', '.8rem');
      }
      const test2 = /instancepay/;
      const test3 = /call/;
      const savedStoreTabs = (
        <div className="ss-nav-container">
          <div className="ss-nav-item">
            <Link to="/savedstore" style={test2.test(this.props.location.pathname)||test3.test(this.props.location.pathname)?undefined:selectedStyle}>찜한가게(0)</Link>
          </div>
          <div className="ss-nav-item">
            <Link to="/savedstore/instancepay" style={test2.test(this.props.location.pathname)?selectedStyle:undefined}>바로결제(0)</Link>
          </div>
          <div className="ss-nav-item">
            <Link to="/savedstore/call" style={test3.test(this.props.location.pathname)?selectedStyle:undefined}>전화주문(0)</Link>
          </div>
        </div>
      )
      const mapToMenus = (arr) => {
        return arr.map((item, i) => {
          let cate = new RegExp(item.test);
          let styleDecision = cate.test(this.props.location.pathname);
          let onClickFunc = () => {
            var target = "#"+item.test;
            // console.log($(target).css('left'))
            var offset = 55*i
            //* 스크롤 위치가 한 박자 느리다
            // console.log($(".hml-container").scrollLeft())
            // console.log(offset)
            // $(".do-nicescrol").scrollLeft(offset.left)
            $(".do-nicescrol").animate({scrollLeft:offset},500);
          };
          return (
            <Link to={item.path} className="hml-item" id={item.test}
              key={i} style={styleDecision?selectedStyle:undefined}
              onClick={onClickFunc}>
              {item.name}
            </Link>
          );
        });
      };
      const menuLists = () => {
        let menu = /menu/;
        if(menu.test(this.props.location.pathname)){
          return (
            <div className="hml-container do-nicescrol">
              {mapToMenus(menus)}
            </div>
          );
        }
      }
      const goBackButton = (paths) => {
        let menu = /menu/;
        let search = /search/;
        let review = /review/;
        let login = /login/;
        let event = /event/;
        let register = /register/;
        let fullPaths = this.props.location.pathname;
        let splitteddArr = fullPaths.split('/');
        let lastPath = splitteddArr.pop();
        let firstPath = splitteddArr[1];
        let secondPath = splitteddArr[2];
        let linkPath = "/menu/"+secondPath;
        const backButton = (
          <div className="go-back-button"
              onClick={this.props.history.goBack}>
            <i className="iuny material-icons">arrow_back</i>
          </div>
        );
        const backToMenu = (
          <Link className="go-back-button"
              to={linkPath}>
            <i className="iuny material-icons">arrow_back</i>
          </Link>
        );
        const backToHome = (
          <Link className="go-back-button"
              to="/">
            <i className="iuny material-icons">arrow_back</i>
          </Link>
        );
        if(splitteddArr.length==2 && firstPath=="menu"){
          return backToHome;
        };
        if(lastPath==="1" || lastPath==="2" || lastPath==="3"){
          return backToMenu;
        };
        if(menu.test(paths) || search.test(paths) || review.test(paths) || login.test(paths)
          || event.test(paths) || register.test(paths)){
            return backButton;
        };
      }
      const inspectBlank = () => {
        if(this.props.stateBarTitle==="have to be vanish"){
          return <div className="blank"> </div>
        }
        return this.props.stateBarTitle
      }
      console.log(this.props.location.pathname)
      return(
          <div className="statebar">
            <div className="center">
                {inspectBlank()}
                {goBackButton(this.props.location.pathname)}
                {this.props.stateBarTitle === "찜한가게" ? savedStoreTabs: undefined}
                {menuLists()}
            </div>
          </div>
      );
    }
}

StateBar.propTypes = propTypes;
StateBar.defaultProps = defaultProps;

export default StateBar;
