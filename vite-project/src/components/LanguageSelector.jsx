import React, { useState } from 'react';
import { Menu, MenuButton, MenuList, MenuItem, Button } from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
// Make sure you import the flag-icon-css library in your project entry file
// import 'flag-icon-css/css/flag-icon.min.css';

const LanguageSelector = ({ onLanguageChange }) => {
  // const [selectedLanguage, setSelectedLanguage] = useState('de');

  const languageLabels = {
    en: 'English',
    de: 'Deutsch',
    es: 'Español',
    tk: 'Türkçe',
    el: 'Greek',
    ja: 'Japanise',
    zh: 'Chinese',
    // Add more languages here
  };

  // Adjust the flag codes as necessary
  const languageFlags = {
    en: 'us', // ISO 3166-1 alpha-2 code for the United Kingdom
    de: 'de', // Germany
    es: 'es', // Spain
    tk: 'tr', // Turkey
    el: 'gr',
    ja: 'jp', // Japan
    zh: 'cn',

    // Add more flags here
  };

  // const handleLanguageChange = (lang) => {
  //   onLanguageChange(lang); // Notify parent component
  // };

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {/* <span className={`flag-icon flag-icon-${languageFlags[selectedLanguage]} mr-2`}></span>
        {languageLabels[selectedLanguage]} */}
        Your home Language
      </MenuButton>
      <MenuList>
        {Object.entries(languageLabels).map(([langCode, label]) => (
          <MenuItem key={langCode} onClick={() => onLanguageChange(langCode)}>
            <span className={`flag-icon flag-icon-${languageFlags[langCode]} mr-2`}></span>
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default LanguageSelector;
