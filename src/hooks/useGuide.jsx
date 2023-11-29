import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";



const useGuide = () => {
    const axiosSecure = useAxiosSecure();
    const {data: guide = [], isPending: loading, refetch} = useQuery({
        queryKey: ['guide'], 
        queryFn: async() =>{
            const res = await axiosSecure.get('/guide');
            return res.data;
        }
    })


    return [guide, loading, refetch]
   
};

export default useGuide;