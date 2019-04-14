/** @jsx h */
import { h } from 'preact';
import { storiesOf } from '@storybook/preact';
import { Introduction } from './Introduction';

storiesOf('Introduction', module)
    .add('Getting started', () => <Introduction />);