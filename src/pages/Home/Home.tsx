import React, { useState } from 'react';
import './Home.css';
import BigBlock from '../../UI/Block/BigBlock/BigBlock';
import IconTextBlock from '../../UI/Block/IconTextBlock/IconTextBlock';
import Input from '../../UI/Block/Input/Input';
import Button from '../../UI/Button/Button';
import {useNavigate} from 'react-router-dom'

type Props = {
  onClickSubmite: (text: string) => any
}

function Home({onClickSubmite} : Props) {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const onChangeText = (text: string) => {
    setEmail(text)
    setError(false)
  }

  const onClickButton = () => {
    if (!email.includes('@')) {
      setError(true)
      return
    }

    if (!email.slice(email.indexOf('@')).includes('.')) {
      setError(true)
      return
    }
    
    if (email.slice(email.indexOf('@') + 1).includes('@')) {
      setError(true)
      return
    }
    
    if (email.lastIndexOf('.') > email.length - 3) {
      setError(true)
      return
    }

    setError(false)
    onClickSubmite(email)
    navigate('/result', {replace: true})
  }

  return (
    <div className='container'>
      <BigBlock>
        <div className='contentBlock'>
          <div className='imagesBlock' /> 

          <div className='textBlock'>
            <p className='title'>Stay updated!</p>

            <p className='text'>Join 60,000+ product managers receiving monthly updates on:</p>

            <div className='listBlock'>
              <IconTextBlock
                label='Product discovery and building what matters'
              />
              
              <IconTextBlock
                label='Measuring to ensure updates are a success'
              />

              <IconTextBlock
                label='And much more!'
              />
            </div>

            <Input
              label='Email address'
              placeholder='email@company.com'
              error={error}
              onChangeText={onChangeText}
            />

            <Button
              label='Subscribe to monthly newsletter'
              onClick={onClickButton}
            />
          </div>    
        </div>
      </BigBlock>
    </div>
  );
}

export default Home;
