function Modal(props) {
  function cancelHandler() {
    props.onCancel();
  }

  function confirmHandler() {
    props.onConfirm();
  }

  return (
    <div className="modal">
      <p>Are you Sure?</p>
      <button className="btn" onClick={cancelHandler}>
        Cancel
      </button>
      <button className="btn btn-green" onClick={confirmHandler}>
        Confirm
      </button>
    </div>
  );
}

export default Modal;
