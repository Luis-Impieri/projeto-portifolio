'use client';

import { Box, Flex, Heading, Grid, Image, Text, Link, Button } from '@chakra-ui/react';

export default function Home() {
  const projetos = [
    {
      titulo: "Next.js - Criação de usuário",
      descricao: "Projeto de criação de usuário e login com Next.js.",
      link: "https://github.com/Luis-Impieri/next.js-cria-o-de-usuarios"
    },
    {
      titulo: "Automação Selenium",
      descricao: "Cídog para buscar e acessar videos do youtube com Selenium",
      link: "https://github.com/Luis-Impieri/Selenium-com-python"
    },
    {
      titulo: "Back-end gerenciamento de hóspedes",
      descricao: "Nest.js com PostgreSQL para criar e gerenciar hóspedes",
      link: "https://github.com/Luis-Impieri/teste"
    },
    {
      titulo: "Chat Bot",
      descricao: "Chat bot criado em python com a API do GPT",
      link: "https://github.com/Luis-Impieri/Chat-Bot"
    },
    {
      titulo: "Machine Learning",
      descricao: "Machine Learning com regressão linear em python",
      link: "https://github.com/Luis-Impieri/Regressao-Linear"
    },
    {
      titulo: "Python para finanças",
      descricao: "Código em python para ler e tratar os valores mais recentes da bolsa.",
      link: "https://github.com/Luis-Impieri/Python-com-finan-as-"
    },
  ];
  return (
    <Box>
      {/* Navbar */}
      <Box bg="teal.500" color="white" py={4}>
        <Flex justify="flex-end" align="center" maxW="1200px" mx="auto" gap={4}>
          <Link href="https://github.com/Luis-Impieri" target="_blank" rel="noopener noreferrer">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/luis-impieri/" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </Link>
        </Flex>
      </Box>

      {/* Seção Sobre Mim */}
      <Box py={20}>
        <Grid templateColumns="repeat(2, 1fr)" gap={6} maxW="1200px" mx="auto" alignItems="center">
          <Image 
            src="/imagens/eu.png" 
            alt="Minha Foto" 
            width={500}  
            height={500}
            borderRadius="full" 
            boxSize="150px" 
            objectFit="cover"
          />
          <Box>
            <Heading as="h2" size="xl" mb={4}>Sobre Mim</Heading>
            <Text fontSize="lg">
              Desenvolvimento Fullstack JavaScript/TypeScript e Python. Análise de dados, SQL, Pandas e Power BI. Inglês avançado.
            </Text>
          </Box>
        </Grid>
      </Box>

      {/* Seção Projetos */}
      <Box py={20} bg="gray.100">
        <Heading as="h2" size="xl" textAlign="center" mb={12}>Projetos</Heading>
        <Grid templateColumns="repeat(3, 1fr)" gap={10} maxW="1200px" mx="auto">
          {projetos.map((projeto, i) => (
            <Box key={i} bg="black" p={6} boxShadow="md" borderRadius="md">
              <Heading as="h3" size="md" mb={2}>{projeto.titulo}</Heading>
              <Text>{projeto.descricao}</Text>
              <Link href={projeto.link} color="teal.500" target="_blank" rel="noopener noreferrer">
                Link do Projeto
              </Link>
            </Box>
          ))}
        </Grid>
      </Box>

      {/* Seção do Rodapé */}
      <Box bg="gray.900" color="white" py={4}>
        <Flex justify="space-between" align="center" maxW="1200px" mx="auto">
          <Text>© 2024 Minha Empresa</Text>
          <Text>Feito com ❤️ por Mim</Text>
        </Flex>
      </Box>
    </Box>
  );
}
