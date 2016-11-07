import React, { Component } from 'react';
import { connect } from 'react-redux';
import Polaroid from 'polaroid-image';
import { browserHistory } from 'react-router';

export default class ResultsTable extends Component {
  constructor() {
    super();
    this.state = {
      filter: null,
    };
  }


  filterRating() {
    let { filterInput } = this.refs;
    this.setState({
      filter: filterInput.value,
    });
  }

  render() {
    let results = this.props.results.data || [];
    return (

        <div>
          <input type="text" placeholder='Filter By Rating' ref='filterInput' onChange={() => this.filterRating()} />
          {
            this.state.filter ?
            results.map((gif) => {
              if (gif.rating.toLowerCase().includes(this.state.filter.toLowerCase())) {
                return (
                  <div className='polContainer' key={gif.id} data-toggle='modal' data-target='#myModal' onClick={() => browserHistory.push(`/gifview/${gif.id}`) }>
                    <Polaroid imgSrc={gif.images.fixed_width_small.url} zoom='false'  />
                    <h4>Rating: {gif.rating}</h4>
                  </div>
                );
              }
            })
            :
            results.map((gif) => {
              return (
                <div className='polContainer' key={gif.id} data-toggle='modal' data-target='#myModal' onClick={() => browserHistory.push(`/gifview/${gif.id}`)} >
                  <Polaroid imgSrc={gif.images.fixed_width_small.url} zoom='false' />
                  <h4>Rating: {gif.rating}</h4>
                </div>
              );
            })
          }
        </div>
    );
  }
}
