import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
} from '@chakra-ui/react';

export default function SplitScreen() {
  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Faça acesso na sua conta</Heading>
          <FormControl id="email">
            <FormLabel>E-mail</FormLabel>
            <Input type="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Senha</FormLabel>
            <Input type="password" />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Lembre-me</Checkbox>
              <Link color={'blue.500'}>Esqueceu a senha?</Link>
            </Stack>
            <Button colorScheme={'blue'} variant={'solid'}>
              Logar
            </Button>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Image'}
          objectFit={'cover'}
          src={
            'https://accordfarma.com.br/wp-content/uploads/2018/07/iStock-838467972-e1530644350162.jpg'
          }
        />
      </Flex>
    </Stack>
  );
}