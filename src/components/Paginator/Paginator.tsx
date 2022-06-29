import React, {Dispatch, SetStateAction} from 'react';
import {Select} from "../Select/Select";
import styles from './Paginator.module.scss'

type PaginatorPropsType = {
    nextPage: () => void
    prevPage: () => void
    page: number
    setPage: (num: number) => void
    totalPages: number
    contentPerPage: number
    setContentPerPage: Dispatch<SetStateAction<number>>
}

export const Paginator = (
    {
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
        contentPerPage,
        setContentPerPage
    }: PaginatorPropsType) => {

    const itemsCounts = [10, 20, 30, 40, 50, 100];

    return (
        <div className={styles.pagination}>
            <button onClick={prevPage} className={`${styles.page} ${styles.navPageButton}`}>
                Prev Page
            </button>
            {/* @ts-ignore */}
            {[...Array(totalPages).keys()].map((el) => (
                <button
                    onClick={() => setPage(el + 1)}
                    key={el}
                    className={`${styles.page} ${page === el + 1 ? "active" : ""}`}
                >
                    {el + 1}
                </button>
            ))}
            <button onClick={nextPage} className={`${styles.page} ${styles.navPageButton}`}>
                Next Page
            </button>
            <Select options={itemsCounts}
                    value={contentPerPage}
                    onChangeOption={setContentPerPage}/>
        </div>
    );
};
