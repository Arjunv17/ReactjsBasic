import React, {memo} from 'react'

const Child = () => {
  console.log("Child Component!!")
  return (
    <div>
      <h1>Child Components!!</h1>
    </div>
  )
}

export default memo(Child)
