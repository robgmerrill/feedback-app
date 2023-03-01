import React from 'react'

function Card({children, reverse}) {
  return (
    // <div className={reverse ? 'card reverse' : 'card'}>
    <div className={`card ${reverse && 'reverse'}`}>
        {children}
    </div>
  )
}

Card.defaultProps = {
    reverse: false,
}

export default Card
