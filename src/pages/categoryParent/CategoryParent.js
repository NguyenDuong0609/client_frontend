import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';

// import { ListPostSection } from '../categoryParent/ListPostSection';
// import { SliderSection } from '../categoryParent/sliderSection';
import { ColumnLeft } from '../categoryParent/columnLeft';
import { ColumnRight } from '../categoryParent/columnRight';

//import { Index_module1 } from './Index_module1';

class CategoryParentComponent extends Component {
    componentDidMount(){
    }
    // constructor(props) {
    //   super(props);
    // }

    render() {
      //const imageSrc = require('../../image/ios.png') ;
      //const numberCategoryParent = this.props.categoryParents.length;
        return (
            // <div className="container" style={{ backgroundColor: '#fff'}}>
            //   <SliderSection/>
            //   {/* <!--Hiển thị danh sách bài Post Style 1--> */}
            //   <div className="row" style={{ borderTop: '1px solid #e6e6e6', borderBottom: '1px solid #e6e6e6'}}>
            //   { this.props.categoryParents.map((cateParent, i) =>
            //       {
            //           return <ListPostSection cateParent={ cateParent } slugCate={this.props.match.params.slugCate}/>
            //       }
            //     ) }
            //   </div>
            //   <span style={{ borderBottom: '3px solid #2e439c'}}></span>
            //   {/* <Index_module1/> */}
            //
            //   {/* <!--Hiển thị danh sách bài Post Style 2--> */}
            //   {/* <!--Hiển thị danh sách bài Post Style 2--> */}
            // </div>
            <div className="container-fluid">
                    <ColumnLeft slugCate={this.props.match.params.slugCate}/>
                    <ColumnRight/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  categories: state.categories,
  categoryParents: state.categoryParents,
  posts: state.posts
});

export const CategoryParent = connect(mapStateToProps, actionCreators)(CategoryParentComponent);
