import { h } from 'preact';
import styled from 'styled-components';

const SidebarClass = styled.h1`
font-size: .7rem;
font-weight: 600;
color: var(--mdc-sidebar-footer-fg);
opacity: .7;
margin: 10px 0 0 10px;
text-transform: uppercase;
`;

export const SidebarHeader = ({ children, ...props }) => (
	<SidebarClass>{children}</SidebarClass>
);