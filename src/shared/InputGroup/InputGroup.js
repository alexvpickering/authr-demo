import React from 'react'
import Input from './Input.js'
import InputLabel from './InputLabel.js'
import InputMessage from './InputMessage'

const InputGroup = ({ type, label, name, value, error, success, onChange, onBlur }) => {
    return(
      <InputLabel error={error}>
        {`${label}:`}
        <Input
          type={type}
          name={name}
          value={value}
          error={error}
          onChange={onChange}
          onBlur={onBlur}
        />
        <InputMessage error={error} success={success}>
          {error}{success}
        </InputMessage>
      </InputLabel>
    )
}

export default InputGroup
