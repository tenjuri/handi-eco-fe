import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ProtectedRoute = ({
  children,
  isAuthenticated,
}: {
  children: React.ReactNode;
  isAuthenticated: boolean;
}) => {
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/admin");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return children;
};

export default ProtectedRoute;
