import React, { lazy } from 'react'
const ReactList = lazy(() => import('./ReactList'))

function LazyLoading() {
  return (
    <div>
<ReactList/>
    </div>
  )
}

export default LazyLoading