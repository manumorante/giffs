import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={250}
    height={250}
    viewBox="0 0 250 250"
    backgroundColor="#454545"
    foregroundColor="#6b6b6b"
    {...props}
  >
    <circle cx="22" cy="170" r="18" />
    <rect x="57" y="159" rx="2" ry="2" width="140" height="10" />
    <rect x="1" y="1" rx="2" ry="2" width="240" height="136" />
    <rect x="58" y="178" rx="2" ry="2" width="81" height="8" />
  </ContentLoader>
)

export default MyLoader
