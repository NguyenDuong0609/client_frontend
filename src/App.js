import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
//import axios from 'axios';
import { connect } from 'react-redux';
// import component Layout
import { HeaderComponent } from './layouts/Header';
import { Navbar } from './layouts/Navbar';
import { FooterComponent } from './layouts/Footer';
import { Index } from './pages/index/Index';
import { CategoryParent } from './pages/categoryParent/CategoryParent';
import { Post } from './pages/post/Post';
import { Category } from './pages/category/Category';
import { Tags } from './pages/tags/Tag';

import * as actionCreators from './redux/actionCreators';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    this.props.getCategories();
    this.props.getCategoryParents();
    this.props.getPosts();
  }

  render() {
    // const result = 'ok';
    // đã get được data categories từ data gán vào state
    // nghiên cứu áp dụng redux
    // đã cài redux và get data
    //console.log(this.props.categoryParents);
    //const imageSrc = require('./image/ios.png') ;
    return (
      <Router>
          {/* {  this.props.postFollowCategory.forEach(element => {
      console.log(element.title + 'ok');
    }) } */}
        <div className="container-fluid" style={{ backgroundColor: '#f0f0f0'}}>
        {/* header */}
        <HeaderComponent/>
        {/* header */}

        {/* navbar */}
        <Navbar/>
        {/* <Index/> */}
        {/* navbar */}

        {/* container */}
        {/* <IndexComponent imageSrc={ imageSrc }/> */}
        {/* <CategoryComponent/> */}
        {/* <PostComponent/> */}
        <Route exact path="/" component={ Index }/>
        <Route path="/categoryParent/:slugCate" component={ CategoryParent } />
        <Route path="/post/:slugPost" component={ Post }/>
        <Route path="/category/:slugcategory" component={ Category }/>
        <Route path="/tag/:slugtag" component={ Tags }/>
        {/* container */}

        {/* footer */}
        <FooterComponent/>
        {/* footer */}
      </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.categories,
  categoryParents: state.categoryParents,
  posts: state.posts,
  postsFollowCateParent: state.postsFollowCateParent,
  postFollowCategory: state.postFollowCategory
});

export default connect(mapStateToProps, actionCreators)(App);
