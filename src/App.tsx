import React from 'react'
import HomePage from './app/containers/HomePage';
import styled from 'styled-components';
import tw from 'twin.macro';

const AppContainer = styled.div`
  ${tw`h-full w-full flex flex-col`}
`

const App = () => {
  return (
    <AppContainer>
      <HomePage />
    </AppContainer>
  )
}

export default App