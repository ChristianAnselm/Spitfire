import React from 'react';

class Modal extends React.Component {

  close(e) {
    e.preventDefault();
    if (this.props.onClose) {
      this.props.onClose()
    }
  }
  render() {
    if (this.props.isOpen === false) {
      return null;
    }

    let modalStyle = {
      position: 'fixed',
      // position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      zIndex: '9999',
      height: '100%',
      // width: '100%'
    }

    let backdropStyle = {
       position: 'fixed',
      //  position: 'absolute',
       width: '100%',
      //  height: '100vh',
       top: '0px',
       left: '0px',
       bottom: '0px',
       zIndex: '9998',
       background: 'rgba(0, 0, 0, 0.9)',
      //  display: 'flex'
     }

    return (
     <div className={this.props.containerClassName}>
       <div className={this.props.className} style={modalStyle}>
         {this.props.children}
       </div>
       {!this.props.noBackdrop &&
           <div style={backdropStyle} />}
     </div>
    );
  }
}

export default Modal;
