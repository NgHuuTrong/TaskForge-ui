import { Button, Popconfirm, Spin } from "antd"
import { useUpdateBoard } from "../../hooks/useBoard"
import toast from "react-hot-toast";
import { deleteBoard } from "../../services/apiBoard";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ClosedBoardContent ({boardTitle, boardId, isAdmin}) {
    const {isUpdating, updateBoard} = useUpdateBoard();
    const [isDeleting, setIsDeleting] = useState(false);
    const navigate = useNavigate();

    const handleReopenBoard = () => {
        updateBoard({boardId, body: {closed: false}})
    }

    const handleDeleteBoard = async () => {
        if(isAdmin) {
            setIsDeleting(true)
            await deleteBoard({boardId})
            //can navigate ve home
            navigate('/boards')
        }
        else {
            toast.error("You have no permission to delete this board")
        }
    }

    return <div className="w-full h-full items-center justify-center flex">
        <div className="w-[600px] h-[230px] bg-white mb-[100px] text-center">
            <p className="text-4xl mt-12 text-black font-bold">{boardTitle} is closed.</p>
            {isDeleting||isUpdating ? <Spin className="mt-12"></Spin> : <>
                <div>
                <Button className="bg-blue-500 text-white hover:bg-white mt-12" onClick={()=>handleReopenBoard()} >Reopen board</Button>
            </div>
            <Popconfirm className="mt-12 text-blue-500" title={"Delete board?"} description="All lists, cards and actions will be deleted, and there is no undo." onConfirm={()=>handleDeleteBoard()}><button  className="border-none text-blue">Permanently delete board</button></Popconfirm>
            </>}
            
        </div>
    </div>
}

export default ClosedBoardContent