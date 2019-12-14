import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';

import { ListPostCat } from '../../pages/index/post_follow_cat/ListPostCat';
import { ListPostSection } from '../../pages/index/post_follow_section/ListPostSection';
import { SliderSection } from '../../pages/index/sliderSection';

//import { Index_module1 } from './Index_module1';

class IndexComponent extends Component {
    // constructor(props) {
    //   super(props);
    // }

    render() {
      //const imageSrc = require('../../image/ios.png') ;
      const numberCategoryParent = this.props.categoryParents.length;
        return (
            <div className="container-fluid">
              <SliderSection/>
              {/* <!--Hiển thị danh sách bài Post Style 1--> */}
              
              { this.props.categoryParents.map((cateParent, i) =>
                  {
                    if( numberCategoryParent === (i+1)) {
                      return <ListPostCat cateParent={ cateParent } />
                    }
                    return <ListPostSection cateParent={ cateParent } />
                  }
                ) }
              
              <span style={{ borderBottom: '3px solid #2e439c'}}></span>
              {/* <Index_module1/> */}

              {/* <!--Hiển thị danh sách bài Post Style 2--> */}
              {/* <!--Hiển thị danh sách bài Post Style 2--> */}
            </div>
        );
    }
}

const mapStateToProps = state => ({
  categories: state.categories,
  categoryParents: state.categoryParents,
  posts: state.posts
});

export const Index = connect(mapStateToProps, actionCreators)(IndexComponent);
