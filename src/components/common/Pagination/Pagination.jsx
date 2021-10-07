import React, {useState} from 'react'
import cl from './Pagination.module.css'

let Pagination = ({portionSize = 10,...props}) => {
    let pagesCount = Math.ceil(props.pagesCount / props.pagesSize)
    let pages = []
    for (let i = 1; i < pagesCount; i++) pages.push(i)

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(Math.ceil(props.currentPage / 10))
    let leftPositionNum = (portionNumber - 1) * portionSize + 1
    let rightPositionNum = portionNumber * portionSize
    return (
    <div className={cl.paginator}>
        {portionNumber > 1 && <button onClick={() =>{setPortionNumber(portionNumber - 1)}}>previos</button>}
        {
            pages.slice(leftPositionNum - 1, rightPositionNum - 1).map( page => {
                return <button className={props.currentPage === page && cl.currentPage}
                               onClick={() => {
                                   props.onChangePages(page)
                               }}>{page}</button>
            })
        }
        {portionCount > portionNumber && <button onClick={() => {
            setPortionNumber(portionNumber + 1)
        }}>NEXT</button> }
        <button onClick={() => {
            setPortionNumber(Math.ceil(pagesCount / 10))
        }}>END</button>

    </div>
    )
}
export default Pagination