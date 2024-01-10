import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { getMessagesOfBoard } from '../services/apiMessage';

export function useMessages() {
  const { boardId } = useParams();

  const { isLoading, data, error } = useQuery({
    queryKey: ['messages', boardId],
    queryFn: () => getMessagesOfBoard(boardId),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, data };
}
