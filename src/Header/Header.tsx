import { Avatar, Indicator } from "@mantine/core";
import { IconAnchor, IconBell, IconSettings } from "@tabler/icons-react";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 text-white h-20 px-6 flex justify-between items-center font-['poppins']">
      {/* Logo Section */}
      <div className="flex gap-1 items-center text-bright-sun-400">
        <IconAnchor size={32} strokeWidth={2.5} />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>

      {/* Navigation Links */}
      <NavLinks />

      {/* User Section */}
      <div className="flex gap-3 items-center">
        {/* User Info */}
        <div className="flex items-center gap-2">
          <div>Vikas Saini</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>

        {/* Settings Icon */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings size={24} strokeWidth={1.5} />
        </div>

        {/* Notifications Icon */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="yellow" offset={6} size={8} processing>
            <IconBell size={24} strokeWidth={2} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
