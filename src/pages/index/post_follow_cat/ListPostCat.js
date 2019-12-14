import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../../redux/actionCreators';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class ListPostCatComponent extends Component {
    // constructor(props) {
    //   super(props);
    //   //console.log(this.props.categories);
    // }
    getListCategory(category, cateParent) {
        if(cateParent.id === category.category_parent_id) {
          return(
            <Link to={'/category/'+category.slug.NameSlug } style={{ float: 'left', padding: '0 5px', marginRight: '2px', color: 'blue', textDecoration: 'none'}}>/{ category.name }</Link>
          );
        }
    }
    getListPostFeature(post) {
        if (post.view_feature === true)
            return(
                <li class="list-group-item">
                  <img src={ post.thumbnail } width="100px" alt="" style={{ float: 'left', marginRight: '20px' }}/>
                  <Link to={'/post/'+post.slug } style={{ color: 'black', textDecoration: 'none' }}>
                    <span>{ post.title }</span>
                  </Link>
                </li>
            );
    }
    getListPostFeatureSub(post) {
      if (post.view_feature === true)
          return(
              <li class="list-group-item">
                <img src={ post.thumbnail } width="100px" alt="" style={{ float: 'left', marginRight: '20px' }}/>
                <Link to={'/post/'+post.slug } style={{ color: 'black', textDecoration: 'none' }}>
                  <span style={{ fontStyle: 'italic' }}>{ post.title }</span>
                </Link>
              </li>
          );
    }
    
    getListPostHot(post) {
      
        if (post.Hot === true)
            return(
                <Link to={'/post/'+post.slug }>
                    <article style={{ borderBottom: '1px solid #e6e6e6'}}>
                      <img src={ post.thumbnail } width="700px;" alt=""/>
                      <span style={{ marginTop: '5px' }}>{parse(post.title)}</span>
                    </article>
                </Link>
            );
    }
    render() {
        //const imageSrc = require('../../../image/ios.png') ;
        const cateParent = this.props.cateParent;
        const categories = this.props.categories;

        return (
          <div className="row shadow-sm p-3 mb-5 bg-white rounded" style={{ marginTop: '-40px'}}>
            <div className="col-md-8">
              <div className="d-flex bd-highlight">
                <div className="p-2 flex-grow-1 bd-highlight">
                  <h4 className="d-flex justify-content-start" style={{color: 'blue' }}>
                  <Link to={'/cateParent/'+cateParent.slug.NameSlug } style={{ color: 'blue', textDecoration: 'none' }}>{ cateParent.name }</Link>
                  </h4>
                </div>
                <ul style={{ listStyle: 'none', marginTop: '10px'}}>
                  <div className="p-2 bd-highlight">
                    { categories.map(category => this.getListCategory(category, cateParent))}
                </div>
                </ul>
              </div>
              <ul className="list-group list-group-flush">
                { this.props.posts.map(post => this.getListPostFeature(post))}
              </ul>
            </div>
            <div className="col-md-4">
              <div className="card" style={{ width: '18rem' }}>
                <div className="card-header">Bài viết nổi bật</div>
                <ul className="list-group list-group-flush">
                  { this.props.posts.map(post => this.getListPostFeatureSub(post))}
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
  posts: state.posts
});

export const ListPostCat = connect(mapStateToProps, actionCreators)(ListPostCatComponent);
