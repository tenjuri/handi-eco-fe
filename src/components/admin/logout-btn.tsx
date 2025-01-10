import { useUserStore } from "@/store/user.store";
import { Button } from "antd";
import { useRouter } from "next/navigation";

const LogoutBtn: React.FC = () => {
  const router = useRouter();
  const { setAccessToken, setRefreshToken, setUser } = useUserStore();
  const handleLogout = () => {
    setAccessToken("");
    setRefreshToken("");
    setUser(null);
    router.push("/admin/login");
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};

export default LogoutBtn;
