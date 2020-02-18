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
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img className="d-block w-100" src="https://serverapp2020.herokuapp.com/public/images/posts/phim001.jpg" alt="First slide"/>
                  <div class="carousel-caption d-none d-md-block">
                  <a href="https://tinhte.vn/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>{ post.title }</a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://serverapp2020.herokuapp.com/public/images/posts/avatar1.jpg" alt="Second slide"/>
                  <div class="carousel-caption d-none d-md-block">
                  <a href="https://tinhte.vn/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>{ post.title }</a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img className="d-block w-100" src="https://serverapp2020.herokuapp.com/public/images/posts/zingdelta1.jpg" alt="Third slide"/>
                  <div class="carousel-caption d-none d-md-block">
                  <a href="https://tinhte.vn/" style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold'}}>{ post.title }</a>
                  </div>
                </div>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          )
    }
    getListPostTitle(post) {
        if(post.view_slider === true)
          return  (
            <article className="list-group-item list-group-item-action">
              <img src={post.thumbnail} width="100px;" style={{ float: 'left', marginRight: '20px' }} alt=""/>
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
              <div className="card">
                <div className="card-header">Bài viết nổi bật</div>
                <ul className="list-group list-group-flush">
                  { this.props.posts.map(post => this.getListPostTitle(post))}
                </ul>
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
