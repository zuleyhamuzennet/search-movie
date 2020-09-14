import React, { Component, select } from 'react';

import { connect } from 'react-redux';

import {
  searchMovie,
  fetchMovies,
  searchTv,
  fetchTvs,
  setLoading
} from '../../actions/searchActions';

export class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'All',
      year: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount(){
    this.props.fetchMovies("POKEMON");
  }

  

  onChange = e => {
    this.props.searchMovie(e.target.value);
  };

  onYearChange = e =>{
    this.setState({year: e.target.value})
  }
  

  onSubmit = e => {
    e.preventDefault();
    if(this.state.value== 'Movie'){
      this.props.this.props.fetchMovies(this.props.text);
    }
    else if(this.state.value== 'TV'){
    }
    else{
      this.props.fetchMovies(this.props.text);
    }
    this.props.setLoading();
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }


  render() {
    return (
      <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search Movie or TV series 
          </h1>
          <form id="searchForm" onSubmit={this.onSubmit}>
                <div>
                <label>
                  <select value={this.state.value} onChange={this.handleChange}>
                    <option value="All">Hepsi</option>
                    <option value="Movıe">Film</option>
                    <option value="TV">Dizi</option>
                  </select>
              </label>
              </div>
              <div >
                <input
                  type="text"
                  className="form-control"
                  name="searchText"
                  placeholder="Search Movies, TV Series"
                  onChange={this.onChange}
                />
              </div>
            
            
            <button type="submit" className="btn btn-primary btn-bg mt-3">
              Search
            </button>
          </form>
          
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.movies.text,
  year: state.year,
});

export default connect(
  mapStateToProps,
  { searchMovie, fetchMovies, setLoading }
)(SearchForm);
