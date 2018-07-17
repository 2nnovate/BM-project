import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
};
const defaultProps = {
};

class RealSearchBar extends Component {
    state = {
      keywords: ""
    }
    handleChange = (e) => {
      let nextState = {};
      nextState[e.target.name] = e.target.value;
      this.setState(nextState);
    }
    render() {
      // console.log(this.state)
      const searchInput = (
        <div className="row search-input-container">
          <form className="col s12">
            <div className="row">
              <div className="input-field col s12">
                <i className="material-icons prefix">search</i>
                <input name="keywords"
                        className="real-input"
                        type="text"
                        placeholder="매장 이름으로 검색"
                        onChange={this.handleChange}
                        value={this.state.keywords}/>
              </div>
            </div>
          </form>
        </div>
      );
      // 인풋창 onChange 이벤트때마다 검색해서 아래에 결과를 표현해주기
      return(
        <div>
          {searchInput}
          검색결과들이 인풋창이 변경될 때 마다 실시간으로 렌더링예정
        </div>

      );
    }
}

RealSearchBar.propTypes = propTypes;
RealSearchBar.defaultProps = defaultProps;

export default RealSearchBar;
