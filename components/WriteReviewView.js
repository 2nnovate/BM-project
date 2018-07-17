import React, { Component } from 'react';
import PropTypes from 'prop-types';
import filledStar from '../components/images/filledStar.png';
import blankedStar from '../components/images/blankedStar.png';

const propTypes = {
  currentUser: PropTypes.string
};
const defaultProps = {
  currentUser: "프로독학러"
};

class WriteReviewView extends Component {
    state = {
      starRate: 3,
      contents: "",
      imageUrls: []
    }
    handleStars = (e) => {
      // console.log(this.state.starRate)
      switch($(e.target).attr('id')) {
        case "firstStar":
          console.log("firstStar is selected");
          $('#firstStar').attr('src', filledStar);
          $('#secondStar').attr('src', blankedStar);
          $('#thirdStar').attr('src', blankedStar);
          $('#fourthStar').attr('src', blankedStar);
          $('#fivethStar').attr('src', blankedStar);
          this.setState({
            starRate: 1
          });
          return;
        case "secondStar":
          console.log("secondStar is selected");
          $('#firstStar').attr('src', filledStar);
          $('#secondStar').attr('src', filledStar);
          $('#thirdStar').attr('src', blankedStar);
          $('#fourthStar').attr('src', blankedStar);
          $('#fivethStar').attr('src', blankedStar);
          this.setState({
            starRate: 2
          });
          return;
        case "thirdStar":
          console.log("thirdStar is selected");
          $('#firstStar').attr('src', filledStar);
          $('#secondStar').attr('src', filledStar);
          $('#thirdStar').attr('src', filledStar);
          $('#fourthStar').attr('src', blankedStar);
          $('#fivethStar').attr('src', blankedStar);
          this.setState({
            starRate: 3
          });
          return;
        case "fourthStar":
          console.log("fourthStar is selected");
          $('#firstStar').attr('src', filledStar);
          $('#secondStar').attr('src', filledStar);
          $('#thirdStar').attr('src', filledStar);
          $('#fourthStar').attr('src', filledStar);
          $('#fivethStar').attr('src', blankedStar);
          this.setState({
            starRate: 4
          });
          return;
        case "fivethStar":
          console.log("fivethStar is selected");
          $('#firstStar').attr('src', filledStar);
          $('#secondStar').attr('src', filledStar);
          $('#thirdStar').attr('src', filledStar);
          $('#fourthStar').attr('src', filledStar);
          $('#fivethStar').attr('src', filledStar);
          this.setState({
            starRate: 5
          });
          return;
      }
      // console.log($(e.target).attr('id'));
      // console.log(this.state.starRate)
      // console.log(filledStar)
    };
    handleChange = (e) => {
      this.setState({
          contents: e.target.value
      });
    };
    render() {
      // console.log(this.state.contents)
      const starRate = (
        <div className="write-review-starrate">
          <div className="write-review-title">별점</div>
          <img src={filledStar} alt="first-star" id="firstStar" onClick={this.handleStars}/>
          <img src={filledStar} alt="second-star" id="secondStar" onClick={this.handleStars}/>
          <img src={filledStar} alt="third-star" id="thirdStar" onClick={this.handleStars}/>
          <img src={blankedStar} alt="fourth-star" id="fourthStar" onClick={this.handleStars}/>
          <img src={blankedStar} alt="fiveth-star" id="fivethStar" onClick={this.handleStars}/>
        </div>
      );
      const contentsField = (
        <div className="contents-field">
          <div className="write-review-author">
            <div className="write-review-title">닉네임</div>
            <div>{this.props.currentUser}</div>
          </div>
          <textarea placeholder="가슴은 뜨겁게 배는 부르게 리뷰는 솔직하게"
                    value={this.state.contents}
                    onChange={this.handleChange}>
          </textarea>
        </div>
      );
      const postPics = (
        <div className="post-pics-container">
          <div className="post-pics-item">
            <i className="medium material-icons">camera_alt</i>
          </div>
          <div className="post-pics-item">
            <i className="medium material-icons">camera_alt</i>
          </div>
          <div className="post-pics-item">
            <i className="medium material-icons">camera_alt</i>
          </div>
        </div>
      );
      const foldFunctions = (e) => {
        const state = $(e.target).next().css('display');
        if(state==='none'){
          $(e.target).next().css('display', 'block');
          $(e.target).text('닫기 ∧');
          // console.log("열림");
        }else{
          $(e.target).next().css('display', 'none');
          $(e.target).text('자세히 보기 ∨');
          // console.log("닫힘");
        }
      }
      const writeReviewInform = (
        <div className="write-review-inform">
          <div>
            솔직하게 작성하신 리뷰는 주문을 고민하는 분들께 큰 도움이 됩니다.
          </div>
          <div>
            하지만 허위리뷰나 명예훼손, 욕설, 비방글 등 선량한 업주나 제3자의 권리를 침해하는 게시물은 서비스 이용약관이나 관련 법률에 따라 제재를 받을 수 있습니다.
          </div>
          <div onClick={foldFunctions} className="fold-informs-button">
            자세히 보기 ∨
          </div>
          <div className="will-fold-informs">
            숨겨질 내용
          </div>
        </div>
      );
      const postButton = (
        <div className="review-post-button">
          완료
        </div>
      )
        return(
            <div>
              {starRate}
              {contentsField}
              {postPics}
              {writeReviewInform}
            </div>
        );
    }
}

WriteReviewView.propTypes = propTypes;
WriteReviewView.defaultProps = defaultProps;

export default WriteReviewView;
