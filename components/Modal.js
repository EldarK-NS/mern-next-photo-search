import { Fragment, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function ModalPage(props) {
    const [show, setShow] = useState(true);

    const handleClose = () => setShow(false);

    return (
        <Fragment>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className="bg-danger" >
                    <Modal.Title >{props.error}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose}>
                        Close
            </Button>
                </Modal.Footer>
            </Modal>
        </Fragment>
    );
}

export default ModalPage