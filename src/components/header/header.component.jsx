import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg' 
import {auth} from '../../firebase/firebase.utils.js'
import {connect} from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component.jsx'
import CartDropdown from '../cart-dropdown/cart-dropdown.component.jsx'
import {selectCurrentUser} from '../../redux/user/user.selectors.js'
import {createStructuredSelector} from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'

const Header = ({currentUser, hidden}) => (
    <HeaderContainer>
            <LogoContainer to='/'> 
                <Logo className='logo'/>
            </LogoContainer>
        <OptionsContainer>
            <OptionLink to='/shop'>Shop</OptionLink>
            <OptionLink to='/contact'>Contact</OptionLink>
            {currentUser? 
            <OptionLink as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink> :
            <OptionLink to='/signin'>Sign In</OptionLink>}
            <CartIcon/>
        </OptionsContainer>
        {
            hidden ? null : 
            <CartDropdown/>
        }
    </HeaderContainer>
)

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header)