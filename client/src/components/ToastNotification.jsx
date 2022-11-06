import React from "react";
import { Toast, ToastContainer } from "react-bootstrap";

const ToastNotification = ({
  toastHeader,
  toastBody,
  toastVariant,
  onCloseHandler,
  showCondition,
}) => {
  return (
    <>
      <ToastContainer position="middle-center">
        <Toast
          onClose={onCloseHandler}
          show={showCondition}
          delay={3000}
          autohide
        >
          <Toast.Header className={`bg-${toastVariant}`}>
            <strong className="me-auto text-light">{toastHeader}</strong>
          </Toast.Header>
          <Toast.Body> {toastBody} </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ToastNotification;
