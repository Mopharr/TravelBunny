import Head from 'next/head';
import Link from 'next/link';
import style from "../styles/create.module.css";


const Login = () => {
  return (
    <div>
      <Head>
        <title>One Secure</title>
        <meta name='description' content='One Secure' />
        <link rel='icon' href='/logo.png' />
      </Head>

      <main className={style.main}>
        <div className={style.rightBa}>
          <div className={style.right}>
            <Link href='/' className={style.logo}>
              <img src='/logo.png' alt='logo' /> <span>TravelBunny</span>
            </Link>

            <h2>Log in to your TravelBunny account</h2>
            <p>
              Welcome back. Explore beautiful locations around the world and
              create amazing memories.
            </p>

            <div className={style.input}>
              <input type='email' placeholder='Email' />
            </div>
            <div className={style.input}>
              <input type='password' placeholder='OneSecure Password' />
            </div>

            <button>
              <Link href='/dashboard'>Login</Link>
            </button>
            <p className={style.login}>
              Don&lsquo;t have a TravelBunny <br /> account?
              <Link className={style.loginC} href='/signUp'>
                Sign up for free
              </Link>
            </p>
          </div>
        </div>
        <div className={style.leftBa}>
          <img src='/tra3.png' alt='' />
        </div>
      </main>
    </div>
  );
};

export default Login;
