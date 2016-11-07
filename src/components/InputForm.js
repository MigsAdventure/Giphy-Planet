import React, { Component } from 'react';
import { searchGif } from '../actions/PicActions';

import { connect } from 'react-redux';


class InputForm extends Component {
  constructor() {
    super();
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm(e) {
    e.preventDefault();
    const { gifs } = this.refs;
    this.props.searchGif(gifs.value);
  }

  render (){
    return (
      <form onSubmit={this.submitForm}>
        <input type="text" placeholder='Search Gif' ref='gifs' />
        <button className='btn btn-primary'>Search</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  allPics: state.allPics,
});

const mapDispatchToProps = dispatch => ({
  searchGif(gifs) {
    dispatch(searchGif(gifs));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(InputForm);
