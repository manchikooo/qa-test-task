import React from 'react';
import {useNavigate} from "react-router-dom";
import styles from './PackPage.module.scss'

export const PackPage = () => {
    const navigate = useNavigate()
    return (
        <div className={styles.back} onClick={() => navigate(-1)}>
            Вернуться назад
        </div>
    );
};
