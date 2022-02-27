import {MdPlaylistAdd} from 'react-icons/md'
import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import TrendingVideoCard from '../TrendingVideoCard'
import ThemeAndSavedVideosContext from '../../context/contextObject'

import {
  SavedVideosBgContainer,
  SavedVideosListContainer,
  SavedVideosList,
  SavedVideosHeadingContainer,
  SavedVideosIconContainer,
  SavedVideosHeading,
  LoaderBgContainer,
  FailureViewImage,
  ErrorText,
  ErrorDescription,
} from './styledComponents'

const SavedVideosRoute = () => {
  const savedVideosList = []
  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const renderHeading = () => (
          <SavedVideosHeadingContainer isDarkTheme={isDarkTheme}>
            <SavedVideosIconContainer isDarkTheme={isDarkTheme}>
              <MdPlaylistAdd />
            </SavedVideosIconContainer>
            <SavedVideosHeading isDarkTheme={isDarkTheme}>
              Saved Videos
            </SavedVideosHeading>
          </SavedVideosHeadingContainer>
        )

        const renderGamingPageFailureView = () => (
          <LoaderBgContainer>
            <FailureViewImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <ErrorText isDarkTheme={isDarkTheme}>
              No saved videos found
            </ErrorText>
            <ErrorDescription>
              You can save your videos while watching them
            </ErrorDescription>
          </LoaderBgContainer>
        )

        const renderVideosList = () => (
          <SavedVideosList>
            {savedVideosList.map(eachItem => (
              <TrendingVideoCard
                isDarkTheme={isDarkTheme}
                videoCard={eachItem}
                key={eachItem.id}
              />
            ))}
          </SavedVideosList>
        )

        return (
          <div data-testid="savedVideos">
            <Header />
            <SavedVideosBgContainer isDarkTheme={isDarkTheme}>
              <SideBarMenu />
              {savedVideosList.length === 0 ? (
                renderGamingPageFailureView()
              ) : (
                <SavedVideosListContainer>
                  {renderHeading()}
                  {renderVideosList()}
                </SavedVideosListContainer>
              )}
            </SavedVideosBgContainer>
          </div>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}

export default SavedVideosRoute
