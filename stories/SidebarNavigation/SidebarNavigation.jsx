import { h } from 'preact';
import styled from 'styled-components';

export const SidebarNavigation = styled.div`
display: block;
position: relative;
transition: transform 0.3s ease-in-out;
color: var(--theme-text-primary-on-background);
background: var(--theme-sidebar-footer-bg);

@media screen and (max-width: 1200px) {
	transform: translateX(-100%);
	z-index: 100 !important;
}

@media screen and (max-width: 1200px) {
	top: 64px;
}
`;

