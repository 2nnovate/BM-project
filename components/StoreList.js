import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const propTypes = {
  storeLists: PropTypes.array
};
const defaultProps = {
  storeLists: [
    {
      _id: "4fc67871349bb7bf6a000002",
      name: "후라이드 참 잘하는 집 수택점",
      region: ["인창동", "토평동", "수택동"],
      thumbNail: "https://ucarecdn.com/536f563a-8d50-4871-81b6-e240ce6524ec/images.jpg",
      categories: "chicken",
      explain: "후라이드치킨, 양념치킨",
      availNow: true,
      inform: {
        availTime: "평일, 토요일 - 오전 11:00 ~ 익일 새벽 3:50 / 일요일 - 오전 11:00 ~ 익일 새벽 1:50",
        offDay: "연중무휴",
        tel: "050-7996-2630",
        owner: "박인호"
      },
      menus: [
        {
          categories: "CHICKEN",
          name: "후라이드치킨",
          price: 14000
        },
        {
          categories: "CHICKEN",
          name: "양념치킨",
          price: 15000
        },
        {
          categories: "반반메뉴",
          name: "후라이드반+간장반",
          price: 15000
        }
      ],
      reviews: [
        {
          author: "김돌쇠",
          contents: "치킨 겁나게 맛나다요!",
          imageUrl: "https://ucarecdn.com/7a74db9b-1583-435a-9157-796de96a62f2/KakaoTalk_20180714_061716678.jpg",
          date: {
              created: 1531516734595, //브라우저에서 Date.now() 한 결과(UTC 기준으로 1970.1.1 00:00 부터 경과된 밀리초)
              edited: 1531516734595
          },
          is_edited: false
        }
      ],
      saveStore: ["김돌쇠"],
      oderCount: 3,
      starRate:4.6
    },
    {
      _id: "4fc67871349bb7bf6a000002",
      name: "후라이드 참 잘하는 집 수택점",
      region: ["인창동", "토평동", "수택동"],
      thumbNail: "https://ucarecdn.com/536f563a-8d50-4871-81b6-e240ce6524ec/images.jpg",
      categories: "chicken",
      explain: "후라이드치킨, 양념치킨",
      availNow: true,
      inform: {
        availTime: "평일, 토요일 - 오전 11:00 ~ 익일 새벽 3:50 / 일요일 - 오전 11:00 ~ 익일 새벽 1:50",
        offDay: "연중무휴",
        tel: "050-7996-2630",
        owner: "박인호"
      },
      menus: [
        {
          categories: "CHICKEN",
          name: "후라이드치킨",
          price: 14000
        },
        {
          categories: "CHICKEN",
          name: "양념치킨",
          price: 15000
        },
        {
          categories: "반반메뉴",
          name: "후라이드반+간장반",
          price: 15000
        }
      ],
      reviews: [
        {
          author: "김돌쇠",
          contents: "치킨 겁나게 맛나다요!",
          imageUrl: "https://ucarecdn.com/7a74db9b-1583-435a-9157-796de96a62f2/KakaoTalk_20180714_061716678.jpg",
          date: {
              created: 1531516734595, //브라우저에서 Date.now() 한 결과(UTC 기준으로 1970.1.1 00:00 부터 경과된 밀리초)
              edited: 1531516734595
          },
          is_edited: false
        }
      ],
      saveStore: ["김돌쇠"],
      oderCount: 3,
      starRate:4.6
    },
    {
      _id: "4fc67871349bb7bf6a000002",
      name: "후라이드 참 잘하는 집 수택점",
      region: ["인창동", "토평동", "수택동"],
      thumbNail: "https://ucarecdn.com/536f563a-8d50-4871-81b6-e240ce6524ec/images.jpg",
      categories: "chicken",
      explain: "후라이드치킨, 양념치킨",
      availNow: true,
      inform: {
        availTime: "평일, 토요일 - 오전 11:00 ~ 익일 새벽 3:50 / 일요일 - 오전 11:00 ~ 익일 새벽 1:50",
        offDay: "연중무휴",
        tel: "050-7996-2630",
        owner: "박인호"
      },
      menus: [
        {
          categories: "CHICKEN",
          name: "후라이드치킨",
          price: 14000
        },
        {
          categories: "CHICKEN",
          name: "양념치킨",
          price: 15000
        },
        {
          categories: "반반메뉴",
          name: "후라이드반+간장반",
          price: 15000
        }
      ],
      reviews: [
        {
          author: "김돌쇠",
          contents: "치킨 겁나게 맛나다요!",
          imageUrl: "https://ucarecdn.com/7a74db9b-1583-435a-9157-796de96a62f2/KakaoTalk_20180714_061716678.jpg",
          date: {
              created: 1531516734595, //브라우저에서 Date.now() 한 결과(UTC 기준으로 1970.1.1 00:00 부터 경과된 밀리초)
              edited: 1531516734595
          },
          is_edited: false
        }
      ],
      saveStore: ["김돌쇠"],
      oderCount: 3,
      starRate:4.6
    }
  ]
};

// **pathname /menu 이후에 나오는 것에 따라 DB에 다르게 요청
class StoreList extends Component {
    state = {

    }
    componentDidMount(){
      setTimeout(()=>{
        const headerHeight = $('.header').height();
        const headerHeigthPixel = headerHeight+"px";
        // console.log(headerHeigthPixel);
        $('.section').css('margin-top', headerHeigthPixel)
      },0);
    }
    render() {
      // **item.availNow 에 따라 준비중 표시 (스타일)
      // **백앤드에서 별점계산하는 로직필요
      // **key 값 _id 로 변경하기
      const mapToStoreList = (arr) => {
        return arr.map((item, i) => {
          let linkPath = "/menu/"+item.categories+"/"+item._id+"/1";
          let availNowStyle = {color : "black"};
          return (
            <Link to={linkPath} className="store-list-item" key={i} style={item.availNow?availNowStyle:undefined}>
              <img src={item.thumbNail} alt={"thumbnail for '"+item.name+"'"} className="circle responsive-img"/>
              <div className="store-list-texts">
                <div className="store-list-name">{item.name}</div>
                <div>★ {item.starRate} 최근리뷰 {item.reviews.length}</div>
                <div>{item.explain}</div>
              </div>
              <div className="store-list-arrow hanna">></div>
            </Link>
          );
        })
      }
        return(
            <div className="store-list-container">
              {mapToStoreList(this.props.storeLists)}
            </div>
        );
    }
}

StoreList.propTypes = propTypes;
StoreList.defaultProps = defaultProps;

export default StoreList;
