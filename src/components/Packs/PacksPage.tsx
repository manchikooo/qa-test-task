import React, {useState} from 'react';
import styles from "./PacksPage.module.scss";
import Pack from "./Pack/Pack";
import {testArr} from "../../testArr";
import {usePagination} from "../../hooks/usePagination";
import {Paginator} from "../Paginator/Paginator";

type ItemType = {
    "id": number,
    "oguid": string,
    "status": string,
    "order_type": {
        "name": string,
        "oguid": string
    },
    "terminal": {
        "name": string,
        "oguid": string
    },
    "account": {
        "name": string,
        "oguid": string
    },
    "created_user": {
        "surname": string,
        "name": string,
        "patronymic": string,
        "oguid": string
    },
    "created_date": number,
}

export const PacksPage = () => {
    const [items, setItems] = useState<Array<ItemType>>(testArr)
    const [sortId, setSortId] = useState<boolean>(false)
    const [sortTask, setSortTask] = useState<boolean>(false)
    const [sortAccount, setSortAccount] = useState<boolean>(false)
    const [sortStatus, setSortStatus] = useState<boolean>(false)

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

    const sortHandler = (sortBy: string, e: React.MouseEvent<HTMLTableHeaderCellElement>) => {
        if (e.currentTarget.dataset.sort === 'id') {
            setSortId(!sortId)
            if (sortId) {
                setItems(items.sort((a, b) => a.id > b.id ? 1 : -1))
            } else {
                setItems(items.sort((a, b) => a.id < b.id ? 1 : -1))
            }
        } else if (e.currentTarget.dataset.sort === 'task') {
            setSortTask(!sortTask)
            if (sortTask) {
                setItems(items.sort((a, b) => a.order_type.name > b.order_type.name ? 1 : -1))
            } else {
                setItems(items.sort((a, b) => a.order_type.name < b.order_type.name ? 1 : -1))
            }
        } else if (e.currentTarget.dataset.sort === 'account') {
            setSortAccount(!sortAccount)
            if (sortAccount) {
                setItems(items.sort((a, b) => a.account.name > b.account.name ? 1 : -1))
            } else {
                setItems(items.sort((a, b) => a.account.name < b.account.name ? 1 : -1))
            }
        } else if (e.currentTarget.dataset.sort === 'status') {
            setSortStatus(!sortStatus)
            if (sortStatus) {
                setItems(items.sort((a, b) => a.status > b.status ? 1 : -1))
            } else {
                setItems(items.sort((a, b) => a.status < b.status ? 1 : -1))
            }
        }
    }

    return (
        <>
            <div className={styles.tableWrapper}>
                <table>
                    <thead>
                    <tr>
                        <th
                            onClick={(e) => sortHandler('id', e)}
                            data-sort='id'>
                            Номер / Дата {sortId ? <span>&#9662;</span> : <span>&#9652;</span>}
                        </th>
                        <th
                            onClick={(e) => sortHandler('task', e)}
                            data-sort='task'>
                            Тип задания / Автор {sortTask ? <span>&#9662;</span> : <span>&#9652;</span>}
                            {/*<FontAwesomeIcon icon={countDir}/>*/}
                        </th>
                        <th
                            onClick={(e) => sortHandler('account', e)}
                            data-sort='account'>
                            Аккаунт / Терминал {sortAccount ? <span>&#9662;</span> : <span>&#9652;</span>}
                        </th>
                        <th
                            onClick={(e) => sortHandler('status', e)}
                            data-sort='status'>
                            Статус {sortStatus ? <span>&#9662;</span> : <span>&#9652;</span>}
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {items.slice(firstContentIndex, lastContentIndex).map((t) => <Pack key={t.id} data={t}/>)}
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
