import './IconTextBlock.css'

type Props = {
    label: string
}

export default function IconTextBlock({label}: Props) {
    return(
        <div className='containerIconTextBlock'>
            <img src={require('../../../images/icon-list.svg').default} className='image' />

            <div className='text'>
                {label}
            </div>
        </div>
    )
}