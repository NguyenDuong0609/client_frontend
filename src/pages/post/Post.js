import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';

import { ColumnLeft } from './columnLeft';
import { ColumnRight } from './columnRight';

class PostComponent extends Component {
    render() {
        return (
            <div className="container-fluid">
                <ColumnLeft slugPost={ this.props.match.params.slugPost}/>
                <ColumnRight/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    categoryParents: state.categoryParents,
    posts: state.posts,
    postDetail: state.postDetail
  });
  
export const Post = connect(mapStateToProps, actionCreators)(PostComponent);