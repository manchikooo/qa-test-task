import React, {useState} from 'react';
import styles from "./PacksPage.module.scss";
import Pack from "./Pack/Pack";
import {testArr} from "../../testArr";
import {usePagination} from "../../hooks/usePagination";
import {Select} from "../Select/Select";

export const PacksPage = () => {

    const [contentPerPage, setContentPerPage] = useState<number>(10)

    const {
        firstContentIndex,
        lastContentIndex,
        nextPage,
        prevPage,
        page,
        setPage,
        totalPages,
    } = usePagination({
        contentPerPage,
        count: testArr.length,
    });

    const contentPerPageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        // setContentPerPage(e)
        console.log(e)
    }

    return (
        <>
            <div className={styles.tableWrapper}>
                <table>
                    <thead>
                    <tr>
                        <th
                            // onClick={(e) => sortHandler(e, 'name', setNameDir, setSortName, sortName)}
                            data-sort='name'
                            className={styles.nameCol}>
                            Номер / Дата &ensp;
                            {/*<FontAwesomeIcon icon={nameDir}/>*/}
                        </th>
                        <th
                            // onClick={(e) => sortHandler(e, 'cardsCount', setCountDir, setSortCount, sortCount)}
                            data-sort='cardsCount'
                            className={styles.cardsCountCol}>
                            Тип задания / Автор &#9662; &ensp;
                            {/*<FontAwesomeIcon icon={countDir}/>*/}
                        </th>
                        <th
                            // onClick={(e) => sortHandler(e, 'updated', setUpdatedDir, setSortUpdate, sortUpdate)}
                            data-sort='updated'
                            className={styles.updatedCol}>
                            Аккаунт / Терминал &#9652; &ensp;
                            {/*<FontAwesomeIcon icon={updatedDir}/>*/}
                        </th>
                        <th
                            // onClick={(e) => sortHandler(e, 'created', setCreatedDir, setSortCreate, sortCreate)}
                            data-sort='created'
                            className={styles.userNameCol}>
                            Статус &ensp;
                            {/*<FontAwesomeIcon icon={createdDir}/>*/}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {testArr.slice(firstContentIndex, lastContentIndex).map((t) => <Pack key={t.id} data={t}/>)}
                    </tbody>
                </table>
            </div>
            <div className="pagination">
                <p className="text">
                    {page}/{totalPages}
                </p>
                <button onClick={prevPage} className="page">
                    &larr;
                </button>
                {/* @ts-ignore */}
                {[...Array(totalPages).keys()].map((el) => (
                    <button
                        onClick={() => setPage(el + 1)}
                        key={el}
                        className={`page ${page === el + 1 ? "active" : ""}`}
                    >
                        {el + 1}
                    </button>
                ))}
                <button onClick={nextPage} className="page">
                    &rarr;
                </button>
               {/*<Select options={testArr}*/}
               {/*        value={10}*/}
               {/*        onChangeOption={contentPerPageHandler}/>*/}
            </div>
        </>
    );
};
