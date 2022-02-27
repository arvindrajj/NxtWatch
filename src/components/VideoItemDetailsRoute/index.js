import {Component} from 'react'
import Cookies from 'js-cookie'
import {BiLike, BiDislike} from 'react-icons/bi'
import {MdPlaylistAdd} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import SideBarMenu from '../SideBarMenu'
import ThemeAndSavedVideosContext from '../../context/contextObject'

import {
  VideoDetailedBgContainer,
  ReactPlayerElement,
  VideoPlayerContainer,
  LikeAndSaveContainer,
  VideoTitle,
  VideoDetailsViewsAndTime,
  ButtonsContainer,
  HorizontalLine,
  UserActionButton,
  UserActionIconContainer,
  ChannelContainer,
  ChannelImage,
  ChannelName,
  SubscribersCount,
  Description,
  LoaderBgContainer,
} from './styledComponents'

const status = {
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class videoItemDetailsRoute extends Component {
  state = {
    videoDetails: {},
    loadingStatus: status.loading,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)

    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        viewCount: data.video_details.view_count,
        videoUrl: data.video_details.video_url,
        description: data.video_details.description,
      }

      this.setState({videoDetails: updatedData, loadingStatus: status.success})
    } else {
      this.setState({loadingStatus: status.failure})
    }
  }

  render() {
    const {loadingStatus, videoDetails} = this.state
    const {
      videoUrl,
      title,
      viewCount,
      publishedAt,
      channel,
      description,
    } = videoDetails
    return (
      <ThemeAndSavedVideosContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const renderVideoPlayer = () => (
            <ReactPlayerElement controls url={videoUrl} width="100%" />
          )
          const renderLoader = () => (
            <LoaderBgContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDarkTheme ? '#ffffff' : '#3b82f6'}
                height="50"
                width="50"
              />
            </LoaderBgContainer>
          )
          const renderVideoDetails = () => (
            <>
              <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
              <LikeAndSaveContainer>
                <VideoDetailsViewsAndTime>
                  {viewCount} views . {publishedAt} years ago
                </VideoDetailsViewsAndTime>
                <ButtonsContainer>
                  <UserActionButton>
                    <UserActionIconContainer>
                      <BiLike />
                    </UserActionIconContainer>
                    Like
                  </UserActionButton>
                  <UserActionButton>
                    <UserActionIconContainer>
                      <BiDislike />
                    </UserActionIconContainer>
                    Dislike
                  </UserActionButton>
                  <UserActionButton>
                    <UserActionIconContainer>
                      <MdPlaylistAdd />
                    </UserActionIconContainer>
                    Save
                  </UserActionButton>
                </ButtonsContainer>
              </LikeAndSaveContainer>
            </>
          )

          const renderChannelDetails = () => (
            <ChannelContainer>
              <ChannelImage src={channel.profileImageUrl} alt="channel logo" />
              <div>
                <ChannelName isDarkTheme={isDarkTheme}>
                  {channel.name}
                </ChannelName>
                <SubscribersCount>
                  {channel.subscriberCount} subscribers
                </SubscribersCount>
                <Description isDarkTheme={isDarkTheme}>
                  {description}
                </Description>
              </div>
            </ChannelContainer>
          )
          return (
            <div data-testid="videoItemDetails">
              <Header />
              <VideoDetailedBgContainer isDarkTheme={isDarkTheme}>
                <SideBarMenu />

                <VideoPlayerContainer>
                  {loadingStatus === status.loading ? (
                    renderLoader()
                  ) : (
                    <div>
                      {renderVideoPlayer()}
                      {renderVideoDetails()}
                      <HorizontalLine />
                      {renderChannelDetails()}
                    </div>
                  )}
                </VideoPlayerContainer>
              </VideoDetailedBgContainer>
            </div>
          )
        }}
      </ThemeAndSavedVideosContext.Consumer>
    )
  }
}

export default videoItemDetailsRoute
