/* eslint-disable no-constant-condition */

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { GROUP_URL, KEY_FOR_TOKEN_API, URL_ADDRESS } from '../utils/constant'

export const useApi = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({})
  const [products, setProducts] = useState([])
  async function signUp(data) {
    const response = await fetch(`${URL_ADDRESS}signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    const res = await response.json()
    if (response.status === 201) {
      navigate('/signin')
    } else if (response.status === 409 || 400) {
      alert(res.message)
    }
    console.log(res)
    console.log(response.status)
  }

  function dataUser(token) {
    fetch(`${URL_ADDRESS}v2/${GROUP_URL}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then((res) => setUser(res))
    /*
    if (response.status === 200)  */
  }
  async function signIn(values) {
    const response = await fetch(`${URL_ADDRESS}signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })
    const res = await response.json()
    if (response.status === 200) {
      localStorage.setItem(KEY_FOR_TOKEN_API, JSON.stringify(res.token))
      navigate('/user')
    } else if (response.status === 401 || 404) {
      alert(res.message)
    }
  }

  function getAllProducts(token) {
    fetch('https://api.react-learning.ru/products', {
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
      .then((res) => res.json())
      .then((result) => {
        setProducts(result.products)
      })
  }

  return {
    signUp,
    signIn,
    dataUser,
    user,
    getAllProducts,
    products,
  }
}
