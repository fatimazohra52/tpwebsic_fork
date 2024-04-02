import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  Select,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'

export default function SProduitFormulaire() {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={6} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Ajouter un produit
          </Heading>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <FormControl id="" isRequired>
              <FormLabel>Nom de produit</FormLabel>
              <Input type="text" />
            </FormControl>
            <HStack>
                <Box>
                <FormControl id="" isRequired>
                  <FormLabel>Prix</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Box>
              <Box>
                <FormControl id="" isRequired>
                  <FormLabel>Quantité</FormLabel>
                  <Input type="number" />
                </FormControl>
              </Box>
            </HStack>
            <FormControl id="" isRequired>
            <FormLabel>Catégorie</FormLabel>
            <Select >
                <option value='option1'>Option 1</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            </FormControl>
            <FormControl id="" isRequired>
                <FormLabel>Description</FormLabel>
                    <Textarea placeholder='une description du produit' />
                </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'pink.400'}
                color={'white'}
                _hover={{
                  bg: 'pink.500',
                }}>
                Ajouter
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  )
}