import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';
import { Link } from 'react-router-dom';

class SliderSectionComponent extends Component {
    constructor(props) {
      super(props);
      //console.log(this.props.categories);
     this.props.getPostsCateParent(this.props.slugCateParent);
    }
    getListPostSlider(post) {
        if(post.view_slider === true)
          return  (
              <Link to={'/post/'+post.slug.NameSlug } style={{ color: 'black', textDecoration: 'none' }}>
                  <div className="carousel-item active">
                      <img src={post.thumbnail } className="d-block w-50" alt="..."/>
                  </div>
              </Link>
          )
    }
    getListPostTitle(post) {
        if(post.view_slider === true)
          return  (
              <Link to={'/post/'+post.slug.NameSlug } style={{ color: 'black', textDecoration: 'none' }}>
                  <article>
                      <img src={ post.thumbnail } width="80px;" alt=""/>
                      <span style={{ marginTop: '5px'}}>{ post.title }</span>
                  </article>
              </Link>
          )
    }
    render() {
        //const imageSrc = require('../../image/ios.png') ;
        return(
            <div className="row" style={{ borderBottom: '1px solid #e6e6e6'}}>
                <div className="col-sm-8">
                  <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                      { this.props.postsFollowCateParent.map(post => this.getListPostSlider(post))}
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                      <span className="carousel-control-next-icon" aria-hidden="true"></span>
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
                <div className="col-sm-4">
                  <h4 style={{ borderBottom: '3px solid #2e439c'}}>Title</h4>
                  { this.props.postsFollowCateParent.map(post => this.getListPostTitle(post))}
                </div>
              </div>
        );
    }
};

const mapStateToProps = state => ({
    categories: state.categories,
    categoryParents: state.categoryParents,
    posts: state.posts,
    postsFollowCateParent: state.postsFollowCateParent
});
export const SliderSection = connect(mapStateToProps, actionCreators)(SliderSectionComponent);
