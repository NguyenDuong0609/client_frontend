import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';
//import { BrowserRouter as Link } from 'react-router-dom';
import { BrowserRouter as Router, Route,Link, NavLink } from 'react-router-dom';
import { Post } from './Post';
import parse from 'html-react-parser';

class ColumnRightComponent extends Component {
    getListPostFeature(item) {
        if(item.view_feature === true)
            return (
                <li class="list-group-item">
                    <img src={ item.thumbnail } width="50px" alt="" style={{ float: 'left', marginRight: '20px' }}/>
                    <Link to={'/post/'+item.slug } style={{ color: 'black', textDecoration: 'none' }}>
                        <span>{ item.title }</span>
                    </Link>
                </li>
            );
    }
    getListPostTitle(item) {
        return (
            <li class="list-group-item">
                    <img src={ item.thumbnail } width="100px" alt="" style={{ float: 'left', marginRight: '20px' }}/>
                    <Link to={'/post/'+item.slug } style={{ color: 'black', textDecoration: 'none' }}>
                        <span style={{ fontSize: "italic"}}>{ item.title }</span>
                    </Link>
                </li>
        );
    }
    render() {
        //const imagesSrc = require('../../image/ios.png') ;
        return(
            // <div className="col-sm-3">
            //         <div>
            //             <div>
            //                 <h3 style={{ borderBottom: '3px solid #2e439c'}}>Bài viết nổi bật</h3>
            //                 { this.props.posts.map(item => this.getListPostFeature(item))}
            //             </div>
            //             <div>
            //                 <h3 style={{ borderBottom: '3px solid #2e439c'}}>Title</h3>
            //                 { this.props.posts.map(item => this.getListPostTitle(item))}
            //             </div>
            //         </div>
            //     </div>
            <div className="row shadow-sm p-3 mb-5 bg-white rounded" style={{ marginTop: '-40px'}}>
                <div className="col-md-8">
                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-grow-1 bd-highlight">
                    <h4 className="d-flex justify-content-start" style={{ color: 'blue' }}>Bài viết cùng chuyên mục</h4>
                    </div>
                </div>
                <ul className="list-group list-group-flush">
                    { this.props.postsFollowCateParent.map(post => this.getListPostFeature(post))}
                </ul>
                </div>
                <div className="col-md-4">
                <div className="card">
                    <div className="card-header">Bài viết nổi bật</div>
                    <ul className="list-group list-group-flush">
                        { this.props.posts.map(post => this.getListPostTitle(post))}
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
    postDetail: state.postDetail,
    postsIdCategory: state.postsIdCategory,
    postsFollowCateParent: state.postsFollowCateParent
  });

export const ColumnRight = connect(mapStateToProps, actionCreators)(ColumnRightComponent);
