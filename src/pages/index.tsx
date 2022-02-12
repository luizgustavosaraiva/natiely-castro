import type { NextPage, GetServerSideProps } from 'next';

const Index: NextPage = () => <></>;

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: 'home',
      permanent: false,
    },
  };
};
