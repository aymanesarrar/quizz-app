import { fetcher } from "./fetcher";
import useSWR from "swr";

const useData = () => {
	const {data, error} = useSWR('https://restcountries.com/v2/all', fetcher);
	return {
		data: data,
		isLoading: !error && !data,
		isError: error,
	}
}
export {useData};