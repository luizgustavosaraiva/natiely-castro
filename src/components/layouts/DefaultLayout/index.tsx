import { ReactNode } from 'react';

import { Container } from './styles';

interface DefaultLayoutProps {
  children: ReactNode;
}

function DefaultLayout({ children }: DefaultLayoutProps) {
  return <Container>{children}</Container>;
}

export default DefaultLayout;
