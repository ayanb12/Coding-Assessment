import { useEffect, useState } from "react";
import { normalizeDataByDate } from "../utils/normalizeData";
import { Transaction } from "../types/transaction"; // Import the interface

// Define the props for the hook
interface UseFetchDataProps {
  cashflow: "inflow" | "outflow" | "";
}

// Define the hook with TypeScript generics
const useFetchData = <T,>(
  Element: React.ComponentType<{ data: T }>,
  url: string,
) => {
  return (props: UseFetchDataProps) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<boolean>(false);
    const [data, setData] = useState<any>(null);

    const makeApiCall = async (cashflow: string) => {
      setIsLoading(true);
      try {
        const res = await fetch(`${url}?cashflow=${cashflow}`);
        const jsonData: Transaction[] = await res.json(); // Use Transaction[]
        const groupedData = normalizeDataByDate(jsonData);
        setData(groupedData);
      } catch (e) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    useEffect(() => {
      makeApiCall(props.cashflow);
    }, [props.cashflow]);

    if (isLoading || !data) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Something went wrong!...</div>;
    }

    return <Element data={data} {...props} />;
  };
};

export default useFetchData;
