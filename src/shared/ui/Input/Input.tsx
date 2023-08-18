import { classNames } from 'shared/lib/classNames/classNames';
import React, { InputHTMLAttributes, memo, useRef } from 'react';
import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>

interface InputProps extends HTMLInputProps{
    className?: string;
    value?: string;
    onChange?: (value:string) => void;
    placeholder?: string;
}

export const Input = memo((props:InputProps) => {
    const {
        className,
        value,
        onChange,
        type = 'text',
        placeholder,
        ...otherProps
    } = props;
    const ref = useRef<HTMLInputElement>(null);
    const onChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    return (
        <div className={classNames(cls.InputWrapper, {}, [className])}>
            <div className={cls.placeholder}>
                {placeholder}
            </div>
            <input
                ref={ref}
                className={cls.input}
                type={type}
                value={value}
                onChange={onChangeHandler}
                {...otherProps}
            />
        </div>
    );
});
