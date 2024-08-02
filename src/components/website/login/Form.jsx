import React from 'react'
import { Wrapper } from './StyledComponents'
import Input from '@/components/common/Input'
import Button from '@/components/common/Button'

const Form = () => {
  return (
    <Wrapper>
        <Input label="Email Id" placeholder='Enter Email Id'/>
        <Input label="Password" type='password' placeholder='Enter Password'/>
        <Button>Login</Button>

    </Wrapper>
  )
}

export default Form