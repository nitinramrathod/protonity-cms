"use client"
import styled from '@emotion/styled'
import React from 'react'

const Card = styled.div`
  background-color: #2d2d2d;
  padding: 20px;
  border-radius: 10px;
  max-width: fit-content;
  margin: 10px;
`

const UserCard = ({
    username,
    email,
    password
}) => {
  return (
    <Card>
        <h2>{username}</h2>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
    </Card>
  )
}

export default UserCard;