interface NavBarProps {
  textColor: string;
  selectedTextColor: string;
}

const NavBar = (props: NavBarProps): JSX.Element => {
  const { textColor, selectedTextColor } = props;
  const red = `#50d71e`;
  const className = `bg-[${red}] shadow-md rounded-lg p-6 mb-4`;
  return (
    <nav className="p-4">
      <ul>
        <li className="mb-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Home
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            About
          </a>
        </li>
        <li className="mb-4">
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Portfolio
          </a>
        </li>
        <li>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
