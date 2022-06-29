import React from 'react';
import styles from './Pack.module.scss'
import {useNavigate} from "react-router-dom";

type createdUserType = {
    "surname": string,
    "name": string,
    "patronymic": string,
    "oguid": string
}

export type PackPropsType = {
    data: {
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
        "created_date": number
    }
}
export const Pack = ({data}: PackPropsType) => {

    const navigate = useNavigate()

    const dateHandler = function timeConverter(date_unix: number) {
        const a = new Date(date_unix);
        const year = a.getFullYear();
        const month = a.getMonth() < 10 ? `0${a.getMonth()}` : a.getMonth();
        const date = a.getDate();
        const hour = a.getHours();
        const min = a.getMinutes();
        return date + '.' + month + '.' + year + ' ' + hour + ':' + min;
    }

    const createdUserHandler = (createdUser: createdUserType) => {
        return `${createdUser.surname} ${createdUser.name.substr(0, 1)}.${createdUser.patronymic.substr(0, 1)}.`
    }

    const statusHandler = (status: string) => {
        switch (status) {
            case 'new':
                return 'Новое'
            case 'started':
                return 'Выполняется'
            case 'completed':
                return 'Завершено'
            case 'assigned_to':
                return 'Назначено'
            case 'declined':
                return 'Отменено'
        }
    }

    const openItem = () => {
        navigate(`/item/${data.id}`)
    }

    return (
        <>
            <tr className={styles.packRow} onClick={openItem}>
                <td className={styles.tdItemBlock}>
                    <div className={styles.tdItem}>
                        <span className={styles.name}>№{data.id}</span>
                        <span className={styles.subname}>{dateHandler(data.created_date)}</span>
                    </div>
                </td>
                <td className={styles.tdItemBlock}>
                    <div className={styles.tdItem}>
                        <span className={styles.name}>{data.order_type.name}</span>
                        <span className={styles.subname}>{createdUserHandler(data.created_user)}</span>
                    </div>
                </td>
                <td className={styles.tdItemBlock}>
                    <div className={styles.tdItem}>
                        <span className={styles.name}>{data.account.name}</span>
                        <span className={styles.subname}>{data.terminal.name}</span>
                    </div>
                </td>
                <td className={styles.tdItemBlock}>
                    <div className={styles.tdItem}>
                        <span className={`${styles[data.status]} ${styles.status}`}>{statusHandler(data.status)}</span>
                    </div>
                </td>
            </tr>
        </>
    );
};

export default Pack;