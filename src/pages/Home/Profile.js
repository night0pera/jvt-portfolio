import { Fragment } from 'react';
import classNames from 'classnames';
import { Transition } from 'react-transition-group';
import { Button } from 'components/Button';
import DecoderText from 'components/DecoderText';
import Divider from 'components/Divider';
import Image from 'components/Image';
import Section from 'components/Section';
import ProfileImg from 'assets/jvt-profile.jpg';
import ProfileImgLarge from 'assets/jvt-profile-large.jpg';
import ProfileImgPlaceholder from 'assets/jvt-profile-placeholder.jpg';
import { reflow } from 'utils/transition';
import { media } from 'utils/style';
// import { ReactComponent as KatakanaProfile } from 'assets/katakana-profile.svg';
import Heading from 'components/Heading';
import Text from 'components/Text';
import './Profile.css';

const ProfileText = ({ status, titleId }) => (
  <Fragment>
    <Heading
      className={classNames('profile__title', `profile__title--${status}`)}
      level={3}
      id={titleId}
    >
      <DecoderText text="Hi there" start={status !== 'exited'} delay={500} />
    </Heading>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      I’m Jaylord, currently I live in Philippines working as a freelancer and web
      developer. I've done remote work for clients, consulted for startups, and
      collaborated with talented people to create web products, creative design, and
      consumer use since I started as a front end developer. I have successfully created
      some responsive websites as well as many others that are fast, easy to use, and
      built using best practices. My primary areas of expertise are HTML, CSS, JS, and
      React.JS
    </Text>
    <Text
      className={classNames('profile__description', `profile__description--${status}`)}
      size="l"
    >
      In my spare time I like to practice Storybook and Material UI in React.JS, reading
      manga, playing rpg game. I’m always down for hearing about new projects, so feel
      free to drop me a line
      {/* In my spare time I like to practice Brazilian Jiu Jitsu, play video games, and{' '}
      <Link href="/projects/volkihar-knight">make mods</Link>. I’m always down for hearing
      about new projects, so feel free to drop me a line. */}
    </Text>
  </Fragment>
);

const Profile = ({ id, visible, sectionRef }) => {
  const titleId = `${id}-title`;

  return (
    <Section
      className="profile"
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible} timeout={0} onEnter={reflow}>
        {status => (
          <div className="profile__content">
            <div className="profile__column">
              <ProfileText status={status} titleId={titleId} />
              <Button
                secondary
                className={classNames('profile__button', `profile__button--${status}`)}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className="profile__column">
              <div className="profile__tag" aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={status !== 'entered'}
                  collapseDelay={1000}
                />
                <div
                  className={classNames(
                    'profile__tag-text',
                    `profile__tag-text--${status}`
                  )}
                >
                  About Me
                </div>
              </div>
              <div className="profile__image-wrapper">
                <Image
                  reveal
                  delay={100}
                  placeholder={ProfileImgPlaceholder}
                  srcSet={`${ProfileImg} 480w, ${ProfileImgLarge} 960w`}
                  sizes={`(max-width: ${media.mobile}px) 120vw, 480px`}
                  alt="Me standing in front of the Torii on Miyajima, an island off the coast of Hiroshima in Japan"
                />
                {/* <KatakanaProfile
                  className={classNames('profile__svg', `profile__svg--${status}`)}
                /> */}
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};

export default Profile;
