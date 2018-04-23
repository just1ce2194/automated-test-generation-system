import React from 'react'
import ReactDOM from 'react-dom'

const MOUNT_NODE = document.getElementById('root')

let render = () => {
  ReactDOM.render(
    <span>Cheers!</span>,
    MOUNT_NODE )
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()
