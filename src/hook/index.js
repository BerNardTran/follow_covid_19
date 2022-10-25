import { useQuery } from "@tanstack/react-query";
import { getCountries } from "../api";

export const useCountry = () => {
    const result = useQuery(['country'], getCountries, { staleTime: 0 });
    return result;
}