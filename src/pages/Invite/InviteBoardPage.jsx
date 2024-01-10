import { useNavigate, useParams } from 'react-router-dom';
import { getWorkspaceByToken } from '../../services/apiWorkspace';
import { useEffect, useState } from 'react';
import { getBoardByToken, getMyBoards, joinBoard } from '../../services/apiBoard';
import Spinner from '../../ui/Spinner';
import { Button } from 'antd';
import toast from 'react-hot-toast';

function InviteBoardPage() {
    const { token } = useParams();
    const navigate = useNavigate()
    
    const [isLoading, setIsLoading] = useState(false)
    const [board, setBoard] = useState({id: "", name: ""})

    const handleJoinBoard = async () => {
        if(!board.id) {
            return
        }
        setIsLoading(true)
        try {
            await joinBoard(board.id)
            navigate("/b/" + board.id +"/board-detail")
        }
        catch(err) {
            toast.error(err.message)
        }
        finally {
            setIsLoading(false)
        }
    }

    if (isLoading) {
        <div className="bg-[#1d2125] w-screen h-screen">
            
        </div>
    }
    
    useEffect(() => {
        const getBoard = async () => {
            setIsLoading(true)
            try {
                const myBoards = await getMyBoards();
                const boardData = await getBoardByToken(token);
                if(myBoards.map(board => board.boardId).includes(boardData.id)) {
                    navigate("/b/" + boardData.id +"/board-detail")
                }
                setBoard(boardData)
            } catch (error) {
                console.error("Error fetching board:", error);
            }
            setIsLoading(false)
        };
        getBoard();
    }, [token]);
    return <div className="bg-[#1d2125] w-screen h-screen text-center pt-40">
        <p className='text-4xl text-white'>You are invited to join <span className="text-white font-medium">{board.name}!</span></p>
        <Button className="bg-blue-500 hover:bg-white w-[140px] text-2xl mt-8" onClick={()=>handleJoinBoard()}>Join board</Button>
    </div>;
}

export default InviteBoardPage;
