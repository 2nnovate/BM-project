import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StoreList } from '../components'

const propTypes = {
};
const defaultProps = {
};
// 가게 정보 불러오기(리덕스연결)
class Menu extends Component {
    componentDidMount() {
      $(".do-nicescrol").niceScroll();
      // 해당 매뉴에 들어가면 해당 메뉴로 자동 스크롤
      const menuPathNameArr = ["kfood", "snack", "jfood", "chicken", "pizza", "cfood", "jokbo", "night",
                                "soup", "packed", "cafe", "fastfood", "franchise", "ranking"];
      let multipleN = undefined;
      for(var i = 0; i<menuPathNameArr.length; i++){
        // console.log(menuPathNameArr[i]);
        let pattern = new RegExp(menuPathNameArr[i]);
        if(pattern.test(this.props.location.pathname)){
          // console.log(i)
          multipleN = i;
          const offset = 55*multipleN
          $(".do-nicescrol").animate({scrollLeft:offset},500);
          return
          break;
        }
      };
    };

    // StoreList 컴포넌트에 storeLists 프롭스로 전달
    render() {
      // console.log(this.props.match.params.categories)
      return(
        <div className="section">
          <StoreList />
        </div>
      );
    }
}

Menu.propTypes = propTypes;
Menu.defaultProps = defaultProps;

export default Menu;
