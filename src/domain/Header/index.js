import Heading from "../../components/Heading";
import { APP_NAME } from "../../constants/app";

const Header = () => {
  return (
    <header>
      <Heading level={1} text={APP_NAME} />
    </header>
  );
};

export default Header;
