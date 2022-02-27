import {FaMoon} from 'react-icons/fa'
import {BiSun} from 'react-icons/bi'
import {withRouter} from 'react-router-dom'
import LogoutPopup from '../LogoutPopup'
import ThemeAndSavedVideosContext from '../../context/contextObject'
import {
  HeaderBgContainer,
  HeaderLogo,
  ThemeIconContainer,
  ProfileIcon,
} from './styledComponents'

const Header = () => (
  <ThemeAndSavedVideosContext.Consumer>
    {value => {
      const {isDarkTheme, changeTheme} = value
      const onClickChangeTheme = () => {
        changeTheme()
      }
      return (
        <HeaderBgContainer isDarkTheme={isDarkTheme}>
          <HeaderLogo
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            }
            alt="website logo"
          />
          <ThemeIconContainer
            isDarkTheme={isDarkTheme}
            type="button"
            data-testid="theme"
            onClick={onClickChangeTheme}
          >
            {isDarkTheme ? <BiSun /> : <FaMoon />}
          </ThemeIconContainer>
          <ProfileIcon
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
            alt="profile"
          />
          <LogoutPopup isDarkTheme={isDarkTheme} />
        </HeaderBgContainer>
      )
    }}
  </ThemeAndSavedVideosContext.Consumer>
)

export default withRouter(Header)
