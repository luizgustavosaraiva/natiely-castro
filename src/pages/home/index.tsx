import { ReactNode } from 'react';
import { NextPage } from 'next';
import { DefaultProvider } from '../../providers/defaultProvider';
import DefaultLayout from '../../components/layouts/DefaultLayout';

type HomeProps = {
  children?: ReactNode;
};

const Home: NextPage<HomeProps> = ({ children }) => {
  return (
    <DefaultProvider>
      <DefaultLayout>
        <div>
          <span>teste de home</span>
        </div>
      </DefaultLayout>
    </DefaultProvider>
  );
};

export default Home;
