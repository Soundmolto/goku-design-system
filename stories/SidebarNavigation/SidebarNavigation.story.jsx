import { h } from 'preact';
import { storiesOf } from '@storybook/preact';
import { SidebarNavigation } from './SidebarNavigation';
import { SidebarItem } from '../SidebarItem/SidebarItem';
import { SidebarHeader } from '../SidebarHeader/SidebarHeader';

storiesOf('SidebarNavigation', module)
    .add('Singular item', () => (
        <SidebarNavigation style={{ width: '100%' }} className="open">
            <SidebarHeader>Test</SidebarHeader>
            <SidebarItem
                href={`/hello`}
            >
                Hello
            </SidebarItem>
        </SidebarNavigation>
    ));