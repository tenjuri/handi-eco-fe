import React from "react";
import { Drawer } from "antd";

type PropType = {
  open: boolean;
  setOpenMenu: (open: boolean) => void;
};
const MobileMenu: React.FC<PropType> = ({ open, setOpenMenu }) => {
  const onClose = () => {
    setOpenMenu(false);
  };
  return (
    <div>
      <Drawer onClose={onClose} open={open} closeIcon={false} width={300}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
};

export default MobileMenu;
