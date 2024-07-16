import { MdClose, MdMenu, MdHomeFilled, MdCategory, MdShop2, MdContacts } from "react-icons/md";
import Link from 'next/link'
const Nav = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles}`}>
       <Link className="flex items-center justify-center gap-x-1" href={"/"} >
          <MdHomeFilled /> Home
        </Link>
        <Link className="flex items-center justify-center gap-x-1" href={"/institutional"}>
          <MdCategory />
       Institutional
        </Link>
        <Link className="flex items-center justify-center gap-x-1" href={"/office"}>
          <MdShop2 />
          Office
        </Link>
        <Link className="flex items-center justify-center gap-x-1" href={"/contact"}>
          <MdContacts />
    Contact
        </Link>
    </nav>
  );
};
export default Nav