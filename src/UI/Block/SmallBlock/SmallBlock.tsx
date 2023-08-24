import './SmallBlock.css'

export default function SmallBlock({children}: any) {
    return(
        <div className='smallBlockContainer'>
            {children}
        </div>
    )
}