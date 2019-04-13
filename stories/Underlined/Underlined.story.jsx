/** @jsx h */
import { h } from 'preact';
import { storiesOf } from '@storybook/preact';
import { Underlined } from './Underlined';

storiesOf('Underlined', module)
    .add('Standalone', () => <Underlined>Hello world</Underlined>);