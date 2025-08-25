import Image from '../../../../ui/Image/Image'
import SignInIcon from '../../../../../assets/signIn.png'
import './sign-in-style.scss'

const SignIn = () => {

    const SignInComponent = document.createElement('a')
    SignInComponent.className = 'signIn'

    const text = document.createElement('span')
    text.textContent = 'Вход'
    SignInComponent.appendChild(text)
    SignInComponent.appendChild(Image({src: SignInIcon, className: 'signInImage'}))
    return SignInComponent
}
export default SignIn