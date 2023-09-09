import React from 'react'

type Props = {
    handleClick : () => void,
    btnText?:string
}

const Add = ({handleClick,btnText} :Props) => {
  return (
    <div>
        <button onClick={handleClick}>{btnText}</button>
    </div>
  )
}

export default Add