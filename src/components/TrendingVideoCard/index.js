import {
  TrendingVideoCardContainer,
  TrendingVideoThumbnail,
  TrendingVideoContent,
  TrendingVideoTitle,
  TrendingVideoChannel,
  LinkToRoute,
} from './styledComponents'

const TrendingVideoCard = props => {
  const {videoCard, isDarkTheme} = props
  const {id, title, thumbnailUrl, channel, viewCount, publishedAt} = videoCard
  return (
    <LinkToRoute to={`/videos/${id}`}>
      <TrendingVideoCardContainer>
        <TrendingVideoThumbnail src={thumbnailUrl} alt="thumbnail" />
        <TrendingVideoContent>
          <TrendingVideoTitle isDarkTheme={isDarkTheme}>
            {title}
          </TrendingVideoTitle>
          <TrendingVideoChannel>{channel.name}</TrendingVideoChannel>
          <TrendingVideoChannel>
            {viewCount} views . {publishedAt}
          </TrendingVideoChannel>
        </TrendingVideoContent>
      </TrendingVideoCardContainer>
    </LinkToRoute>
  )
}

export default TrendingVideoCard
