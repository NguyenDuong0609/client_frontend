import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ColumnLeftComponent extends Component {
    componentDidMount(){
        this.props.getPostsCateParent(this.props.slugCate);
    }

    getListPostSlider(post) {
        if(post.id === 'post001')
          return  (
              <Link to={'/post/'+post.slug } style={{ color: 'black', textDecoration: 'none' }}>
                  <div className="carousel-item active">
                      <img src={post.thumbnail} height="341px" className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{ post.title }</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                  </div>
              </Link>
          )
    }

    getListPostFeature(post) {
        if (post.view_slider === true)
            return (
                <li class="list-group-item">
                  <img src={ post.thumbnail } width="100px" alt="" style={{ float: 'left', marginRight: '20px' }}/>
                  <Link to={'/post/'+post.slug.NameSlug } style={{ color: 'black', textDecoration: 'none' }}>
                    <span style={{ fontStyle: 'italic' }}>{ post.title }</span>
                  </Link>
                </li>
            );
    }
    getListPostFilter(post) {
        if(post.positionTop === true)
            return (
                <Link to={'/post/' + post.slug.NameSlug } style={{ color: 'black', textDecoration: 'none' }}>
                    <article>
                        <img src={ post.thumbnail } alt=""  width="80px;"/>
                        <p>{ parse(post.description) }</p>
                    </article>
                </Link>
            );
    }
    getListPost(post) {
        if(post.view_slider === false && post.positionTop === false)
            return (
                <Link to={'/post/' + post.slug.NameSlug } style={{ color: 'black', textDecoration: 'none' }}>
                    <article style={{ borderBottom: "1px solid #e6e6e6" }}>
                        <img src={ post.thumbnail } alt=""  width="70px;" height="70px;" style={{ float: "left" }}/>
                        <span>
                            <h4>{ post.title }</h4>
                            <span>{ parse(post.description) }</span>
                        </span>
                    </article>
                </Link>
            );
    }
    render() {
        const imageSrc = require('../../image/ios.png') ;
        //const cateParent = this.props.cateParent;
        //const categories = this.props.categories;
        return(
            // <div className="col-sm-9" style={{ borderRight: "1px solid #e6e6e6"}}>
            //     <div className="row">
            //             <div className="col-sm-9">
            //             <h2 style={{ borderBottom: "3px solid #2e439c" }}>Tiêu điểm</h2>
            //             <img src={ imageSrc } alt="" width="400px;"/>
            //             <div>
            //                 { this.props.postsFollowCateParent.map(post => this.getListPostFeature(post))}
            //             </div>
            //             </div>
            //             <div className="col-sm-3" style={{ borderLeft: "1px solid #e6e6e6" }}>
            //                 <h2 style={{ borderBottom: "3px solid #2e439c" }}>Tin chọn lọc</h2>
            //                 { this.props.postsFollowCateParent.map(post => this.getListPostFilter(post))}
            //             </div>
            //     </div>
            //     <div className="row" style={{ borderTop: "1px solid #e6e6e6" }}>
            //             <div className="col-sm-12">
            //                 { this.props.postsFollowCateParent.map(post => this.getListPost(post))}
            //             </div>
            //        </div>
            // </div>
            <div className="row shadow-sm p-3 mb-5 bg-white rounded">
                <div className="col-md-8">
                    <div className="card mb-3">
                        { this.props.posts.map(post => this.getListPostSlider(post))}
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="list-group">
                        <Link href="#" className="list-group-item list-group-item-action">
                        <h3>Bài viết xem nhiều</h3>
                        </Link>
                        { this.props.postsFollowCateParent.map(post => this.getListPostFeature(post))}
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
    postsFollowCateParent: state.postsFollowCateParent
  });

export const ColumnLeft = connect(mapStateToProps, actionCreators)(ColumnLeftComponent);
