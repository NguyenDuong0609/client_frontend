import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';

import { SectionFeature } from './postsFeature';
import { SectionPosts } from './posts';

class CategoryComponent extends Component {
    render() {
        return(
            <div className="container-fluid">
                <SectionFeature slugCategory={ this.props.match.params.slugCategory }/>
                <SectionPosts/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    categories: state.categories,
    categoryParents: state.categoryParents,
    posts: state.posts,
    postFollowCategory: state.postFollowCategory
  });

export const Category = connect(mapStateToProps, actionCreators)(CategoryComponent);
