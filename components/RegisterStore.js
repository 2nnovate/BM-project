import React, { Component } from 'react';
import PropTypes from 'prop-types';

class RegisterStore extends Component {
    constructor(props) {
      super(props);
      //Select태그 initialize(Matereailizecss)
      $(document).ready(function(){
        $('select').formSelect();
      });
    }
    render() {
      const categories = ["한식", "분식", "돈까스・회・일식", "치킨", "피자", "중국집",
       "족발・보쌈", "야식", "찜・탕", "도시락", "카페・디저트", "패스트푸드", "프랜차이즈"];

      const mapToOptions = data => {
        return data.map((c, i) => {
          return (
            <option value={c} key={i}>{c}</option>
          );
        })
      }

      return(
          <div className="container">
            <form className="col s12">
              <div className="row">
                <div className="input-field col s6 username">
                    <label>상호명</label>
                    <input
                    name="storeName"
                    type="text"
                    className="validate"/>
                </div>
                <div className="input-field col s6 username">
                    <label>지역</label>
                    <input
                    name="region"
                    type="text"
                    className="validate"/>
                </div>
              </div>
              <label className="selectTagLabel">업종 분류</label>
              <select name="categories" className="browser-default selectTag">
                <option value="" disabled selected>어떤 종류의 음식을?</option>
                {mapToOptions(categories)}
              </select>
              <div className="row">
                <div className="input-field col s6">
                    <label>영업 시간</label>
                    <input
                    name="avilTime"
                    type="text"
                    className="validate"/>
                </div>
                <div className="input-field col s6">
                    <label>휴무일</label>
                    <input
                    name="offDay"
                    type="text"
                    className="validate"/>
                </div>
              </div>
              <div className="row">
                    <div className="input-field col s6">
                      <label>전화번호</label>
                      <input
                      name="tel"
                      type="text"
                      className="validate"/>
                    </div>
                    <div className="input-field col s6">
                      <label>대표자명</label>
                      <input
                      name="owner"
                      type="text"
                      className="validate"/>
                </div>
              </div>
            </form>
          </div>
      );
    }
}

export default RegisterStore;
