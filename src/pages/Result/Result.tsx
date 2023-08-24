import SmallBlock from '../../UI/Block/SmallBlock/SmallBlock'
import Button from '../../UI/Button/Button'
import './Result.css'
import { useNavigate } from 'react-router-dom'

type Props = {
    email: string
}

export default function Result({email}: Props) {
    const navigate = useNavigate()
    
    const onClick = () => {
        navigate('/', {replace: true})
    }

    return (
        <SmallBlock>
            <div className='resultContainer'>
                <img src={require('../../images/icon-success.svg').default} className='resultImage' />

                <div className='resultSpace'/>

                <p className='title'>
                    Thanks for subscribing!
                </p>

                <div className='resultSpace'/>

                <p className='text'>
                    A confirmation email has been sent to <b>{email}</b>. Please open it and click the button inside to confirm your subscription.
                </p>

                <div className='resultButtonSpace'/>

                <Button
                    label='Dismiss message'
                    onClick={onClick}
                />
            </div>
        </SmallBlock>
    )
}