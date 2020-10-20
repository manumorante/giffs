import React, { Suspense } from 'react'
import useNearScreen from 'hooks/useNearScreen'
import ContentLoader from 'components/ContentLoader'

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export default function LazyTrending () {
  const {isNearScreen, fromRef} = useNearScreen({ distance: '0px'})

  return <div ref={fromRef}>
    <Suspense fallback={<ContentLoader />}>
      {isNearScreen ? <TrendingSearches /> : null}
    </Suspense>
  </div>
}
