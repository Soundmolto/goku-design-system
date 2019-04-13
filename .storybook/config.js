import { configure, addParameters, addDecorator } from '@storybook/preact';
import { create } from '@storybook/theming';
import { colorPrimary, colorSecondary, sidebarBG, commonBG, inputBG } from '../stories/constants';
import { withOptions } from '@storybook/addon-options';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /.story.jsx?$/);
const loadStories = () => {
  document.body.className += ` mdc-theme--dark`
  req.keys().forEach(filename => req(filename));
}

// coral / ocean highlights
const theme = create({
  base: 'dark',
  colorPrimary: colorPrimary,
  colorSecondary: colorSecondary,
  appBg: sidebarBG,
  barBg: commonBG,
  appContentBg: commonBG,
  inputBg: inputBG,
  brandImage: null,
  brandTitle: `Goku Design System`
  
});

addParameters({ options: { theme } });

addDecorator(
  withOptions({
    name: 'Goku',
    showAddonPanel: false,
    addonPanelInRight: false,
    url: 'https://github.com/soundmolto/goku-design-system',
  }),
);


configure(loadStories, module);
