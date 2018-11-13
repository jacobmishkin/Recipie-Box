import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/create">
      <a>Recipies</a>
    </Link>
    <Link href="/create">
      <a>Create Recipie</a>
    </Link>
    <Link href="/create">
      <a>Signup</a>
    </Link>
    <Link href="/create">
      <a>Account</a>
    </Link>
  </NavStyles>
);
export default Nav;
