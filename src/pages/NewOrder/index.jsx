import { useEffect, useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/auth'
import { useShop } from '../../hooks/shopContext'
import { api } from '../../services/api'

import { Container, CartItems, Checkout } from './styles'

import { Header } from '../../components/Header'
import { HeaderAdmin } from '../../components/HeaderAdmin'
import { Footer } from '../../components/Footer'
import { IconButton } from '../../components/IconButton'
import { ReactComponent as LeftArrow } from '../../assets/CaretLeft.svg'

import { ReactComponent as Pix } from '../../assets/PIX.svg'
import { ReactComponent as CreditCard } from '../../assets/CreditCard.svg'
import { ReactComponent as QRCode } from '../../assets/QrCode.svg'
import { Button } from '../../components/Button'
import { Tab } from '@headlessui/react'
import { Input } from '../../components/Input'

export function NewOrder() {
  const { admin } = useAuth()
  const { cartData, updateItemsCart } = useShop()
  const paymentPage = useRef(null)
  const productsPage = useRef(null)

  const [totalPrice, setTotalPrice] = useState('')

  const navigate = useNavigate()

  function handleBack() {
    navigate(-1)
  }

  function handleVisible() {
    productsPage.current.classList.toggle('visible')
    paymentPage.current.classList.toggle('invisible')
  }

  useEffect(() => {
    function handleTotalPrice() {
      let sum = 0
      for (let i = 0; i < cartData.length; i++) {
        sum += cartData[i].price * cartData[i].addedItems
      }
      setTotalPrice(sum)
    }
    handleTotalPrice()
  }, [cartData, totalPrice])

  return (
    <Container>
      {admin === true ? <HeaderAdmin /> : <Header />}
      <div className="return">
        <IconButton icon={LeftArrow} title="voltar" onClick={handleBack} />
      </div>
      <main>
        <div ref={productsPage} className="products visible">
          <CartItems>
            <h1>Meu pedido</h1>
            {cartData.length === 0 ? (
              <h2>Adicione produtos ao carrinho </h2>
            ) : (
              cartData.map((product) => (
                <div key={product.product_id}>
                  <img
                    src={`${api.defaults.baseURL}/files/${product.image}`}
                    alt={`Foto de ${product.title}`}
                  />
                  <div className="information">
                    <span>{`x ${product.addedItems}`}</span>
                    <h2>{product.title}</h2>
                    <button
                      onClick={() => updateItemsCart(product.product_id, 0)}
                    >
                      Remover do Carrinho
                    </button>
                  </div>
                </div>
              ))
            )}
            {cartData.length !== 0 && (
              <p>{`Total: R$ ${totalPrice.toString().replace('.', ',')}`}</p>
            )}
          </CartItems>
          {cartData.length !== 0 && (
            <div className="advance">
              <Button title="Avançar" onClick={handleVisible} />
            </div>
          )}
        </div>
        {cartData.length !== 0 && (
          <div ref={paymentPage} className="checkout invisible web-order">
            <Checkout>
              <h1>Pagamento</h1>
              <div className="tab-wrapper">
                <Tab.Group>
                  <Tab.List className="tab-list">
                    <Tab className="tab">
                      <Pix /> PIX
                    </Tab>
                    <Tab className="tab">
                      <CreditCard /> Crédito
                    </Tab>
                  </Tab.List>
                  <Tab.Panels className="tab-panels">
                    <Tab.Panel className="tab-panel">
                      <QRCode />
                    </Tab.Panel>
                    <Tab.Panel className="tab-panel">
                      <div>
                        <label htmlFor="creditCard">Número do cartão</label>
                        <Input
                          type="text"
                          inputMode="numeric"
                          pattern="[0-9\s]{13,19}"
                          autoComplete="cc-number"
                          maxLength="19"
                          placeholder="0000 0000 0000 0000"
                        />
                      </div>
                      <div className="credit-card">
                        <div>
                          <label htmlFor="expires">Validade</label>
                          <Input
                            placeholder="04/25"
                            type="tel"
                            pattern="/d*"
                            inputMode="numeric"
                            maxLength="5"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvc">CVC</label>
                          <Input
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9\s]{13,19}"
                            maxLength="3"
                            placeholder="000"
                          />
                        </div>
                      </div>
                      <Button title="Finalizar pagamento" />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </Checkout>
          </div>
        )}
      </main>
      <Footer />
    </Container>
  )
}
