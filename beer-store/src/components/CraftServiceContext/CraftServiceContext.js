// Компонент который поддерживает сервис и передает его всем компонентам используя апи реакта


import React from 'react'

const {
  Provider: CraftServiceProvider,
  Consumer: CraftServiceConsumer
} = React.createContext();

export {
  CraftServiceProvider,
  CraftServiceConsumer
}