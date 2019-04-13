/** @jsx h */
import { h } from 'preact';
import { commonFG } from '../constants';
import { Badge } from '../Badge/Badge';
import Goku from './goku.png';

const Main = props => (
  <article
    {...props}
    style={{
      padding: 15,
      lineHeight: 1.4,
      fontFamily: '"Helvetica Neue", Helvetica, "Segoe UI", Arial, freesans, sans-serif',
      color: commonFG,
    }}
  />
);

// eslint-disable-next-line react/prop-types
const Title = ({ children, ...props }) => <h1 {...props}>{children}</h1>;

/* eslint-disable-next-line react/prop-types */
const Introduction = () => (
  <Main>
    <Title>Welcome to Goku Design System <Badge>WIP</Badge></Title>
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
