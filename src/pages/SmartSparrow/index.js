import { Fragment, useMemo, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { useAppContext, useScrollRestore } from 'hooks';
import {
  ProjectContainer,
  ProjectSection,
  ProjectSectionContent,
  ProjectTextRow,
  ProjectImage,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectBackground,
  ProjectHeader,
  ProjectSectionColumns,
} from 'components/ProjectLayout';
import ThemeProvider, { useTheme } from 'components/ThemeProvider';
import Image from 'components/Image';
import SegmentedControl, { SegmentedControlOption } from 'components/SegmentedControl';
import prerender from 'utils/prerender';
import { media } from 'utils/style';
import backgroundSpr from 'assets/spr-backgrounds-small.png';
import backgroundSprLarge from 'assets/spr-backgrounds.png';
import backgroundSprPlaceholder from 'assets/spr-background-placeholder.jpg';
import imageSprLessonBuilderLight from 'assets/img/spr-lesson-builder-green.jpg';
import imageSprLessonBuilderLightLarge from 'assets/img/spr-lesson-builder-green-large.jpg';
import imageSprLessonBuilderLightPlaceholder from 'assets/img/spr-lesson-builder-green-placeholder.jpg';
import imageSprLessonBuilderDarkPlaceholder from 'assets/img/spr-lesson-builder-green-placeholder.jpg';
import imageSprLessonBuilderDark from 'assets/img/spr-lesson-builder-green.jpg';
import imageSprLessonBuilderDarkLarge from 'assets/img/spr-lesson-builder-green-large.jpg';
import imageSprComponentsDark from 'assets/img/spr-components-gray.jpg';
import imageSprComponentsDarkLarge from 'assets/img/spr-components-gray-large.jpg';
import imageSprComponentsDarkPlaceholder from 'assets/img/spr-components-gray-placeholder.jpg';
import imageSprComponentsLight from 'assets/img/spr-components-gray.jpg';
import imageSprComponentsLightLarge from 'assets/img/spr-components-gray-large.jpg';
import imageSprComponentsLightPlaceholder from 'assets/img/spr-components-gray-placeholder.jpg';
import imageSprDesignSystemDark from 'assets/img/spr-design-web-orange.jpg';
import imageSprDesignSystemDarkLarge from 'assets/img/spr-design-web-orange-large.jpg';
import imageSprDesignSystemDarkPlaceholder from 'assets/img/spr-design-web-orange-placeholder.jpg';
import imageSprDesignSystemLight from 'assets/img/spr-design-web-orange.jpg';
import imageSprDesignSystemLightLarge from 'assets/img/spr-design-web-orange-large.jpg';
import imageSprDesignSystemLightPlaceholder from 'assets/img/spr-design-web-orange-placeholder.jpg';
import imageSprBackgroundVolcanism from 'assets/spr-background-forest.jpg';
import imageSprBackgroundVolcanismLarge from 'assets/spr-background-forest-large.jpg';
import imageSprBackgroundVolcanismPlaceholder from 'assets/spr-background-forest-placeholder.jpg';
import videoSprMotion from 'assets/img/spr-motion.png';
import videoSprMotionLarge from 'assets/img/spr-motion-large.png';
import videoSprMotionPlaceholder from 'assets/img/spr-motion-placeholder.png';
import Footer from 'components/Footer';
import Earth, { EarthSection } from './Earth';
import './index.css';

const title = 'HTML, CSS AND, JS';
const description =
  'I ve been professionally involved with web development and web design. I’m a person who is well-organized, a problem solver, and an independent worker with a keen eye for details.';
const roles = [
  'Optimizing the user experience',
  'Developing and Maintaining the user interface',
  'Implementing design on mobile websites',
  'Creating tools that improve site interaction regardless of action',
];

const ProjectSPR = () => {
  const { themeId } = useTheme();
  const { dispatch } = useAppContext();
  const motionSectionRef = useRef();
  const earthSectionRef = useRef();
  useScrollRestore();

  const isDark = themeId === 'dark';
  const themes = ['dark', 'light'];

  const handleThemeChange = index => {
    dispatch({ type: 'setTheme', value: themes[index] });
  };
  return (
    <Fragment>
      <ProjectContainer className="spr">
        <Helmet>
          <title>{`Projects | ${title}`}</title>
          <meta name="description" content={description} />
        </Helmet>
        <ProjectBackground
          opacity={isDark ? 0.5 : 0.8}
          srcSet={`${backgroundSpr} 1080w, ${backgroundSprLarge} 2160w`}
          placeholder={backgroundSprPlaceholder}
          entered={!prerender}
        />
        <ProjectHeader title={title} description={description} roles={roles} />
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectImage
              raised
              key={themeId}
              srcSet={`${
                isDark ? imageSprLessonBuilderDark : imageSprLessonBuilderLight
              } 1280w, ${
                isDark ? imageSprLessonBuilderDarkLarge : imageSprLessonBuilderLightLarge
              } 2560w`}
              placeholder={
                isDark
                  ? imageSprLessonBuilderDarkPlaceholder
                  : imageSprLessonBuilderLightPlaceholder
              }
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 800px, 1000px`}
              alt="The aero lesson builder app dragging an audio component into a screen about plant cells."
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectTextRow>
            <a
              className="hyperlink"
              href="https://night0pera.github.io/freelance.github.io/"
            >
              CLICKWORK
            </a>
            <ProjectSectionText>
              Freelancer is a market place where employers and employees are able to find
              each other. Clickwork allows employers to post work for site member who
              place bids in a competitive tender process.
            </ProjectSectionText>
          </ProjectTextRow>
        </ProjectSection>
        <ProjectSection light={isDark}>
          <ProjectSectionContent>
            <Image
              key={themeId}
              srcSet={`${
                isDark ? imageSprComponentsDark : imageSprComponentsLight
              } 800w, ${
                isDark ? imageSprComponentsDarkLarge : imageSprComponentsLightLarge
              } 1000w`}
              placeholder={
                isDark
                  ? imageSprComponentsDarkPlaceholder
                  : imageSprComponentsLightPlaceholder
              }
              alt={`A set of ${themeId} themed components for the aero design system`}
              sizes="100vw"
            />
            <ProjectTextRow>
              <SegmentedControl
                currentIndex={themes.indexOf(themeId)}
                onChange={handleThemeChange}
              >
                <SegmentedControlOption>Dark theme</SegmentedControlOption>
                <SegmentedControlOption>Light theme</SegmentedControlOption>
              </SegmentedControl>
            </ProjectTextRow>
            <ProjectTextRow>
              <a
                className="hyperlink"
                href="https://night0pera.github.io/currency.github.io/#"
              >
                Digital Currency
              </a>
              <ProjectSectionText>
                Digital currency is a form of currency that is available only in digital
                or electronic form. It is also called digital money, electronic money,
                electronic currency, or cybercash
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <Image
              raised
              key={themeId}
              srcSet={`${
                isDark ? imageSprDesignSystemDark : imageSprDesignSystemLight
              } 1280w, ${
                isDark ? imageSprDesignSystemDarkLarge : imageSprDesignSystemLightLarge
              } 2560w`}
              placeholder={
                isDark
                  ? imageSprDesignSystemDarkPlaceholder
                  : imageSprDesignSystemLightPlaceholder
              }
              alt="The homepage of the aero design system docs website linking to principles and components."
              sizes="100vw"
            />
            <ProjectTextRow>
              <a
                className="hyperlink"
                href="https://night0pera.github.io/mapee.github.io/"
              >
                MAPEE
              </a>
              <ProjectSectionText>
                Mapee Online Shopping is a form of electronic commerce which allows
                consumers to directly buy goods or services from a seller all over the
                internet using a web browser or a mobile app. Mapee stores usually enable
                shopper to use features to find a specific models and items
              </ProjectSectionText>
            </ProjectTextRow>
          </ProjectSectionContent>
        </ProjectSection>
        <ThemeProvider themeId="dark">
          <ProjectSection
            ref={motionSectionRef}
            backgroundOverlayOpacity={0.5}
            backgroundElement={
              <Image
                srcSet={`${imageSprBackgroundVolcanism} 1280w, ${imageSprBackgroundVolcanismLarge} 2560w`}
                placeholder={imageSprBackgroundVolcanismPlaceholder}
                alt="A dramatic ocean scene with lava forming a new land mass."
                sizes="100vw"
              />
            }
          >
            <ProjectSectionColumns width="full">
              <ProjectSectionContent width="full">
                <ProjectTextRow width="s">
                  <a
                    className="hyperlink"
                    href="https://night0pera.github.io/mapee.github.io/"
                  >
                    PORTFOLIO
                  </a>
                  <ProjectSectionText>
                    A web design portfolo is a hand-picked showcased of projects and case
                    studies that a designer chooses to present his best and most promising
                    work examples to potential clients or employers
                  </ProjectSectionText>
                </ProjectTextRow>
              </ProjectSectionContent>
              <Image
                raised
                srcSet={`${videoSprMotion} 1280w, ${videoSprMotionLarge} 2560w`}
                className="spr__video"
                src={videoSprMotionLarge}
                placeholder={videoSprMotionPlaceholder}
                alt=""
                sizes={`(max-width: ${media.mobile}px) 100vw, 50vw`}
              />
            </ProjectSectionColumns>
          </ProjectSection>
        </ThemeProvider>
        <ThemeProvider themeId="dark">
          <Earth
            className="spr__earth"
            hideMeshes={useMemo(
              () => ['Atmosphere', 'EarthPartial', 'Chunk', 'EarthFull'],
              []
            )}
            position={useMemo(() => [0, 0, 0], [])}
            ref={earthSectionRef}
            labels={useMemo(
              () => [
                {
                  position: [0.54, 0.19, 0.18],
                  text: 'Pacific ring of fire',
                  hidden: true,
                },
                {
                  position: [0.47, -0.38, 0.04],
                  text: 'Ruapehu',
                  hidden: true,
                },
                {
                  position: [0.22, 0.44, -0.35],
                  text: 'St. Helens',
                  hidden: true,
                },
                {
                  position: [0.16, -0.06, 0.58],
                  text: 'Krakatoa',
                  hidden: true,
                },
                {
                  position: [0.11, 0.2, -0.56],
                  text: 'Parícutin',
                  hidden: true,
                },
                {
                  position: [0.52, 0.2, -0.23],
                  text: 'Kīlauea',
                  hidden: true,
                },
                {
                  position: [-0.24, 0.75, 0.24],
                  text: 'Mantle',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.55, 0.24],
                  text: 'Outer core',
                  delay: 800,
                  hidden: true,
                },
                {
                  position: [-0.24, 0.35, 0.24],
                  text: 'Inner core',
                  delay: 800,
                  hidden: true,
                },
              ],
              []
            )}
            scale={0.6}
          >
            <EarthSection
              scrim
              animations={['0:loop']}
              camera={[0, 0, 1.5]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent>
                  <ProjectTextRow center>
                    <ProjectSectionHeading>
                      Next-generation learning experiences
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      The flexibility of the product allowed for developers to create
                      engaging interactive experiences as highly configurable plugins that
                      could then be used and manipulated by learning designers.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[0, 0, 2.4]}
              meshes={['Atmosphere', 'EarthFull']}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[1.14, -1.39, 0.94]}
              meshes={['Atmosphere', 'EarthFull']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Bringing 3D into learning
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      One really cool example is the 3D screen plugin. Learning designers
                      can load any model into it and then configure camera positions to
                      animate to for each section.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.17, 0.69, -1.47]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="start" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Interactivity
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Learners can then be directed to specific parts of the model and
                      shown labels. They're also able to click and drag to orbit around
                      and freely explore at any time.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              animations={['0:loop']}
              camera={[1.81, 0.51, 0.43]}
              meshes={['Atmosphere', 'EarthFull']}
              labels={[
                'Pacific ring of fire',
                'Ruapehu',
                'St. Helens',
                'Krakatoa',
                'Parícutin',
                'Kīlauea',
              ]}
            />
            <EarthSection
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['EarthPartial', 'Chunk']}
              labels={['Mantle', 'Outer core', 'Inner core']}
            >
              <ProjectSection>
                <ProjectSectionContent width="xl">
                  <ProjectTextRow justify="end" width="s">
                    <ProjectSectionHeading level={4} as="h3">
                      Animation
                    </ProjectSectionHeading>
                    <ProjectSectionText>
                      Learning designers can pick an animation included in the model to
                      play or loop for any section without having to use any complex
                      animation tools.
                    </ProjectSectionText>
                  </ProjectTextRow>
                </ProjectSectionContent>
              </ProjectSection>
            </EarthSection>
            <EarthSection
              scrimReverse
              animations={['0:loop']}
              camera={[0.37, 1.02, 1.84]}
              meshes={['Atmosphere', 'EarthFull']}
            />
          </Earth>
        </ThemeProvider>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

export default ProjectSPR;
