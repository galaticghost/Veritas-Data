import Modal from './Modal.tsx';
import { useState } from 'react';

interface props {
    datatype: string,
    children: React.ReactNode
}

export default function Card({ datatype, children }: props) {
    const [isOpen, setIsOpen] = useState(false);
    const [locPermission, setLocPermission] = useState(true);

    const handleModalChange: React.MouseEventHandler<HTMLButtonElement> = () => {
        setIsOpen(true);
    }
    return (
        <>
            <button className="card" onClick={handleModalChange}>
                <section>
                    <h2>{datatype}</h2>
                    <p>{locPermission ? "Permitido" : "Não Permitido"}</p>
                </section>
            </button>
            <Modal isOpen={isOpen} permission={locPermission} setModalOpen={() => setIsOpen(!isOpen)} setPermission={() => setLocPermission(!locPermission)}>
                {children}
            </Modal>
        </>
    )
}