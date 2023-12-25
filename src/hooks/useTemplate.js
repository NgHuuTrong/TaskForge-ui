import { useQuery } from '@tanstack/react-query';
import { getAllTemplates, getAllTemplatesByType } from '../services/apiTemplate';

export function useTemplates(options) {
  const {
    isLoading,
    data: templates,
    error,
  } = useQuery({
    queryKey: ['templates', options],
    queryFn: () => getAllTemplates(options),
    useErrorBoundary: true,
  });
  return { isLoading, error, templates };
}

export function useTemplatesByType(temmplateType, search = '') {
  const {
    isLoading,
    data: templates,
    error,
  } = useQuery({
    queryKey: ['template', temmplateType],
    queryFn: () => getAllTemplatesByType(temmplateType, search),
    retry: false,
    useErrorBoundary: true,
  });
  return { isLoading, error, templates };
}
