/* eslint-disable react/button-has-type */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../../custom/useApi'
import { KEY_FOR_TOKEN_API } from '../../utils/constant'
import stylesUser from './styles.module.css'

export function User() {
  const { dataUser, user } = useApi()
  const token = JSON.parse(localStorage.getItem(KEY_FOR_TOKEN_API))
  const navigate = useNavigate()
  function submit() {
    localStorage.removeItem(KEY_FOR_TOKEN_API)
    navigate('/signin')
  }
  useEffect(() => {
    if (token) {
      dataUser(token)
    } else {
      navigate('/signin')
    }
  }, [token])

  return (
    <>
      <div><h2>Личный кабинет</h2></div>
      <div className={stylesUser.block}>
        <div className={stylesUser.avatar}><img src={user.avatar} alt="" /></div>
        <div>
          <p>
            Фамилия Имя :
            <span>{ user.name}</span>
          </p>
          <p>
            Тип :
            <span>{user.about}</span>

          </p>
          <p>
            email :
            <span>{user.email}</span>
          </p>
          <button onClick={() => submit()}>Выйти</button>
        </div>

      </div>
    </>
  )
}
