import React from 'react'

interface SkeletonProps {
    width: string,
    height: string,
    borderRadius: string,
}

function Skeleton({ width, height, borderRadius}: SkeletonProps) {
  return (
    <div className="skeleton" style={{ width, height, borderRadius }}></div>
  )
}

export default Skeleton