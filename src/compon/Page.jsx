import React from 'react'

export default function Page({children}) {
  return (
    <div
    style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
    >
      <div
      style={{
        height: '100vh',
        width: '85vw',
        display: 'flex',
        flexDirection:'column',
        alignContent: 'stretch',
        position: 'relative',
        overflowX: 'hidden'
      }}
      >
        {children}
      </div>
    </div>
  )
}
