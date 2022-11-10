import { CgMenuRight } from 'react-icons/cg';
import { HiOutlineBell } from 'react-icons/hi';
import { GoSettings } from 'react-icons/go';
import Image from 'next/image';
import PageHead from '../components/utils/PageHead';
import Logo from '../assets/images/logo.png';
import Avatar from '../assets/images/avatar.png';
import NavBar from '../components/blocks/NavBar';

const Home = () => (
  <>
    <PageHead title='Travel Bunny' />
    <div>
      <NavBar />
    </div>
  </>
);

export default Home;
