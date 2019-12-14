import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';

class ListPostSectionComponent extends Component {
    componentDidMount(){
      this.props.getPostsCateParent(this.props.slugCate);
    }
    // constructor(props) {
    //   super(props);
    //   //console.log(this.props.slugCate);
    // }
    getListCategory(category, cateParent) {
        if(cateParent.id === category.category_parent_id) {
          return <Link to={'/category/'+category.slug.NameSlug} style={{ color: 'black', textDecoration: 'none', marginRight: '2px', padding: '0 5px'}}>{ category.name }</Link>
        }
    }
    getListPostFeature(post) {
        if (post.view_feature === true)
            return(
                <Link to={'/post/'+post.title } style={{ color: 'black', textDecoration: 'none' }}>
                    <article>
                      <img src={ post.thumbnail } width="400px;" alt=""/>
                       <h4 style={{ textAlign: 'center' }}>{ post.title }</h4>
                      <span style={{ marginTop: '5px', textAlign: 'center' }}>{parse(post.description)}</span>
                    </article>
                </Link>
            );
    }
    render() {
        //const imageSrc = require('../../image/ios.png') ;
        const cateParent = this.props.cateParent;
        //const categories = this.props.categories;

        return(
            <div className="col-sm-12">
                    <div className="row">
                      <div className="col-sm-12" style={{ borderBottom: '3px solid #2e439c'}}>
                          <div style={{ display: 'inline-block', width: '100%'}}>
                              <h2 style={{ float: 'left'}}>
                                <Link to={'/categoryParent/'+cateParent.slug.NameSlug } style={{ color: 'black', textDecoration: 'none' }}>
                                    { cateParent.name }
                                </Link>
                              </h2>
                              <ul style={{ listStyle: 'none', marginTop: '10px'}}>
                                { this.props.categories.map(category => this.getListCategory(category, cateParent))}
                            </ul>
                          </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-sm-6">
                         { this.props.posts.map(post => this.getListPostFeature(post))}
                      </div>
                      {/* test demo foreach post */}
                      <div className="col-sm-6">
                        { this.props.postsFollowCateParent.map(post => {
                          return (
                              <Link to={'/post/'+post.title } style={{ color: 'black', textDecoration: 'none' }}>
                                <article style={{ float: 'left' }}>
                                    <img src={ post.thumbnail } width="80px;" alt=""/>
                                    <span style={{ marginTop: '5px'}}>{post.title}</span>
                                </article>
                              </Link>
                          );
                        })}
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

export const ListPostSection = connect(mapStateToProps, actionCreators)(ListPostSectionComponent);
