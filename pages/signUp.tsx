import style from "../styles/create.module.css";
import Head from "next/head";
import Link from "next/link";

const SignUp = () => {
  return (
    <div>
      <Head>
        <title>One Secure</title>
        <meta name="description" content="One Secure" />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main className={style.main}>
        <div className={style.rightBa}>
          <div className={style.right}>
            <Link href="/" className={style.logo}>
              <img src="/logo.png" alt="logo" /> <span>TravelBunny</span>
            </Link>

            <h2>Create a TravelBunny account</h2>
            <p>
              Explore beautiful locations around the world and organize trips
              with friends, and friendly strangers.
            </p>

            <div className={style.input}>
              <input type="text" placeholder="Username" />
            </div>
            <div className={style.input}>
              <input type="email" placeholder="Email" />
            </div>
            <div className={style.input}>
              <input type="text" placeholder="Password" />
            </div>

            <button>
              <Link href="/dashboard">Create Account</Link>
            </button>
            <p className={style.login}>
              Don&lsquo;t have a TravelBunny <br /> account?
              <Link className={style.loginC} href="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
        <div className={style.leftBa}>
          <img src="/tra3.png" alt="" />
        </div>
      </main>
    </div>
  );
};

export default SignUp;
