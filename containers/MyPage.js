import React, { Component } from 'react';
import PropTypes from 'prop-types';
import myBanner from '../components/images/myBanner.png';
import {MyButtons} from '../components';
import { connect } from 'react-redux';
import { logoutRequest } from '../actions/authentication';
import blankProfile from '../components/images/blankProfile.png';
import level from '../components/images/level.png';

const propTypes = {
};
const defaultProps = {
};

class MyPage extends Component {
    state = {

    }
    componentDidMount() {
      setTimeout(()=>{
        const headerHeight = $('.header').height();
        const headerHeigthPixel = headerHeight+"px";
        // const footerHeight = $('.footer').height();
        // const documentHeight = $(document).height();
        // const sectionShouldHeigth = documentHeight-headerHeight-footerHeight+"px";
        $('.section').css('margin-top', headerHeigthPixel)
        // $('.section').css('height', sectionShouldHeigth)
      },0);
    }
    handleLogout = () => {
        this.props.logoutRequest().then(
            () => {
                M.toast({html:'Good Bye!'});

                // EMPTIES THE SESSION
                let loginData = {
                    isLoggedIn: false,
                    username: ''
                };

                document.cookie = 'key=' + btoa(JSON.stringify(loginData));
                this.props.history.push('/mypage');
            }
        );
    }
    render() {
      const myPageFooter = (
        <div className="mp-footer">
          <div className="mp-cs">
            <p>배달의민족 고객센터</p>
            <h4>1644-0025</h4>
            <div>(24시간 운영, 연중무휴)</div>
          </div>
          <div className="mp-copyright">
            <div>Copyright Woowa Brothers in Song-pa, All Rights Reserved.</div>
            <div className="mp-pill">Version 6.12.1</div>
          </div>
        </div>
      );
      const eventbanner = (
        <img src={myBanner} alt="benefits of signup" />
      );
      const loggedInView = (
        <div className="mypage-profile">
          <div className="mypage-profile-inform">
            <img src={blankProfile} alt="profile"/>
            고마운분, <div>{this.props.currentUser}</div>
          </div>
          <div className="mypage-profile-level">
            <img src={level} alt="level" />
            <div>등급별 혜택</div>
          </div>
        </div>
      )
        return(
            <div className="section">
              {this.props.match.params.user_id?loggedInView:eventbanner}
              <MyButtons onLogout={this.handleLogout}
                          isLoggedIn={this.props.currentUser==''? false : true}/>
              {myPageFooter}
            </div>
        );
    }
}

MyPage.propTypes = propTypes;
MyPage.defaultProps = defaultProps;

const mapStateToProps = (state) => {
    return {
        currentUser: state.authentication.status.currentUser
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        logoutRequest: () => {
            return dispatch(logoutRequest());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MyPage);
