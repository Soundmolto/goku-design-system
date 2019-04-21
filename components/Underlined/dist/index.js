'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

require('preact');
var styled = _interopDefault(require('styled-components'));

const Underlined=styled.p`
display: inline-block;
font-size: 0.9rem;
font-weight: 600;
border-radius: 0;
padding: 0 20px;
margin: 0;
color: var(--theme-text-primary-on-background);
position: relative;

&:after {
	display: block;
	position: absolute;
	bottom: -8px;
	height: 2px;
	width: 100%;
	border-radius: 2px;
	left: 0;
	content: " ";
	background: linear-gradient(to right, var(--theme-primary) -40%, var(--theme-complementary-color) 170%) !important;
}
`;

exports.Underlined = Underlined;
