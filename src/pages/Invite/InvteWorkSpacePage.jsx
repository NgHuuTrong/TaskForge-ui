import { useNavigate, useParams } from 'react-router-dom';
import { getMyWorkspaces, getWorkspaceByToken, joinWorkspace } from '../../services/apiWorkspace';
import { useEffect, useState } from 'react';
import { getBoardByToken } from '../../services/apiBoard';
import Spinner from '../../ui/Spinner';
import { Button } from 'antd';
import toast from 'react-hot-toast';

function InviteWorkSpacePage() {
    const { token } = useParams();
    const navigate = useNavigate();
    
    const [isLoading, setIsLoading] = useState(false)
    const [workspace, setWorkspace] = useState({id: "", name: ""})

    const handleJoinWorkSpace = async () => {
        if(!workspace.id) {
            return
        }
        setIsLoading(true)
        try {
            await joinWorkspace(workspace.id)
            navigate("/w/" + workspace.id +"/home")
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
        const getWorkspace = async () => {
          setIsLoading(true)
          try {
            const myWorkspaces = await getMyWorkspaces();
            const workspaceData = await getWorkspaceByToken(token);
            if(myWorkspaces.map(workspace => workspace.id).includes(workspace.id)) {
                navigate("/w/" + workspaceData.id +"/home")
            }
            setWorkspace(workspaceData)
          } catch (error) {
              console.error("Error fetching board:", error);
          }
          setIsLoading(false)
        };
        getWorkspace();
    }, [token]);
    return <div className="bg-[#1d2125] w-screen h-screen text-center pt-40">
        <p className='text-4xl text-white'>You are invited to join <span className="text-white font-medium">{workspace.name}!</span></p>
        <Button className="bg-blue-500 hover:bg-white w-[140px] text-2xl mt-8" disabled={!workspace.id} onClick={()=>handleJoinWorkSpace()}>Join board</Button>
    </div>;
}

export default InviteWorkSpacePage;
