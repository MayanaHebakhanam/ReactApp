import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from './colors';
import { Component} from 'react';


const CardLabel=styled.span`
color: #5843e4;
font-size: 22px;
font-weight:bold;
`
const CardWrapper=styled.div`
display: flex;
flex-direction: column;
padding: 15px;
background-color: ${colors.backgroundLight};
border-radius: 30px;
width: 350px;
transition: 200ms;
&:hover{
cursor: pointer;
box-shadow: 2px 2px 10px #e2e3e9;
}
`

const CardTitle = styled.div`
font-size: 22px;
font-weight: normal;
align-self: center;
height: 25px;
display: flex;
align-items: center;
`
const CardImage= styled.img`
height: 80px;
width: 80px;
border-radius: 50%;
`

class Card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isFavorite: false,
    }
  }

  setFavorite = () => {
    this.setState({ isFavorite: !this.state.isFavorite })
  }

  render() {
    const { theme, picture, label, title } = this.props
    const { isFavorite } = this.state
    const star = isFavorite ? '⭐️' : ''

    return (
      <CardWrapper theme={theme} onClick={this.setFavorite}>
        <CardLabel theme={theme}>{label}</CardLabel>
        <CardImage src={picture} alt="freelancer" />
        <CardTitle >
          {star} {title} {star}
        </CardTitle>
      </CardWrapper>
    )
  }
}
Card.propTypes={
    label: PropTypes.string,
    title: PropTypes.string.isRequired,
    picture: PropTypes.string,
}

Card.defaultProps={
    title:"Employee",
}

export default Card;