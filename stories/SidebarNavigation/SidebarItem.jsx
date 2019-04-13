import { h } from 'preact';
import styled from 'styled-components';

const DrawerItem = styled.div`
	color: var(--theme-text-primary-on-background);
	font-size: var(--theme-reduced-font-size);
	height: auto;
	padding: 8px 16px;
	font-weight: 600;
	line-height: 1.375rem;

	& > span.text {
		position: relative;
		display: flex;
		align-items: center;
		color: var(--theme-text-primary-on-background);
	}

	&.active {
		background: var(--theme-active-sidebar-item);

		& > span.text {
			transform: translateX(5px);
		}
	}
`;

export const SidebarItem = ({ children, ...props }) => (
	<DrawerItem {...props}>
		<span class="text">
			{children}
		</span>
	</DrawerItem>
);