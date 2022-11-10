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
    <link rel='preconnect' href='https://fonts.googleapis.com' />
    <link
      rel='preconnect'
      href='https://fonts.gstatic.com'
      crossOrigin='true'
    />
    <link
      href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap'
      rel='stylesheet'
    />
  </Head>
);

PageHead.defaultProps = {
  description: 'Your No. 1 Travel Tour Paddie',
};

export default PageHead;
