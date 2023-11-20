import { Modal } from "antd";

function CardModal({
    title,
    open,
    onOk,
    onCancel,
    children
}) {
    return <Modal
        title={title}
        open={open}
        onOk={onOk}
        okButtonProps={{ type: 'primary', className: 'bg-sky-500' }}
        onCancel={onCancel}
    >
        {children}
    </Modal>
}

export default CardModal