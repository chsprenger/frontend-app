import React, {MouseEvent} from 'react';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {Menu, MenuItemProps, Segment} from 'semantic-ui-react';

interface IMenuItem {
    name: string;
    property: string;
    icon: React.ReactNode;
    disabled?: boolean;
    type?: string;
}

interface IMenuSection {
    header: string;
    items: IMenuItem[];
}

interface IProps extends RouteComponentProps<any> {
    navigationItems: IMenuSection[];
}

const toolNavigation = (props: IProps) => {
    const handleItemClick = (e: MouseEvent<HTMLAnchorElement>, {route}: MenuItemProps) => props.history.push(route);

    const {id} = props.match.params;
    const property = props.match.params.property || '';
    const path = props.match.path;
    const basePath = path.split(':')[0];
    const {navigationItems} = props;

    const menuItems = navigationItems.map((itemGroup, itemGroupIdx) => (
        <Menu.Item key={itemGroupIdx} className="menuItemGroup">
            <Menu.Header as="h4" className="menuItemHeader">{itemGroup.header}</Menu.Header>
            <Menu.Menu>
                {itemGroup.items.map((i, idx) => (
                    <Menu.Item
                        disabled={!id || i.disabled}
                        key={idx}
                        name={i.name}
                        active={property === i.property}
                        route={basePath + id + '/' + i.property + (i.type ? `/${i.type}` : '')}
                        onClick={handleItemClick}
                    >
                        {i.icon}{i.name}
                    </Menu.Item>
                ))}
            </Menu.Menu>
        </Menu.Item>
    ));

    return (
        <Segment color={'blue'} className="customMenuContainer">
            <Menu vertical={true} fluid={true} className="customVertMenu">
                {menuItems}
            </Menu>
        </Segment>
    );
};

export default withRouter(toolNavigation);