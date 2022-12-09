import { Container, SimpleGrid } from "@chakra-ui/react";

export const Layout= ({ children }: { children: React.ReactNode }) => (
    <Container  maxW='container.xl'>
      <SimpleGrid columns={{base:1,md:2,lg:3}} spacing={5}>
        {children}
      </SimpleGrid>
    </Container>
  )