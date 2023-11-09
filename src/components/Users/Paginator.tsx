import React, {FC, useState} from 'react';
import cn from "classnames"
import styles from "./Paginator.module.css"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


type PaginatorType = {
    totalItemsCount: number
    pageSize: number
    currentPage: number
    setCurrentPage: (pageNumber: number) => void
    portionSize: number
}

export const Paginator: FC<PaginatorType> = (
    {
        totalItemsCount,
        pageSize,
        currentPage,
        setCurrentPage,
        portionSize,
    }) => {


    let pagesCount = Math.ceil(totalItemsCount / pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return <div className={styles.paginator}>
        {portionNumber > 1 &&
            <ArrowBackIosNewIcon
                onClick={() => {
                    setPortionNumber(portionNumber - 1)
                }}
            ></ArrowBackIosNewIcon>}


        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span className={cn({
                    [styles.selectedPage]: currentPage === p
                }, styles.pageNumber)}
                             key={p}
                             onClick={e => {
                                 setCurrentPage(p)
                             }}>{p}</span>
            })
        }
        {portionCount > portionNumber &&

            <ArrowForwardIosIcon
                onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}
            ></ArrowForwardIosIcon>
        }
    </div>
};


// export const Paginator = (props: UsersType) => {
//
//     let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
//
//     let pages = []
//     for (let i = 1; i <= pagesCount; i++) {
//         pages.push(i)
//     }
//
//     return<div>
//         {pages.map(p => {
//             return <span
//                 className={props.currentPage === p ? styles.selectedPage : ''}
//                 onClick={(e) => {
//                     props.setCurrentPage(p)
//                 }}
//             >{p}</span>
//         })}
//     </div>
// };
