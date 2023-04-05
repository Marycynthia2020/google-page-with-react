import AppsLauncherIcon from "./AppsLauncherIcon";
import Avatar from "./Avatar";
import MenuItem from "./MenuItem";

const Header = () => {
  return (
    <div className="app-header">
      <div className="app-header-menu">
        <MenuItem title={"Gmail"} /> 
        <MenuItem title={"Images"} />
        <AppsLauncherIcon />
        <Avatar />
      </div>
    </div>
  );
};

export default Header;