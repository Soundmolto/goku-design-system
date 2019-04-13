import { h } from 'preact';
import styled from 'styled-components';

export const SidebarNavigation = styled.div`
display: block;
position: relative;
transition: transform 0.3s ease-in-out;
color: var(--theme-text-primary-on-background);
background: var(--theme-sidebar-footer-bg);
height: calc(100vh - 40px - 16px);
font-size: 1rem;
font-weight: 400;
letter-spacing: .00937em;
text-decoration: inherit;
text-transform: inherit;
margin: 0;
padding: 8px 0;
line-height: 1.5rem;

@media screen and (min-width: 768px) {
	max-width: 185px;
}

@media screen and (max-width: 768px) {
	max-width: 400px;
}

@media screen and (max-width: 1200px) {
	transform: translateX(-100%);
	z-index: 100 !important;
}

&.open {
	transform: translateX(0) !important;
}
`;

