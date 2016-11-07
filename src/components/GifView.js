import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getGif } from '../actions/PicActions';

class GifView extends Component {
  constructor() {
    super();
  }

  componentWillMount(){
    this.props.getGif(this.props.params.id);
  }

  render() {
    let oneGif = this.props.singlePic.data || [];
    return(
      <div >
        <div>
          <h3>Slug: {oneGif.slug}</h3>
          <h3>Rating: {oneGif.rating}</h3>
          <h3>Url: {oneGif.url}</h3>
          <img src={oneGif.images.downsized_large.url} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  singlePic: state.oneGifReducer,
});

const mapDispatchToProps = dispatch => ({
  getGif(gif) {
    dispatch(getGif(gif));
  },

});

export default connect(mapStateToProps, mapDispatchToProps)(GifView);
