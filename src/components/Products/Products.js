/* eslint-disable react/button-has-type */
/* eslint-disable no-underscore-dangle */
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useApi } from '../../custom/useApi'
import { KEY_FOR_TOKEN_API } from '../../utils/constant'
import styles from './styles.module.css'

export function Products() {
  const { getAllProducts, products } = useApi()
  const navigate = useNavigate()
  const token = JSON.parse(localStorage.getItem(KEY_FOR_TOKEN_API))
  useEffect(() => {
    if (token) {
      getAllProducts(token)
    } else {
      navigate('/signin')
    }
  }, [products, token])
  return (
    <>
      <h1>Каталог товаров</h1>
      <div className={styles.container}>
        {products.map((product) => (
          (
            <div key={product._id} className={styles.block}>
              <img
                src={product.pictures}
                alt="описание"
              />
              <div>
                <h5>{product.price}</h5>
                <p>{product.name}</p>
              </div>
              <button>В корзину</button>
            </div>
          )

        ))}
      </div>
    </>
  )
}
