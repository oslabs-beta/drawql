import React from 'react';
import { Dropdown, DropdownMenu, DropdownToggle, DropdownItem, Button } from 'reactstrap'

export default () => {
    return (

        // <div>
        <Dropdown>
            <DropdownToggle variant="success" id="dropdown-basic">
                Dropdown Button
  </DropdownToggle>

            <DropdownMenu>
                <DropdownItem href="#/action-1">Action</DropdownItem>
                <DropdownItem href="#/action-2">Another action</DropdownItem>
                <DropdownItem href="#/action-3">Something else</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
    //     Welcome
    // </div>)
}