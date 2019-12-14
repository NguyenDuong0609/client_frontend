import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class postsComponent extends Component {
    componentDidMount() {
        console.log(this.props.postFollowCategory);
    }
    getListPostFeature(post) {
        if(post.view_feature === true)
            return (
                <li class="list-group-item">
                    <img src={ post.thumbnail } width="50px" alt="" style={{ float: 'left', marginRight: '20px' }}/>
                    <Link to={'/post/'+post.slug } style={{ color: 'black', textDecoration: 'none' }}>
                    <span style={{ fontStyle: 'italic' }}>{ post.title }</span>
                    <span>{parse(post.description)}</span>
                    </Link>
                </li>
            );
    }

    getListPostTitle(post) {
            return (
                <li className="list-group-item">
                  <img src={ post.thumbnail } width="50px" alt="" style={{ float: 'left', marginRight: '20px' }}/>
                  <Link to={'/post/'+post.slug } style={{ color: 'black', textDecoration: 'none' }}>
                    <span>{ post.title }</span>
                  </Link>
                </li>
        );
    }
    
    render() {
        const imageSrc = require('../../image/ios.png') ;
        return(
            <div className="row shadow-sm p-3 mb-5 bg-white rounded" style={{ marginTop: '-40px'}}>
                <div className="col-md-8">
                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-grow-1 bd-highlight">
                    <h4 className="d-flex justify-content-start" style={{ color: 'blue' }}>Bài viết cùng chuyên mục</h4>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    { this.props.posts.map(post => this.getListPostTitle(post))}
                </ul>
                </div>
                <div className="col-md-4">
                <div className="card">
                    <div className="card-header">Bài viết nổi bật</div>
                    <ul className="list-group list-group-flush">
                        { this.props.postFollowCategory.map(post => this.getListPostFeature(post))}
                    </ul>
                </div>
                </div>
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

export const SectionPosts = connect(mapStateToProps, actionCreators)(postsComponent);
