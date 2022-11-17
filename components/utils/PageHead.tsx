import Head from 'next/head';

type Props = {
  title: string;
  description?: string;
};

const PageHead = ({ title, description }: Props) => (
  <Head>
    <title>{title}</title>
    <meta name='description' content={description} />
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link
      rel='preconnect'
      href='https://fonts.gstatic.com'
      crossOrigin='true'
    />

    <link rel='icon' href='/logo.png' />
  </Head>
);

PageHead.defaultProps = {
  description: 'Your No. 1 Travel Tour Paddie',
};

export default PageHead;
