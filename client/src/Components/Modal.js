import React from 'react'
import ReactDom from 'react-dom'

const MODAL_STYLES = {
    margin: 'auto',
    // width: '50%',
    // border: '3px solid green',
    padding: '10px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  backgroundColor: 'rgb(34,34,34)',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  height: '90%',
  width: '90%',
  overflow: 'scroll'
}

const OVERLAY_STYLES = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, .7)',
  zIndex: 1000,
  // overflow: 'scroll' 
}

export default function Modal({ children, onClose }) {

  return ReactDom.createPortal(
    <>
      <div style={OVERLAY_STYLES} onClick={onClose} />
      <div style={MODAL_STYLES} className='container vertical-scrollable' >
        {/* <button className='btn bg-danger fs-4' style={{ marginLeft: "90%", marginTop: "-35px" }} > X </button> */}
        {children}
      </div>
    </>,
    document.getElementById('cart-root')
  )
}


