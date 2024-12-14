import React from 'react'

const LoadingOverlay = () => {
  return (
    <div className="absolute top-0 left-0 w-full flex items-center justify-center h-screen bg-[#0000002f]">
    <div className="w-10 h-10 border-4 border-dashed rounded-full animate-spin border-[#F95433]"></div>
  </div>
  )
}

export default LoadingOverlay