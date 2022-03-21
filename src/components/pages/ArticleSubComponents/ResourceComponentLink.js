import React from 'react'

const ResourceComponentLink = ({link}) => {
  return (
    <a className="three" href={link[0]}>{link[1]}</a>
  )
}

export default ResourceComponentLink;