import React from 'react'
import useNearScreen from 'hooks/useNearScreen'
import TrendingSearches from 'components/TrendingSearches'
import Spinner from 'components/Spinner'

export default function LazyTrending () {
  const {isNearScreen, fromRef} = useNearScreen({ distance: '500px'})

  return <div ref={fromRef}>
    {console.log(isNearScreen)}
      {isNearScreen ? <TrendingSearches /> : <Spinner />}
  </div>
}
