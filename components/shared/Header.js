import React from 'react';
import Link from 'next/link'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';



const DynamicRouterLink = ({route, title}) => {
    return (
        <Link href={route}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    );
};



export default class Example extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar className='port-navbar port-default absolute' color="transparent" light expand="md">
                    <NavbarBrand className='port-navbar-brand' href="/">Clinton M. Johnson</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className='port-navbar-item'>
                                <DynamicRouterLink route="/" title="Home" />
                            </NavItem>
                            <NavItem className='port-navbar-item'>
                                <DynamicRouterLink route="/about" title="About" />
                            </NavItem>
                            <NavItem className='port-navbar-item'>
                                <DynamicRouterLink route="/portfolio" title="Portfolio" />
                            </NavItem>
                            <NavItem className='port-navbar-item'>
                                <DynamicRouterLink route="/blogs" title="Blog" />
                            </NavItem>
                            <NavItem className='port-navbar-item'>
                                <DynamicRouterLink route="/cv" title="CV" />
                            </NavItem>
                            <NavItem className='port-navbar-item'>
                                <DynamicRouterLink route="/https://github.com/premieredesign" title="Github" />
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className='bg-white' nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
