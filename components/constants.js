import { h } from 'preact';
import { createGlobalStyle } from 'styled-components';

export const colorPrimary = `#5D8CAE`;
export const colorSecondary = `#C67DCB`;
export const primaryGradient = `linear-gradient(to bottom, var(--theme-primary) -40%, var(--theme-complementary-color) 170%)`;
export const sidebarBG = `rgb(26, 26, 26)`;
export const commonBG = `#111111`;
export const inputBG = `rgba(0, 0, 0, 0.7)`;
export const commonFG = `#ffffff`;

export const CSSVariables = createGlobalStyle`
:root {
	--theme-primary: #5D8CAE;
	--theme-secondary: #c67dcb;
	--theme-primary-font: #FFFFFF;
	--theme-error-message: #b64040;
	--theme-error-message-color: #FFFFFF;
	--theme-link-primary-on-background: #5D8CAE;
	--theme-link-primary-on-background-hover: #c67dcb;
	--theme-text-primary: #333;
	--theme-complementary-color: #c67dcb;
	--layout-grid-margin-phone: 0 !important;
	--theme-footer-background: #cfcfcf;
	--theme-primary-font-darker: #ccc;
	--theme-background: #fff;
	--theme-tabs-bg: #ccc;
	--theme-text-primary-on-background: #333333;

	--theme-box-shadow-floating: 0 15px 20px -15px rgba(0, 0, 0, 0.35);
	--theme-card-bg: #efefef;
	--theme-volume-panel-background: rgba(0, 0, 0, 0.8);
	--theme-sidebar-footer-bg: #fff;
	--theme-sidebar-footer-fg: rgb(26, 26, 26);
	--theme-search-bg: rgba(0, 0, 0, 0.2);
    --theme-floating-label-login-bg: #111;
    --theme-active-sidebar-item: rgba(0, 0, 0, 0.25);

    /** Font sizes */
    --theme-reduced-font-size: 0.8rem;

    /** Animation max speed */
	--animation-max: 100ms;
	--transition-animation: transform 100ms ease-in-out;
}

.theme-dark {
	--theme-text-primary-on-background: #fff;
	--theme-text-primary: #FFFFFF;
	--theme-background: #111;
	--theme-tabs-bg: #111;
	--theme-link-primary-on-background: #FFFFFF;
	--theme-footer-background: rgb(36, 36, 36);
	--theme-card-bg: #222222;
	--theme-volume-panel-background: rgba(0, 0, 0, 0.5);
	--theme-sidebar-footer-bg: rgb(26, 26, 26);
	--theme-sidebar-footer-fg: #fff;
	--theme-search-bg: rgba(0, 0, 0, 0.7);
	--theme-floating-label-login-bg: #000;
	/* #b64040 */
}

html, body {
    margin: 0;
    padding: 10px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

/** Allow toggling off animations from a browser provided setting */
@media screen and (prefers-reduced-motion: reduce) {
    :root {
		--animation-max: 0;
		--transition-animation: transform 0s ease-in-out;
    }
}

.animations-off {
	--animation-max: 0;
	--transition-animation: transform 0s ease-in-out;
}

`;
