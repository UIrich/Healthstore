import React from 'react';
import {
  Flex,
  Input,
  Button,
  Box,
  chakra,
} from '@chakra-ui/react';

export default function Customers() {

  return (
    <Box maxW="9xl" mx={'auto'} pt={5} ml={{ base: 0, md: 60 }} px={{ base: 2, sm: 12, md: 17 }}>
    <Flex
      w="100%"
      maxWidth='7xl'
      mx="auto"
      px={{ base: 2, sm: 12, md: 17 }}
      my="6"
      direction="column"
    >

    <chakra.h1
          textAlign={'left'}
          fontSize={'4xl'}
          py={10}
          fontWeight={'bold'}>
          Clientes
    </chakra.h1>

      <Box
        flex="1"
        borderRadius="md"
      >
        <Input placeholder='Nome' width='auto' />
        <Input placeholder='CPF' width='auto' />
        <Input placeholder='E-mail' width='auto' />
        <Input placeholder='Telefone' width='auto' />

        <Flex
          justify="space-between"
          align="center"
          py="5"
        >

        <Input placeholder='Cidade' width='auto' />
        <Input placeholder='Estado' width='auto' />
        <Input placeholder='Endereço' width='auto' />

          <Flex
            flex="1"
            direction="row"
            align="center"
           >
          </Flex>
    </Flex>
    <Button as={'a'} href={'/dashboard/customers'} colorScheme={'blue'} variant={'solid'}>
    Salvar
    </Button>
    </Box>
    </Flex>
    </Box>
  )
}