import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const GameCardBgContainer = styled.li`
  padding: 40px 16px 0 0;
`
export const GameCardImage = styled.img`
  width: 200px;
  margin-bottom: 12px;
`
export const GameCardVideoTitle = styled.h1`
  font-family: Roboto;
  font-size: 13px;
  color: ${props => (props.isDarkTheme ? '#ebebeb' : '#1e293b')};
  font-weight: ${props => (props.isDarkTheme ? '400' : '500')};
  margin: 0 0 4px;
`
export const GameCardVideoCount = styled.p`
  font-family: Roboto;
  font-size: 12px;
  color: #64748b;
  font-weight: 500;
  margin: 0 0 12px;
`
export const LinkToRoute = styled(Link)`
  text-decoration: none;
`
