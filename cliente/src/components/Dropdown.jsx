



"use client";

import { Dropdown } from "flowbite-react";

export function UserDropdown({ logoutHandler }) {
  return (
    <Dropdown label="User" inline>
      <Dropdown.Item>Perfil</Dropdown.Item>
      
      <Dropdown.Item onClick={logoutHandler}>sign out</Dropdown.Item>
    </Dropdown>
  );
}
