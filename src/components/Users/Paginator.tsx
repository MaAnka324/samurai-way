import React from 'react';
import {UsersType} from "./UsersContainer";
import styles from './Users.module.css'


export const Paginator = (props: UsersType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return<div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p ? styles.selectedPage : ''}
                    onClick={(e) => {
                        props.setCurrentPage(p)
                    }}
                >{p}</span>
            })}
        </div>
};
