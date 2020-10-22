import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { Box, Flex, Text, Button, Image, Stack } from '@chakra-ui/core';
import MobileDrawer from '../ui/MobileDrawer';
import Logo from '../../assets/logo/logo.png';
import '../../stylesheets/html.css';

const MenuItems = ({ children, isLast, to = '/', ...rest }) => {
  return (
    <Text
      mb={{ base: isLast ? 0 : 8, sm: 0 }}
      mr={{ base: 0, sm: isLast ? 0 : 8 }}
      display="block"
      {...rest}
    >
      <RouterLink activeStyle={{ color: 'blue' }} exact to={to}>
        {children}
      </RouterLink>
    </Text>
  );
};

const Header = props => {
  return (
    <Stack
      top="0"
      position="sticky"
      zIndex={2}
      as="nav"
      direction="row"
      justify="space-between"
      align="center"
      wrap="wrap"
      shadow="
  0px 43px 261px rgba(0, 0, 0, 0.03), 0px 19.8802px 120.668px rgba(0, 0, 0, 0.0221583), 0px 11.375px 69.0436px rgba(0, 0, 0, 0.0198316), 0px 6.90454px 41.909px rgba(0, 0, 0, 0.0177566), 0px 4.16029px 25.252px rgba(0, 0, 0, 0.0149977), 0px 2.31672px 14.0619px rgba(0, 0, 0, 0.0112133), 0px 0.996405px 6.04795px rgba(0, 0, 0, 0.00624311);
;
"
      py="1rem"
      px={['2rem', '2rem', '3rem', '5rem']}
      color="primary.800"
      backgroundColor="white"
    >
      <Box>
        <Flex
          align={['center', 'center', 'center', 'center']}
          justify={['center', 'space-between', 'start', 'start']}
          direction={['column', 'row', 'row', 'row']}
          fontWeight="regular"
        >
          <RouterLink to="/">
            <Image mr={['0', '0', '0', '2rem']} src={Logo} htmlWidth="24px" />
          </RouterLink>
          <Box d={['none', 'none', 'none', 'flex']}>
            <MenuItems to="/">Beranda</MenuItems>
            <MenuItems to="/eksplorasi">Eksplorasi</MenuItems>
            <MenuItems to="/wisata-daerah">Wisata Daerah</MenuItems>
            <MenuItems to="/peta-wisata">Peta Wisata</MenuItems>
            <MenuItems to="/mitra-pariwisata">Mitra Pariwisata</MenuItems>
            <MenuItems to="/virtual-tour">Virtual Tour</MenuItems>
            <MenuItems to="/tentang">Tentang</MenuItems>
            <MenuItems to="/kontak">Kontak</MenuItems>
          </Box>
        </Flex>
      </Box>

      <Stack
        display={['none', 'none', 'none', 'block']}
        direction="row"
        spacing="1rem"
      >
        <RouterLink to="/rekomendasi">
          <Button px="2rem" colorScheme="blue">
            <Text fontWeight="bold">Rekomendasi</Text>
          </Button>
        </RouterLink>
      </Stack>

      <Box display={['block', 'block', 'block', 'none']}>
        <MobileDrawer />
      </Box>
    </Stack>
  );
};

export default Header;
