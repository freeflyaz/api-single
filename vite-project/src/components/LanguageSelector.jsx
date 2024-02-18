import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
// import 'flag-icon-css/css/flag-icon.min.css';

const LanguageSelector = ({ onLanguageChange }) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
      <span className="flag-icon flag-icon-us mr-2"></span>English
      </MenuButton>
      <MenuList>
        {/* <MenuItem onClick={() => onLanguageChange('en')} >
          <span className="flag-icon flag-icon-us mr-2"></span>English
        </MenuItem> */}
        <MenuItem onClick={() => onLanguageChange('de')}>
          <span className="flag-icon flag-icon-de mr-2"></span> Deutsch
        </MenuItem>
        <MenuItem onClick={() => onLanguageChange('es')}>
          <span className="flag-icon flag-icon-es mr-2"></span> Español
        </MenuItem>
        {/* Add more languages as needed */}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
