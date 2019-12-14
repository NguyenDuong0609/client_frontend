import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';
import { Link } from 'react-router-dom';
import axios from 'axios';
import parse from 'html-react-parser';

class SliderSectionComponent extends Component {
    
    getListPostSlider(post) {
        if(post.id === 'post001')
          return  (
              <Link to={'/post/'+post.slug } style={{ color: 'black', textDecoration: 'none' }}>
                  <div classNameName="carousel-item active">
                      <img src={post.thumbnail} height="341px" className="card-img-top" alt="..."/>
                      <div className="card-body">
                        <h5 className="card-title">{ post.title }</h5>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                      </div>
                  </div>
              </Link>
          )
    }
    getListPostTitle(post) {
        if(post.view_slider === true)
          return  (
            <article className="list-group-item list-group-item-action">
              <img src={post.thumbnail} width="50px;" alt=""/>
              <span style={{ marginTop: '5px', marginLeft: '5px' }}>
                <Link to={'/post/'+post.slug } style={{ color: 'black', textDecoration: 'none' }}>
                  { post.title }
                </Link>
              </span>
            </article>
          )
    }
    render() {
      console.log(this.props.postsSlider);
        return(
        // module1
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
                { this.props.posts.map(post => this.getListPostTitle(post))}
              </div>
            </div>
          </div>
        //module1
        );
    }
};

const mapStateToProps = state => ({
    categories: state.categories,
    categoryParents: state.categoryParents,
    posts: state.posts,
    postsSlider: state.postsSlider
});
export const SliderSection = connect(mapStateToProps, actionCreators)(SliderSectionComponent);
