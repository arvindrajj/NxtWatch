import {Route, Switch, Redirect} from 'react-router-dom'
import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute'

import './App.css'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'
import TrendingRoute from './components/TrendingRoute'
import GamingRoute from './components/GamingRoute'
import SavedVideosRoute from './components/SavedVideosRoute'
import videoItemDetailsRoute from './components/VideoItemDetailsRoute'
import NotFoundRoute from './components/NotFoundRoute'
import ThemeAndSavedVideosContext from './context/contextObject'

class App extends Component {
  state = {isDarkTheme: false, savedVideosList: [], selectedOption: 'HOME'}

  changeTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addSavedVideos = () => {}

  removeSavedVideos = () => {}

  changeOption = option => {
    this.setState({selectedOption: option})
  }

  render() {
    const {isDarkTheme, savedVideosList, selectedOption} = this.state
    return (
      <ThemeAndSavedVideosContext.Provider
        value={{
          isDarkTheme,
          savedVideosList,
          selectedOption,
          changeTheme: this.changeTheme,
          addSavedVideos: this.addSavedVideos,
          removeSavedVideos: this.removeSavedVideos,
          changeOption: this.changeOption,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={TrendingRoute} />
          <ProtectedRoute exact path="/gaming" component={GamingRoute} />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={videoItemDetailsRoute}
          />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={SavedVideosRoute}
          />
          <Route exact path="/not-found" component={NotFoundRoute} />
          <Redirect to="not-found" />
        </Switch>
      </ThemeAndSavedVideosContext.Provider>
    )
  }
}

export default App
