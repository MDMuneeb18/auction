import { Modal } from "antd";
import React from "react";
//import Divider from "../../components/Divider";
import MenuDivider from "antd/es/menu/MenuDivider";

function Notifications({
  notifications = [],
  reloadNotifications,
  showNotifications,
  setShowNotifications,
}) {
  return (
    <Modal
      title="Notifications"
      open={showNotifications}
      onCancel={() => setShowNotifications(false)}
      footer={null}
      centered
      width={1000}
    >
      <div className="flex flex-col gap-2">
        {notifications.map((notification) => (
          <div className="flex flex-col gap-2 items-center border border-solid p-2">
            <h1>{notification.title}</h1>

            <span>{notification.message}</span>
          </div>
        ))}
      </div>
    </Modal>
  );
}

export default Notifications;
