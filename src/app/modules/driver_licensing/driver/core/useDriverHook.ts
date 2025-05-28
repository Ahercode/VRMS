import {useQuery} from "react-query";

export const useDriverHook = () => {

    const {data: driverData, isLoading: isDriverLoading, refetch: refetchDriverData} = useQuery(
        'driverData',
        () => fetch('/api/driver').then(res => res.json()),
        {cacheTime: 1000 * 60 * 5}
    )

    return {
        driverData,
        isDriverLoading,
        refetchDriverData
    };
}