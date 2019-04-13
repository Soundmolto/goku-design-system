import { h } from 'preact';
import styled from 'styled-components';

export const colorPrimary = `#5D8CAE`;
export const colorSecondary = `#C67DCB`;
export const primaryGradient = `linear-gradient(to bottom, var(--mdc-theme-primary) -40%, var(--mdc-theme-complementary-color) 170%)`;
export const sidebarBG = `rgb(26, 26, 26)`;
export const commonBG = `#111111`;
export const inputBG = `rgba(0, 0, 0, 0.7)`;
export const commonFG = `#ffffff`;

export const CSSVariables = styled.style`
:root {
	--mdc-theme-primary: #5D8CAE;
	--mdc-theme-secondary: #c67dcb;
	--mdc-theme-primary-font: #FFFFFF;
	--mdc-theme--error-message: #b64040;
	--mdc-theme--error-message-color: #FFFFFF;
	--mdc-theme-link-primary-on-background: #5D8CAE;
	--mdc-theme-link-primary-on-background--hover: #c67dcb;
	--mdc-theme-text-primary: #333;
	--mdc-theme-complementary-color: #c67dcb;
	--mdc-layout-grid-margin-phone: 0 !important;
	--mdc-theme--footer-background: #cfcfcf;
	--mdc-theme-primary-font--darker: #ccc;
	--mdc-theme-background: #fff;
	--mdc-theme-tabs-bg: #ccc;
	--mdc-theme-text-primary-on-background: #333333;

	--mdc-theme--box-shadow--floating: 0 15px 20px -15px rgba(0, 0, 0, 0.35);
	--mdc-theme--card-bg: #efefef;
	--mdc-theme--volume-panel--background: rgba(0, 0, 0, 0.8);
	--mdc-sidebar-footer-bg: #fff;
	--mdc-sidebar-footer-fg: rgb(26, 26, 26);
	--mdc-search-bg: rgba(0, 0, 0, 0.2);
	--floating-label-login-bg: #111;
}

.mdc-theme--dark {
	--mdc-theme-text-primary-on-background: #fff;
	--mdc-theme-text-primary: #FFFFFF;
	--mdc-theme-background: #111;
	--mdc-theme-tabs-bg: #111;
	--mdc-theme-link-primary-on-background: #FFFFFF;
	--mdc-theme--footer-background: rgb(36, 36, 36);
	--mdc-theme--card-bg: #222222;
	--mdc-theme--volume-panel--background: rgba(0, 0, 0, 0.5);
	--mdc-sidebar-footer-bg: rgb(26, 26, 26);
	--mdc-sidebar-footer-fg: #fff;
	--mdc-search-bg: rgba(0, 0, 0, 0.7);
	--floating-label-login-bg: #000;
	/* #b64040 */
}
`;
