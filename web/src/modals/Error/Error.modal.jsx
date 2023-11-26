import styles from "./Error.module.css";
import {Modal} from "react-bootstrap";
import {useErrorState} from "../../hooks/state";

export const ErrorModal = () => {
    const {error, setError} = useErrorState();

    return (
        <Modal onHide={setError} show={error} size="sm">
            <Modal.Header>Ошибка</Modal.Header>
            <Modal.Body>{error.message}</Modal.Body>
        </Modal>
    )
}
