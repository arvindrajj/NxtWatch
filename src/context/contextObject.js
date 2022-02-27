import React from 'react'

const ThemeAndSavedVideosContext = React.createContext({
  isDarkTheme: false,
  savedVideosList: [],
  selectedOption: '',
  changeTheme: () => {},
  addSavedVideos: () => {},
  removeSavedVideos: () => {},
  changeOption: () => {},
})

export default ThemeAndSavedVideosContext
