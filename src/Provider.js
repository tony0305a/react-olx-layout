import React from 'react'
import App from './App'
import { ResetCSS } from './Global/ResetCSS'
import AppProvider from './Providers/app-provider'
const Provider = () => {
  return (
    <AppProvider>
    <App/>
    <ResetCSS/>
    </AppProvider>
  )
}

export default Provider