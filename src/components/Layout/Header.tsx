import React, { useState } from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { UseAuth } from '../../contexts/AuthContext';
import { useHistory, } from 'react-router-dom';
import './Header.css';
const Header = (props: any) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(!dropdownOpen);
    const History = useHistory();
    const Auth = UseAuth();

    return (
        <div>
            <Nav className={"justify-content-end"}  >
                <Dropdown nav isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle className={"dropdownToogle"}>
                    <i className="fa fa-user-circle"></i>
                    </DropdownToggle>
                    <DropdownMenu className="profile-wrapper" >
                        <DropdownItem onClick={async () => { await Auth?.logout(); History.push("/signIn") }}  >
                            Logout
                        </DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </Nav>
        </div>
    );
}

export default Header;