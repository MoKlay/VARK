import React, {useEffect, useRef, useState} from 'react'

export default function Card({animation = false}) {
  const cardRef = useRef(null);
  const [position, setPosition] = useState(null);
  const [height, setHeight] = useState(null);
  
  useEffect(() => {
    const cardNode = cardRef.current;
    if (cardNode) {
      setTimeout(() => setPosition(cardNode.offsetTop), 1000)
      setTimeout(() => setHeight(cardNode.clientHeight), 1000)
    }
  }, [cardRef]);
  return (
    <div 
    ref={cardRef}
    className='Card'
    style={{
      animationName: animation && 'Card',
      animationRange: position && height && `${position}px ${position+height}px`,
    }}
    >
      <img src="/Image.png" alt=""/>
      <h1>Заголовок</h1>
      <p>{'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit odit pariatur hic non quo cumque numquam earum sed placeat magnam odio cum cupiditate, impedit sit, consequatur labore distinctio assumenda veniam?'.slice(0, 150) + '...'}</p>
      <span>07.09.24</span>
    </div>
  )
}
