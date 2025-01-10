import React, { useEffect, useState } from "react";
import { User } from "@/model/user.model";
import axiosInstance from "@/utils/axiosConfig";
import { Checkbox, Skeleton } from "antd";

const UsersList: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get("/users/all");
      setUsers(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      {loading ? (
        <Skeleton active className="h-[200px] w-full mt-10" />
      ) : (
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
      )}
    </div>
  );
};

export default UsersList;
