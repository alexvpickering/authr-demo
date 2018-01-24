import React from 'react'
import Input from './Input.js'
import InputLabel from './InputLabel.js'
import InputError from './InputError.js'

const InputGroup = ({ type, label, name, value, error, onChange }) => {
    return(
      <InputLabel error={error}>
        {`${label}:`}
        <Input
          type={type}
          name={name}
          value={value}
          error={error}
          onChange={onChange}
        />
        <InputError error={error}>
          {error}
        </InputError>
      </InputLabel>
    )
}

export default InputGroup
