// любой компонент благодаря HOC сможет получать craftService из контекста
import React from 'react';
import { CraftServiceConsumer } from '../CraftServiceContext'

const WithCraftService = () => (Wrapped) => {
  return (props) => {
    return (
      // используем ServiceConsumer для получения доступа к сервису
      // для того чтобы получить данные из Consumer в него нужно передать рендер-функцию, которая примет в качестве своего значения тот сервис который мы передаем черех контекст
      <CraftServiceConsumer>
        {
          (craftService) => {
            return (
              <Wrapped {...props} craftService={craftService}/>)
          }
        }
      </CraftServiceConsumer>
    )
  }
}

export default WithCraftService; 

