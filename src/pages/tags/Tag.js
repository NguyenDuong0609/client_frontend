import React, { Component } from 'react';
//import axios from 'axios';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';

import { ColumnLeft } from './columnLeft';
import { ColumnRight } from './columnRight';

class TagsComponent extends Component {
    render() {
        return(
            <div className="container-fluid">
                <ColumnLeft slugTag={ this.props.match.params.slugtag}/>
                <ColumnRight/>
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

export const Tags = connect(mapStateToProps, actionCreators)(TagsComponent);
