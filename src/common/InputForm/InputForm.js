import React from 'react';
import './inputForm.scss';

const InputForm = ({value, onChange, childrenLabel, typeInput, nameInput, placeholderInput}) => {
    return (
        <div className='cont-inputForm'>
            <label className='label'>
                {childrenLabel || 'example:'}
            </label>
            <input 
            value={value}
            onChange={onChange}
            className='input' 
            type={typeInput || 'text'} 
            name={nameInput || 'name'}
            placeholder={placeholderInput || 'example'}
            >
            </input>
        </div>
    )
}

export default InputForm