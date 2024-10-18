import React from 'react'

export default function ShowCard({id, onClose}) {
  return (
    <div
    style={{
      position: 'fixed',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      zIndex: '10000',
      top: '0',
      left: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }}
    >
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: '1',
      }} onClick={e => {onClose && onClose(null)}}/>
      <div
      style={{
        width: '500px',
        height: '80vh',
        backgroundColor: 'rgba(10, 10, 10, 0.95)',
        borderRadius: '10px',
        border: '1px solid #ccc',
        boxShadow: '0px 0px 10px #ccc',
        padding: '10px',
        display: 'flex',
        flexDirection: 'column',
        overflowX: 'hidden',
        position: 'relative',
        zIndex:'2'
      }}
      > 
        <div style={{position: 'relative'}}>
          <img src="/Image.png" alt="" style={{
            width: '100%',
            borderRadius: '10px',
            pointerEvents: 'none',
          }}/>
          <h1 style={{
            paddingLeft: '20px',
            position: 'absolute',
            bottom: '20px',
            fontSize: '30px',
            mixBlendMode: 'difference',
          }}>Заголовок</h1>
        </div>
        <span style={{flexGrow: 1}}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem temporibus eos fugit sint perferendis possimus, quaerat fugiat atque nulla molestiae exercitationem vel quisquam iure. Non ipsum autem modi neque eius?</p> <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nesciunt blanditiis dolorem minus placeat ducimus, molestiae, vel perferendis labore distinctio suscipit nihil rerum repudiandae id. Quia laborum rerum excepturi odio?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nesciunt blanditiis dolorem minus placeat ducimus, molestiae, vel perferendis labore distinctio suscipit nihil rerum repudiandae id. Quia laborum rerum excepturi odio?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nesciunt blanditiis dolorem minus placeat ducimus, molestiae, vel perferendis labore distinctio suscipit nihil rerum repudiandae id. Quia laborum rerum excepturi odio?</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magni, nesciunt blanditiis dolorem minus placeat ducimus, molestiae, vel perferendis labore distinctio suscipit nihil rerum repudiandae id. Quia laborum rerum excepturi odio?</p>
        </span>
        <span style={{alignSelf: 'end'}}>07.09.24</span>
      </div>
    </div>
  )
}
