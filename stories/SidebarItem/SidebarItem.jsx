import { h } from 'preact';
import styled from 'styled-components';

const DrawerItem = styled.a`
	display: flex;
	color: var(--theme-text-primary-on-background);
	font-size: var(--theme-reduced-font-size);
	height: auto;
	padding: 8px 16px;
	font-weight: 500;
	line-height: 1.375rem;
	text-decoration: none;
	letter-spacing: 1px;

	& > span.text {
		position: relative;
		display: flex;
		align-items: center;
		color: var(--theme-text-primary-on-background);
		transition: var(--transition-animation);
	}

	&.active {
		background: var(--theme-active-sidebar-item);

		& > span.text {
			transform: translateX(5px);
		}
	}

	&:hover {
		span.text {
			transform: translateX(5px);
		}
	}
`;

const stubbed = (onClick, e) => {
	e.preventDefault();
	if (onClick) {
		onClick(e);
	}
}

export const SidebarItem = ({ children, icon, onClick, ...props }) => (
	<DrawerItem {...props} onClick={stubbed.bind(null, onClick)}>
		{icon}
		<span class="text">
			{children}
		</span>
	</DrawerItem>
);