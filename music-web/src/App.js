import React, { memo } from 'react'
import { renderRoutes } from 'react-router-config'

import routes from './router'

import AYAppHeader from '@/components/app-header'
import AYAppFooter from '@/components/app-footer'
import { HashRouter } from 'react-router-dom'

export default memo(function App() {
  return (
    <HashRouter>
      <AYAppHeader />
      {renderRoutes(routes)}
      <AYAppFooter />
    </HashRouter>
  )
})
