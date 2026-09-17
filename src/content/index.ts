import developmentData from './development.json';
import productionData from './production.json';
import { ExperienceContent } from './types';

const isProduction = import.meta.env.VITE_APP_ENV === 'production';

const content: ExperienceContent = (
  isProduction ? productionData : developmentData
) as unknown as ExperienceContent;

export * from './types';
export default content;

