import React, {useState} from 'react'
import cl from './Pagination.module.css'
import startImage from "../../../images/arrowStart.png"
import nextImage from "../../../images/arrowLeft.png"

let Pagination = ({portionSize = 10,...props}) => {
    let pagesCount = Math.ceil(props.pagesCount / props.pagesSize);
    let pages = [];
    for (let i = 1; i < pagesCount; i++) pages.push(i);

    let portionCount = Math.ceil(pagesCount / portionSize);
    let [portionNumber, setPortionNumber] = useState(Math.ceil(props.currentPage / 10));
    let leftPositionNum = (portionNumber - 1) * portionSize + 1;
    let rightPositionNum = portionNumber * portionSize;
    return (
    <div className={cl.paginator}>

        {portionNumber > 1 && <start>
            <button className={cl.start} onClick={() =>{setPortionNumber(1)}}><img alt={""} src={startImage}/></button>
            <button className={cl.previous} onClick={() =>{setPortionNumber(portionNumber - 1)}}>
                <img alt={""} src={nextImage}/>
            </button>
        </start>}

        {
            pages.slice(leftPositionNum - 1, rightPositionNum).map( page => {
                return <button className={props.currentPage === page && cl.currentPage}
                               onClick={() => {
                                   props.onChangePages(page)
                               }}>{page}</button>
            })
        }

        {portionCount > portionNumber && <>
        <button className={cl.next} onClick={() => {setPortionNumber(portionNumber + 1)}}>
            <img alt={""} src={nextImage}/>
        </button>
        <button className={cl.end} onClick={() => {setPortionNumber(Math.ceil(pagesCount / 10))}}>
            <img alt={""} src={startImage}/>
        </button>
        </>}

    </div>
    )
}
export default Pagination