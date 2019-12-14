import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../redux/actionCreators';
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {

    constructor(props) {
        super(props);
        console.log(this.props.categories);
    }
    getCategories() {
        const { categories } = this.props;
        return categories.map(cate =>
             <li className="nav-item">
                <a className="nav-link" href={'/category/' + cate.slug.NameSlug } tabIndex="-1" aria-disabled="true">{ cate.name }</a>
            </li>
        );
    }
    render() {
        return (
            <div class="row">
                <div class="col-md-12">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand" href="/">Home</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div class="navbar-nav">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        { this.getCategories() }
                        </ul>
                    </div>
                    </div>
                </nav>
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

  export const Navbar = connect(mapStateToProps, actionCreators)(NavbarComponent);
