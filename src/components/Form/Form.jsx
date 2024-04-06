import React from 'react';
import './Form.css';

const Form = () => {
    return (
    <div className={'form'}>
        <h3>Введите ваши данные</h3>
        <input className={'input'} type="text" placeholder={'Страна'}/>
        <input className={'input'} type="text" placeholder={'Улица'}/>
        <select className={'select'}>
            <option value={"physical"}>Физ. Лицо</option>
            <option value={"legal"}>Юр. Лицо</option>
        </select>
    </div>
    );
};

export default Form;