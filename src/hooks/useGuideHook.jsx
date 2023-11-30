import { useQuery } from "@tanstack/react-query";
import useAuth from "./UseAuth";
import useAxiosSecure from "./useAxiosSecure";


const useGuideHook = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: isGuide, isPending: isGuideLoading } = useQuery({
        queryKey: [user?.email, 'isGuide'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/guide/${user.email}`);
            console.log(res.data);
            return res.data?.guide;
        }
    })
    return [isGuide, isGuideLoading]
};

export default useGuideHook;