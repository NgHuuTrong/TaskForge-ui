import { useNavigate, useParams } from 'react-router-dom';
import Spinner from '../../ui/Spinner';
import { useAcceptWorkspaceLink, useWorkspaceByToken } from '../../hooks/useWorkspace';
import Button from '../../ui/Button';

function InviteWorkSpacePage() {
    const { workspace, isLoading } = useWorkspaceByToken();
    const { isAccepting, mutate: acceptWorkspaceLink } = useAcceptWorkspaceLink();

    const { token } = useParams();
    const navigate = useNavigate();

    if (isLoading || isAccepting) return <Spinner />;

    return <div className="flex flex-col items-center space-y-10 bg-[--color-grey-0] w-screen h-screen pt-40">
        <p className='text-4xl text-[--color-grey-900]'>
            You are invited to join <span className="text-[--color-grey-800] font-medium">{workspace.name}!</span>
        </p>
        <Button
            type='primary'
            size='large'
            disabled={isAccepting}
            onClick={() => {
                acceptWorkspaceLink(token, {
                    onSuccess: () => navigate(`/w/${workspace.id}/members`, {
                        replace: true
                    })
                })
            }}
        >
            Join workspace
        </Button>
    </div>
}

export default InviteWorkSpacePage;
