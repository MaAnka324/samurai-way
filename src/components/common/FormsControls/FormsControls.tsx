import React, {FC} from 'react';
import styles from './FormControl.module.css'


// type TextareaType = {
//     input: {}
//     meta: {}
// }

export const FormControl: FC<any> = ({input, meta, child, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : '')}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}


export const Textarea: FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return (<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>)
}


// export const Input: FC<any> = ({input, meta, ...props}) => {
//     return (<FormControl {...props}><input {...input} {...props}/></FormControl>)
// }

export const Input: FC<any> = (props) => {
    const {input, meta, ...restProps} = props
    return (<FormControl {...props}><input {...input} {...restProps}/></FormControl>)
}