import Link from 'next/link';
import NavStyles from './styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href="/">
      <a>Recipes</a>
    </Link>
    <Link href="/create">
      <a>Create Recipe</a>
    </Link>
    <Link href="/create">
      <a>Menus</a>
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
