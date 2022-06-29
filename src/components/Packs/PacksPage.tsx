import React, {useState} from 'react';
import styles from "./PacksPage.module.scss";
import Pack from "./Pack/Pack";
import {testArr} from "../../testArr";
import {usePagination} from "../../hooks/usePagination";
import {Paginator} from "../Paginator/Paginator";

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
            <Paginator
                nextPage={nextPage}
                prevPage={prevPage}
                page={page}
                setPage={setPage}
                totalPages={totalPages}
                contentPerPage={contentPerPage}
                setContentPerPage={setContentPerPage}
            />
        </>
    );
};
