import React, { memo } from 'react'
import { RecommendWraper } from './style'
import AYTopBanner from './c-cpns/top-banners'
function AYRecommend(props) {
  return (
    <RecommendWraper>
      <AYTopBanner />
    </RecommendWraper>
  )
}

export default memo(AYRecommend)
