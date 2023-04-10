import { Component } from 'react';
import { createPortal } from 'react-dom';

import { AiOutlineClose } from 'react-icons/ai';
import css from './Modal.module.css';
const modalRoot = document.querySelector('#modal-root');
class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeOnESC);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeOnESC);
  }

  closeOnESC = event => {
    if (event.code === 'Escape') {
      this.props.togglModal();
    }
  };
  closeOnBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.togglModal();
    }
  };

  render() {
    return createPortal(
      <div className={css.overlay} onClick={this.closeOnBackdropClick}>
        <div className={css.modal}>
          {this.props.children}

          <button
            className={css.modalButton}
            onClick={this.props.togglModal}
            aria-label="close"
            type="modal"
          >
            <AiOutlineClose />
          </button>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
