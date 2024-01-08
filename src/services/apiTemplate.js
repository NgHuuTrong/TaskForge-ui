import authAxios from '../utils/axios';
import categories from '../data/templateType.json';

export async function getAllTemplates(options) {
  const data = await authAxios
    .get(`/templates?${options}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response);
      throw new Error(err.response.data);
    });
  console.log('getAllTemplates', data);
  data.templates.sort((a, b) => a.id - b.id);
  return data.templates;
}

export async function getAllTemplatesByType(temmplateType, search = '') {
  const data = await authAxios
    .get(`/templates/by-type/${temmplateType}?${search}`)
    .then((response) => response.data.data)
    .catch((err) => {
      console.log(err.response.data);
      throw new Error(err.response.data.message);
    });
  const type = categories.find((el) => el.key === temmplateType);
  console.log('getAllTemplatesByType', { templates: data.templates, type });
  return { templates: data.templates, type };
}
