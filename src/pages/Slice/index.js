import { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Image from 'components/Image';
import { useScrollRestore } from 'hooks';
import Footer from 'components/Footer';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectImage,
  ProjectTextRow,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectBackground,
  ProjectHeader,
  // ProjectSectionColumns,
} from 'components/ProjectLayout';
import sliceBackground from 'assets/slice-bg.png';
import sliceBackgroundLarge from 'assets/slice-bg-large.png';
import sliceBackgroundPlaceholder from 'assets/slice-bg-placeholder.png';
import sliceApp from 'assets/slice-app.jpg';
import sliceAppLarge from 'assets/slice-app-large.jpg';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';

import sliceSlides from 'assets/slice-slide.jpg';
import sliceSlidesLarge from 'assets/slice-slide-large.jpg';
import sliceSlidesPlaceholder from 'assets/slice-slide-placeholder.jpg';
import sliceBackgroundBar from 'assets/slice-bg-bar.jpg';
import sliceBackgroundBarLarge from 'assets/slice-bg-bar-large.jpg';
import sliceBackgroundBarPlaceholder from 'assets/slice-bg-bar-placeholder.jpg';

import prerender from 'utils/prerender';
import { media } from 'utils/style';
import './index.css';

const title = 'React.JS Web Development';
const description =
  'ReactJS developer are responsible for designing and implementing UI components for JavaScript-based web applications and mobile applications with the use of open source library infrastructure.';
const roles = ['JSX', ' Function Components', 'Lifecycle Methods', 'Hooks'];

const ProjectSlice = () => {
  useScrollRestore();

  return (
    <Fragment>
      <Helmet>
        <title>{`Projects | ${title}`}</title>
        <meta name="description" content={description} />
      </Helmet>
      <ProjectContainer className="slice">
        <ProjectBackground
          srcSet={`${sliceBackground} 1280w, ${sliceBackgroundLarge} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
          entered={!prerender}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://www.best.edu.au/s/q2yjjvl7?data=8%404!9%4020303!10%40-15087&version=1"
          roles={roles}
        />
        <ProjectSection first>
          <ProjectSectionContent>
            <ProjectImage
              srcSet={`${sliceApp} 800w, ${sliceAppLarge} 1920w`}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <br />
        <ProjectSectionHeading>Coffee Shop React</ProjectSectionHeading>

        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Covid-19 Tracker</ProjectSectionHeading>
              <ProjectSectionText>
                Tracking the Spread of the Coronavirus (COVID-19) pandemic in the United
                States and Worldwide.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={`${sliceSlides} 800w, ${sliceSlidesLarge} 1440w`}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent className="slice__grid">
            <div className="slice__grid-image">
              <div className="slice__grid-background">
                <Image
                  srcSet={`${sliceBackgroundBar} 400w, ${sliceBackgroundBarLarge} 898w`}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className="slice__grid-foreground"></div>
            </div>
            <div className="slice__grid-text">
              <ProjectSectionHeading> React Landing Website</ProjectSectionHeading>
              <ProjectSectionText>
                Set of highly-composable React components for building advanced landing
                pages. It is built using Rebass, a library of UI primitives. Based upon a
                configurable design system, Rebass's props API makes building consistent,
                responsive web apps simpler and faster.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default ProjectSlice;
