import React from 'react'

const HoverText = ({skillName}) => {
  return (
    <div className="absolute top-[-30px] left-[-15px] w-20 min-w-fit bg-gray-400 bg-opacity-30 text-center rounded-full text-black font-mono px-2 py-1 text-xs">{skillName}</div>
  )
}

export default HoverText