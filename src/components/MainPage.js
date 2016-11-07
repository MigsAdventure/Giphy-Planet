import React, { Component } from 'react';
import { connect } from 'react-redux';
import InputForm from './InputForm';
import ResultsTable from './ResultsTable';

class MainPage extends Component {
  render() {
    let { allPics} = this.props;
    return (
      <div>
        <InputForm />
        <ResultsTable results={allPics} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  allPics: state.gifsReducer,
});


export default connect(mapStateToProps)(MainPage);
