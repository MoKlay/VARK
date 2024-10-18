import React from 'react'

export default function Layout({onClick, children}) {
  const [visionContent, setVisionContent] = React.useState(false)
  const [animateTitle, setAniTitle] = React.useState(false)
  const [visionh1, setVisionh1] = React.useState(false)
  const [visionh6, setVisionh6] = React.useState(false)
  
  return (
    <div>
      <div style={{
        background: 'url("/bg.jpg") no-repeat center, #000',
        backgroundSize: 'cover',
        width: '100vw',
        height: '100vh',
        position: 'absolute'
      }}>
        <div
          onAnimationEnd={e => setTimeout(() => setVisionh1(true), 300)}
          style={{ 
            width: '100%', 
            height: '100%', 
            animation: 'load 0.5s ease-in-out',
            userSelect: 'none',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            background: 'rgba(0,0,0,0.5)',
            boxShadow: `inset 0 ${!visionContent ? 20 : 100}px 100px 30px black`,
            gap: '20px'
          }}
        >
          { !visionContent ? <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            gap: '20px',
            animation: animateTitle && 'title 1s ease-in-out',
            opacity: !animateTitle ? 1 : 0,
            visibility: !animateTitle ? 'visible' : 'hidden',
            zIndex: 1000,
          }}
          onAnimationEnd={e => {animateTitle && setVisionContent(true)}}
          >
          <h1
            onAnimationEnd={e => setTimeout(() => setVisionh6(true))}
            style={{
              textShadow: '0 0 20px black',
              color: 'white',
              fontSize: 'var(--h1)',
              fontWeight: 500,
              animation: visionh1 && 'h1 1s ease-in-out',
              visibility: visionh1 ? 'visible' : 'hidden',
            }}
          >ВАРК</h1>
          <h6
            onAnimationEnd={e => setTimeout(() => setAniTitle(true), 1000)}
            style={{
              color: 'white',
              fontSize: 'var(--h6)',
              fontWeight: 400,
              animation: visionh6 && 'h6 1s ease-in-out',
              visibility: visionh6 ? 'visible' : 'hidden',
              textShadow: '0 0 10px white',
            }}
          >Всебурятской ассоциации развития культуры</h6>
          </div> : children}

        </div>
      </div>
    </div>
  )
}
