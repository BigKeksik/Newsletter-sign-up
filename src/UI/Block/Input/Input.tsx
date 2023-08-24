import { useState } from 'react'
import './Input.css'

type Props = {
    label: string,
    placeholder: string,
    error: boolean,
    onChangeText: (text: string) => any,
}

export default function Input({label, placeholder, error, onChangeText} : Props) {
    const [email, setEmail] = useState('')
    
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
        onChangeText(e.target.value)
    }

    return(
        <div className='inputContainer'>
            <div className='textInputContainer'>
                <p className='label'>
                    {label}
                </p>
                
                {error &&
                    <p className='errorLabel'>
                        Valid email required
                    </p>
                }
            </div>
            

            <input 
                className={error ? 'errorInput' : 'input'}
                placeholder={placeholder}
                value={email}
                onChange={handleChange}
            />
        </div>
    )
}