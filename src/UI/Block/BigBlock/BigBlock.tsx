import './BigBlock.css'

export default function BigBlock({children}: any) {
    return(
        <div className='containerBigBlock'>
            {children}
        </div>
    )
}