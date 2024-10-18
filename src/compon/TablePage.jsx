import React, { useEffect } from 'react'

export default function TablePage({end, children}) {
  const ref = React.createRef()

  function useCreateTemplate(widthColumn) {
    const [template, setTemplate] = React.useState(null)
    const [width, setWidth] = React.useState(null)
    useEffect(()=> {
      if (!widthColumn) return  
      if(ref.current) {
        const width = ref.current.clientWidth
        const columns = Math.floor(width / widthColumn)
        setTemplate(`repeat(${columns}, ${widthColumn}px)`)
        setWidth(widthColumn* columns)
      }
    }, [widthColumn])
    
    return [template, width]
  }
  
  const [template, width] = useCreateTemplate(350)
  return (
    <div
    ref={ref}
    style={{
      display: 'flex',
      justifyContent: 'center',

    }}
    >
      <div
      onAnimationEnd={e => end(true)}
      style={{
        width,
        display: 'grid',
        alignItems: 'center',
        justifyItems: 'center',
        gridTemplateColumns: template,
        paddingTop: '30px',
        rowGap: '30px',
        animation: 'fadein 1s',
      }}
      >
        {children}
      </div>
    </div>
  )
}
