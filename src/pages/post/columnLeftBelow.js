import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';
//import { BrowserRouter as Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

class ColumnLeftBelowComponent extends Component {

    componentDidMount(){
        this.props.getPostsIdCategory(this.props.slugPost);
    }
    // constructor(props){
    //     super(props);
    // }
    render() {
        //const imagesSrc = require('../../image/ios.png') ;
        console.log(this.props.postsIdCategory);
        return(
            <div className="col-sm-12">
                { this.props.postsIdCategory.map(item => {
                    return (
                        <div className="row" style={{ borderBottom: "1px solid #e6e6e6" }}>
                            <article>
                                <img src={item.thumbnail} width="70px;" height="70px;" alt="" style={{ float: 'left'}}/>
                                <a href={'/post/' + item.slug.NameSlug } style={{ textDecoration: 'none', color: 'black' }}>{ item.title }</a>
                            </article>
                        </div>
                    );
                })}
            </div>
        );
    }
}
    const mapStateToProps = state => ({
        categories: state.categories,
        categoryParents: state.categoryParents,
        posts: state.posts,
        postDetail: state.postDetail,
        postsIdCategory: state.postsIdCategory
      });

export const ColumnLeftBelow = connect(mapStateToProps, actionCreators)(ColumnLeftBelowComponent);
