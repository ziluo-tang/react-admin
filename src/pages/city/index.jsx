import React, { useRef, useEffect } from 'react'
export default () => {
  const dom = useRef(Date.now())
  return <div ref={dom}>city page.</div>
}
