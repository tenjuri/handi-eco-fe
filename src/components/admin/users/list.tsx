import React, { useEffect, useState } from "react";
import { User } from "@/model/user.model";
import axiosInstance from "@/utils/axiosConfig";
import { Checkbox } from "antd";

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    axiosInstance.get("/users/all").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold">Name: {user.name}</h2>
            <p>Username: {user.userName}</p>
            <p>
              Admin: <Checkbox checked={user.isAdmin} />
            </p>
            <p>
              Root Admin: <Checkbox checked={user.isRootAdmin} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersList;
