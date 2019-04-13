import { h } from 'preact';
import { storiesOf } from '@storybook/preact';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarItem } from './SidebarItem';

storiesOf('SidebarNavigation', module)
    .add('Singular item', () => (
        <SidebarNavigation style={{ width: '300px' }}>
            <SidebarItem>Hello</SidebarItem>
        </SidebarNavigation>
    ));