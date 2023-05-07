import {Component} from 'react'

import ConfigurationController from './components/ConfigurationController'

import Layout from './components/Layout'
import ConfigurationContext from './context/ConfigurationContext'

import './App.css'

class App extends Component {
  state = {
    showContent: true,
    showLeftNavbar: true,
    showRightNavbar: true,
  }

  showContent = () => {
    this.setState({
      showContent: true,
      showLeftNavbar: false,
      showRightNavbar: false,
    })
  }

  showLeftNavbar = () => {
    this.setState({
      showContent: false,
      showLeftNavbar: true,
      showRightNavbar: false,
    })
  }

  showRightNavbar = () => {
    this.setState({
      showContent: false,
      showLeftNavbar: false,
      showRightNavbar: true,
    })
  }

  render() {
    const {showContent, showLeftNavbar, showRightNavbar} = this.state
    return (
      <ConfigurationContext.Provider
        value={{
          showContent,
          showLeftNavbar,
          showRightNavbar,
          onToggleShowContent: this.showContent,
          onToggleShowLeftNavbar: this.showLeftNavbar,
          onToggleShowRightNavbar: this.showRightNavbar,
        }}
      >
        <div>
          <ConfigurationController />
          <Layout />
        </div>
      </ConfigurationContext.Provider>
    )
  }
}

export default App
