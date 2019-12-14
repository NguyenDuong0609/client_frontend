import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../../redux/actionCreators';

import {  ColumnLeftBelow } from './columnLeftBelow';
import axios from 'axios';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class ColumnLeftComponent extends Component {

    componentDidMount(){
        this.props.getPostDetail(this.props.slugPost);
        axios.get('http://localhost:7000/api/get-all-tags-idPost/'+this.props.slugPost)
             .then(response => {
                 console.log(response);
                this.setState({ tags: response.data });
             }).catch( err => console.log(err));
    }
    constructor(props){
        super(props);
        this.state = {
            tags: []
        };
    }

    getListPostFeature(item) {
        if(item.view_feature === true)
            return (
                    <article style={{ borderBottom: '1px solid #e6e6e6'}}>
                        <img src={item.thumbnail} width="80px;" alt="" style={{ float: 'left'}}/>
                        <a href={'/post/' + item.slug } style={{ textDecoration: 'none', color: 'black' }}>{ item.title }</a>
                    </article>
            );
    }

    render() {
        //const imagesSrc = require('../../image/ios.png') ;
        return(
            // <div className="col-sm-9">
            //         { this.props.postDetail.map(item => {
            //             return (
            //                 <div>
            //                     {parse(item.content)}
            //                 </div>
            //             );
            //         })}
            //         <div style={{ borderBottom: '1px solid #e1e1e1', margin: '15px 0'}}>
            //             <span style={{ borderTop: '1px solid #e1e1e1', width: '100%', display: 'inline-block', lineHeight: '28px'}}>
            //                 <span style={{ padding: '4px 10px'}}>
            //                 <i className="fa fa-tags"></i>
            //                 <span style={{ 'font-weight': 'bold'}}>Tag:</span>
            //                     { this.state.tags.map(item => {
            //                         return (<Link to={'/tag/'+ item.slug } style={{ 'textDecoration': 'none', 'color': '#ed143d', 'padding': '3px 8px'}}>{ item.name }</Link>);
            //                     })}
            //                 </span>
            //             </span>
            //         </div>
            //         <h3 style={{ borderBottom: '3px solid #2e439c'}}>Bài viết liên quan</h3>
            //         { this.props.postDetail.map(item => {
            //             return (
            //                 <ColumnLeftBelow slugPost={item.slug.NameSlug }/>
            //             );
            //         })}
            // </div>
            <div className="row shadow-sm p-3 mb-5 bg-white rounded">
                <div className="col-md-8">
                { this.props.postDetail.map(item => {
                    return (
                        <div className="card mb-3">
                            {parse(item.content)}
                        </div>
                    );
                })}
                <div style={{ borderBottom: '1px solid #e1e1e1', margin: '15px 0'}}>
                    <span style={{ borderTop: '1px solid #e1e1e1', width: '100%', display: 'inline-block', lineHeight: '28px'}}>
                        <span style={{ padding: '4px 10px'}}>
                            <i className="fa fa-tags"></i>
                            <span style={{ 'font-weight': 'bold'}}>Tag:</span>
                                { this.state.tags.map(item => {
                                    return (<Link to={'/tag/'+ item.slug } style={{ 'textDecoration': 'none', 'color': '#ed143d', 'padding': '3px 8px'}}>{ item.name }</Link>);
                                })}
                        </span>
                    </span>
                </div>
                </div>
                <div className="col-md-4">
                    <div className="list-group">
                        <Link href="#" className="list-group-item list-group-item-action">
                        <h3>Bài viết xem nhiều</h3>
                        </Link>
                        { this.props.posts.map(item => this.getListPostFeature(item))}
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
    postsIdCategory: state.postsIdCategory
  });

export const ColumnLeft = connect(mapStateToProps, actionCreators)(ColumnLeftComponent);
