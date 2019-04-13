import { h, Fragment } from 'preact';
import { configure, addParameters, addDecorator } from '@storybook/preact';
import { create } from '@storybook/theming';
import { colorPrimary, colorSecondary, sidebarBG, commonBG, inputBG, CSSVariables } from '../stories/constants';
import { withOptions } from '@storybook/addon-options';

const req = require.context('../stories', true, /.stor(y|ies).jsx?$/);

const loadStories = () => {
	document.body.className += ` theme-dark`;
	req.keys().forEach(filename => req(filename));
}

const CSSDecorator = storyFn => <Fragment>
	<CSSVariables />
	{storyFn()}
</Fragment>;

const theme = create({
	base: 'dark',
	colorPrimary: colorPrimary,
	colorSecondary: colorSecondary,
	appBg: sidebarBG,
	barBg: commonBG,
	appContentBg: commonBG,
	inputBg: inputBG,
	brandImage: `https://app.soundmolto.com/assets/icons/android-chrome-192x192.png`,
	brandTitle: `Goku Design System`,
	brandUrl: 'https://github.com/soundmolto/goku-design-system',
});

addParameters({
	options: {
		theme
	}
});

addDecorator(
	withOptions({
		name: 'Goku',
		showAddonPanel: false,
		addonPanelInRight: false,
		url: 'https://github.com/soundmolto/goku-design-system',
	}),
);

addDecorator(CSSDecorator);


configure(loadStories, module);
