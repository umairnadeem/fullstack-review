import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import RepoList from './components/RepoList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      repos: [],
      newEntries: 0
    }
    this.loadRepos = this.loadRepos.bind(this);
  }

  componentDidMount() {
    window.addEventListener('load', this.loadRepos);
  }

  loadRepos() {
    $.ajax({
      method: 'GET',
      url: '/repos',
      success: repos => {
        this.setState({repos})
        console.log('load')
      }
    });
    
  }

  search (term) {
    console.log(`${term} was searched`);
    // TODO
    $.ajax({
      method: 'POST',
      url: '/repos',
      data: {term},
      success: (newEntries) => {
        this.loadRepos();
        this.setState({newEntries});
      }
    });
  }

  render () {
    return (<div>
      <h1>Github Fetcher</h1>
      <RepoList repos={this.state.repos} newEntries={this.state.newEntries}/>
      <Search onSearch={this.search.bind(this)}/>
    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));