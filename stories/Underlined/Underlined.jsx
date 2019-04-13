import { h } from 'preact';
import styled from 'styled-components';

export const Underlined = styled.p`
display: inline-block;
font-size: 0.9rem;
font-weight: 600;
border-radius: 0;
border-bottom: 1px solid var(--mdc-theme-secondary);
padding: 10px 20px;
box-shadow: var(--mdc-theme--box-shadow--floating);
margin: 0;
color: var(--mdc-theme-text-primary-on-background);
`;

