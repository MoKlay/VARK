import React from 'react'

export default function Header({endAnimatinon}) {
  return (
    <header
    onAnimationEnd={e => setTimeout(() =>endAnimatinon(true), 500)}
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '20px 0',
      animation: 'header 1s ease-in-out',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}
    >
      <div>
        <h1>Новости</h1>
      </div>
      <div>
        <ul
        style={{
          display: 'flex',
          listStyle: 'none',
          gap: '10px',
        }}
        >
          <li><a href="/">Ссылка</a></li>
          <li><a href="/">Ссылка</a></li>
          <li><a href="/">Ссылка</a></li>
          <li><a href="/">Ссылка</a></li>
          <li><a href="/">Ссылка</a></li>
        </ul>
      </div>
    </header>
  )
}
