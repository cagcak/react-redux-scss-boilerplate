import React from 'react';
import { connect } from 'react-redux'

import './App.scss';
import logo from './logo.svg';

import { fetchData } from '../store/actions/data/fetch'


class AppRoot extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchData())
  }


  render() {
    const { error, loading, data } = this.props

    if (error) {
      return <div>Error {error.message}</div>
    }

    if (loading) {
      return <div>Loading...</div>
    }

    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            {
              data.map(d => (
                <li key={d.id}>
                  {d.name}
                </li>
              ))
            }
          </ul>
        </header>
      </div>
    )
  }

}

const mapStateToProps = state => ({
  data: state.data.data,
  loading: state.data.loading,
  error: state.data.error
})

export default connect(mapStateToProps)(AppRoot)
