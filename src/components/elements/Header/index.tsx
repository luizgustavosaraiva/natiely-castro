import { ReactNode } from 'react';

import { Container } from './styles';

interface HeaderProps {
  children?: ReactNode;
}

export function Header({ children }: HeaderProps) {
  return (
    <Container>
      <h1>Header</h1>
    </Container>
  );
}
