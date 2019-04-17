import { h } from 'preact';
import { createGlobalStyle } from 'styled-components';

export const colorPrimary = `#5D8CAE`;
export const colorSecondary = `#C67DCB`;
export const primaryGradient = `linear-gradient(to bottom, var(--theme-primary) -40%, var(--theme-complementary-color) 170%)`;
export const sidebarBG = `rgb(26, 26, 26)`;
export const commonBG = `#111111`;
export const inputBG = `rgba(0, 0, 0, 0.7)`;
export const commonFG = `#ffffff`;

export const THEME_PRIMARY = `--theme-primary`;
export const THEME_SECONDARY = `--theme-secondary`;
export const THEME_BACKGROUND = `--theme-background`;
export const THEME_PRIMARY_FONT_COLOR = `--theme-primary-font`;
export const THEME_ERROR_BG = `--theme-error-message`;
export const THEME_ERROR_FG = `--theme-error-message-color`;
export const THEME_LINK_PRIMARY_ON_BG = `--theme-link-primary-on-background`;
export const THEME_LINK_PRIMARY_ON_BG_HOVER = `--theme-link-primary-on-background-hover`;
export const THEME_TEXT_PRIMARY = `--theme-text-primary`;
export const THEME_COMPLEMENTARY_COLOR = `--theme-complementary-color`;
export const LAYOUT_GRID_MARGIN_PHONE = `--layout-grid-margin-phone`;
export const THEME_FOOTER_BACKGROUND = `--theme-footer-background`;
export const THEME_PRIMARY_FONT_DARKER = `--theme-primary-font-darker`;
export const THEME_TABS_BG = `--theme-tabs-bg`;

export const CSSVariables = createGlobalStyle`
:root {
	${THEME_PRIMARY}: #5D8CAE;
	${THEME_SECONDARY}: #c67dcb;
	${THEME_PRIMARY_FONT_COLOR}: #FFFFFF;
	${THEME_ERROR_BG}: #b64040;
	${THEME_ERROR_FG}: #FFFFFF;
	${THEME_LINK_PRIMARY_ON_BG}: #5D8CAE;
	${THEME_LINK_PRIMARY_ON_BG_HOVER}: #c67dcb;
	${THEME_TEXT_PRIMARY}: #333;
	${THEME_COMPLEMENTARY_COLOR}: #c67dcb;
	${LAYOUT_GRID_MARGIN_PHONE}: 0 !important;
	${THEME_FOOTER_BACKGROUND}: #cfcfcf;
	${THEME_PRIMARY_FONT_DARKER}: #ccc;
	${THEME_BACKGROUND}: #fff;
	${THEME_TABS_BG}: #ccc;
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
