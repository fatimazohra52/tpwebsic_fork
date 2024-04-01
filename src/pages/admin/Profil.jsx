import { Grid, GridItem ,Stack,Image,Button,Divider,ButtonGroup,Heading,Text,Card, CardHeader, CardBody, CardFooter, HStack, Box} from '@chakra-ui/react'
import React from 'react'
import SideBarA from '../../components/SideBarA'
import { CopyIcon } from '@chakra-ui/icons'

export default function Profil() {
  return (
    <Grid templateColumns="repeat(6, 1fr)" bg="gray.50" >
      <GridItem as="aside"
        minHeight={{lg:"90vh"}}
        colSpan={{base:"6",lg:"1",xl:"1"}}
        bg="gray.800"
        p={{base:"20px",lg:"30px"}}
        >
          <SideBarA/>
      </GridItem>
      <GridItem as="main" colSpan={{base:"6",lg:"5",xl:"5"}} p="40px">
        <Heading ad="h1">Profil</Heading>  
        <Text mt="10px" ml="20px">nom utilisateur</Text> 
        <Grid display={{base:"table",md:"table",lg:"flex"}} gap={6}  mt="20px" ml="40px" mr="40px">
          <GridItem >
            <Card w="350px" boxShadow='lg' m={{base:"auto"}}>
              <CardBody>
                <Image
                  boxShadow='lg' rounded='lg' 
                  m="auto"
                  src='https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
                  w="200px" h="160px"
                  
                />
                <Stack mt="8" spacing='5'>
                  <HStack ml="50px">
                    <Heading size='sm'>Nom utilisateur :</Heading>
                    <Text>Fatimazohra52</Text>
                  </HStack>
                  <HStack ml="50px">
                    <Heading size='sm'>E-mail:</Heading>
                    <Text>fatimamdidri@gmail.com</Text>
                  </HStack>
                  <ButtonGroup margin="auto">
                  <Button as="a" href="/UserProfileEdit" colorScheme='gray' _hover={{boxShadow:"lg"}}>Editer votre profile</Button>
                </ButtonGroup>               
                </Stack> 
              </CardBody>
            </Card>
          </GridItem>
          <GridItem minW="400px">
            <Card boxShadow='lg' mt={{base:"20px"}}>
              <CardBody>
                <Stack spacing='3'>
                  <HStack>
                    <CopyIcon/>
                    <Heading size='md'>Information Générale</Heading>
                  </HStack>
                  <Box >
                    <HStack mb="5px">
                      <Heading size='sm'>Nom :</Heading>
                      <Text>fatima</Text>
                    </HStack>
                    <HStack mb="5px">
                      <Heading size='sm'>Prénom :</Heading>
                      <Text>maidri</Text>
                    </HStack>
                    <HStack mb="5px">
                      <Heading size='sm'>Adresse :</Heading>
                      <Text>Kifaine, Tlemcen</Text>
                    </HStack>
                    <HStack mb="5px">
                      <Heading size='sm'>Numéro de téléphone :</Heading>
                      <Text>0552314065</Text>
                    </HStack>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
            <Card boxShadow='lg' mt="20px">
              <CardBody>
                <Stack  spacing='3'>
                  <HStack>
                    <CopyIcon/>
                    <Heading size='md'>Autre Information</Heading>
                  </HStack>
                  <Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa optio molestias, tempore ut quo, impedit non ad reiciendis voluptatem, quaerat inventore in obcaecati laudantium aut aliquam est beatae dolore amet.</Text>
                </Stack>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>

      </GridItem>
    </Grid>
  )
}
