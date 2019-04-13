import { h } from 'preact';
import { commonFG } from '../constants';
import { Underlined } from '../Underlined/Underlined';

const Main = props => (
  <article
    {...props}
    style={{
      padding: 15,
      lineHeight: 1.4,
      color: commonFG,
    }}
  />
);

// eslint-disable-next-line react/prop-types
const Title = ({ children }) => <h1>{children}</h1>;

/* eslint-disable-next-line react/prop-types */
const Introduction = () => (
  <Main>
    <Title>Welcome to Goku Design System <Underlined title="Work in progress">WIP</Underlined></Title>
    <p>
      This is the storybook for SoundMolto
    </p>
    <p>
      All variables for colors etc are controlled via CSS Variables, <br />
      If this is not controllable yet, that's because I haven't made the lil addon for it yet.
    </p>
  </Main>
);

export { Introduction };
