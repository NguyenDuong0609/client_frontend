import React, { Component } from 'react';

import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class postsFeatureComponent extends Component {
    componentDidMount(){
        this.props.getPostsCategory(this.props.slugCategory);
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
                  <img src={ post.thumbnail } width="50px" alt="" style={{ float: 'left', marginRight: '20px' }}/>
                  <Link to={'/post/'+post.slug.NameSlug } style={{ color: 'black', textDecoration: 'none' }}>
                    <span>{ post.title }</span>
                  </Link>
                </li>
            );
    }
    getListPostFilter(post) {
        if(post.positionTop === true)
            return (
                <article className="list-group-item list-group-item-action">
                    <img src={post.thumbnail} width="50px;" alt=""/>
                    <span style={{ marginTop: '5px', marginLeft: '5px' }}>
                        <Link to={'/post/'+post.slug.NameSlug } style={{ color: 'black', textDecoration: 'none' }}>
                        { post.title }
                        </Link>
                    </span>
                </article>
            );
    }
    getListPost(post) {
        if(post.view_slider === false && post.positionTop === false)
            return (
                <Link to={'/post/' + post.slug.NameSlug } style={{ color: 'black', textDecoration: 'none' }}>
                    <article style={{ borderBottom: "1px solid #e6e6e6" }}>
                        <img src={ post.thumbnail } alt=""  width="70px;" height="70px" style={{ float: "left" }}/>
                        <span>
                            <h4>{ post.slug.NameSlug }</h4>
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
                        { this.props.postFollowCategory.map(post => this.getListPostFilter(post))}
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

export const SectionFeature = connect(mapStateToProps, actionCreators)(postsFeatureComponent);
