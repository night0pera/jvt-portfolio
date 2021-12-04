import Model from 'components/Model/index';
import { StoryContainer } from '../../../.storybook/StoryContainer';
import deviceModels from './deviceModels';
import phoneTexturePlaceholder from 'assets/dataentry-list-placeholder.png';
import phoneTexture from 'assets/dataentry-list.png';
import phoneTextureLarge from 'assets/dataentry-list-large.png';
import phoneTexture2Placeholder from 'assets/dataentry-list-placeholder.png';
import phoneTexture2 from 'assets/dataentry-list.png';
import phoneTexture2Large from 'assets/dataentry-list-large.png';
import laptopTexturePlaceholder from 'assets/spr-lesson-builder-dark-placeholder.jpg';
import laptopTexture from 'assets/spr-lesson-builder-dark-large.jpg';
import laptopTextureLarge from 'assets/spr-lesson-builder-dark-large.jpg';
import laptopTexturePlaceholder from 'assets/spr-devs-small.png';
import laptopTexture from 'assets/spr-devs-small.png';
import laptopTextureLarge from 'assets/spr-devs-large.png';

export default {
  title: 'Model',
};

const modelStyle = { position: 'absolute', top: 0, right: 0, bottom: 0, left: 0 };

export const phone = () => (
  <StoryContainer padding={0}>
    <Model
      style={modelStyle}
      cameraPosition={{ x: 0, y: 0, z: 11.5 }}
      alt="Phone models"
      models={[
        {
          ...deviceModels.phone,
          position: { x: -0.6, y: 0.8, z: 0.1 },
          texture: {
            src: phoneTexture,
            srcSet: `${phoneTexture} 800w, ${phoneTextureLarge} 1440w`,
            placeholder: phoneTexturePlaceholder,
          },
        },
        {
          ...deviceModels.phone,
          position: { x: 0.6, y: -0.8, z: 0.4 },
          texture: {
            src: phoneTexture2,
            srcSet: `${phoneTexture2} 800w, ${phoneTexture2Large} 1440w`,
            placeholder: phoneTexture2Placeholder,
          },
        },
      ]}
    />
  </StoryContainer>
);

export const laptop = () => (
  <StoryContainer padding={0}>
    <Model
      style={modelStyle}
      cameraPosition={{ x: 0, y: 0, z: 8 }}
      alt="Laptop model"
      models={[
        {
          ...deviceModels.laptop,
          position: { x: 0, y: 0, z: 0 },
          texture: {
            src: laptopTexture,
            srcSet: `${laptopTexture} 800w, ${laptopTextureLarge} 1440w`,
            placeholder: laptopTexturePlaceholder,
          },
        },
      ]}
    />
  </StoryContainer>
);
