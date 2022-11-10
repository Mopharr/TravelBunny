import Head from 'next/head';

type Props = {
  title: string;
  description?: string;
};

const PageHead = ({ title, description }: Props) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    {/* <link rel='icon' href='/favicon.ico' /> */}
  </Head>
);

PageHead.defaultProps = {
  description: 'Your No. 1 Travel Tour Paddie',
};

export default PageHead;
