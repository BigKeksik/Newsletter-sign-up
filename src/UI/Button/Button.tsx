import './Button.css'

type Props = {
    label: string,
    onClick: () => any
}

export default function Button({label, onClick}: Props) {
    return(
        <div 
            className='buttonContainer'
            onClick={onClick}
        >
            <p className='textButton'>
                {label}
            </p>
        </div>
    )
}