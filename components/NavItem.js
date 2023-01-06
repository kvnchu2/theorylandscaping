import Link from "next/link";
import { useRouter } from 'next/router';
const NavItem = ({ text, href, active }) => {
  const router = useRouter();
  return (
    <>
      <Link href={href}>
        {/* <a className={`nav__link`} >{text}</a> */}
        <a className={router.pathname === href ? "active" : "nav__link"} >{text}</a>
        
      </Link>
      {/* <div className={router.pathname === href ? "active-underscore" : "inactive-underscore"}></div> */}
    </>
  );
};

export default NavItem;
