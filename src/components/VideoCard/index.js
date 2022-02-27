import ThemeAndSavedVideosContext from '../../context/contextObject'

import {
  VideoCardBgContainer,
  VideoCardThumbnail,
  VideoCardContentContainer,
  VideoCardProfileImage,
  VideoCardTitle,
  VideoCardChannel,
  LinkToRoute,
} from './styledComponents'

const VideoCard = props => {
  const {videoCard} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoCard
  return (
    <ThemeAndSavedVideosContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <LinkToRoute to={`/videos/${id}`}>
            <VideoCardBgContainer>
              <VideoCardThumbnail src={thumbnailUrl} alt="thumbnail" />
              <VideoCardContentContainer>
                <VideoCardProfileImage
                  src={channel.profileImageUrl}
                  alt="channel logo"
                />
                <div>
                  <VideoCardTitle isDarkTheme={isDarkTheme}>
                    {title}
                  </VideoCardTitle>
                  <VideoCardChannel>{channel.name}</VideoCardChannel>
                  <VideoCardChannel>
                    {viewCount} views . {publishedAt}
                  </VideoCardChannel>
                </div>
              </VideoCardContentContainer>
            </VideoCardBgContainer>
          </LinkToRoute>
        )
      }}
    </ThemeAndSavedVideosContext.Consumer>
  )
}

export default VideoCard
