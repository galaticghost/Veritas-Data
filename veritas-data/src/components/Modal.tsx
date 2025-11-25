import { createPortal } from "react-dom";

interface props {
    isOpen: boolean,
    permission: boolean
    setModalOpen: React.MouseEventHandler,
    setPermission: React.MouseEventHandler,
    children: React.ReactNode
}


export default function Modal({ isOpen, permission, setModalOpen, setPermission, children }: props) {
    if (!isOpen) return null;

    return createPortal(
        <>
            <div className="background-modal" onClick={setModalOpen} />
            <div className="modal">
                <div>{children}</div>
                <button onClick={setPermission}>
                    Permissão: {permission ? "Permitido" : "Não Permitido"}
                </button>
            </div>
        </>,
        document.body
    );
}