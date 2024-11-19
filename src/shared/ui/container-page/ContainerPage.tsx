import { ReactNode } from 'react'
import { Flex } from '..'
import { Header } from 'widgets/Header'

interface ContainerPageProps {
  children: ReactNode
}

export const ContainerPage = ({
  children,
}: ContainerPageProps) => {
  return (
    <Flex flexDir='column' w="100%" h="100%">
      <Header />
      <Flex
        w="100%"
        h="100%"
        p="20px"
        overflowY={'scroll'}
        flexDirection="column"
        zIndex={0}
      >
        {children}
      </Flex>
    </Flex>
  )
}
