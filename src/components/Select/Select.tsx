import {ChangeEvent, DetailedHTMLProps, SelectHTMLAttributes} from "react";
import styles from './Select.module.scss'

type DefaultSelectPropsType = DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>

type SuperSelectPropsType = DefaultSelectPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

export const Select = ({
                           options, value,
                           onChange, onChangeOption,
                           ...restProps
                       }: SuperSelectPropsType) => {
    const mappedOptions: any[] = options ? options.map(o => <option value={o} key={o}>{o}</option>) : []; // map options with key

    const onChangeCallback = (e: ChangeEvent<HTMLSelectElement>) => {
        onChange && onChange(e)
        onChangeOption && onChangeOption(e.currentTarget.value)
    }

    return (
        <select
            className={styles.select}
            value={value} onChange={onChangeCallback} {...restProps}>
            {mappedOptions}
        </select>
    )
}