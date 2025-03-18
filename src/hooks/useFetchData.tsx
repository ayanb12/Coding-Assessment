import { useEffect, useState } from "react";
import { normalizeDataByDate } from "../utils/normalizeData";
import { Transaction } from "../types/transaction"; // Importing the interface

//We will handle all API logic here
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

    //FOR HANDLING PAGINATION LOGIC
    // const handleScroll = () => {
    //   if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
    //     makeApiCall(currentPage + 1);
    //   }
    // };

    useEffect(() => {
      makeApiCall(props.cashflow);

      //OnScroll we change the page

      //   window.addEventListener('scroll', handleScroll);
      //   return () => {
      //     window.removeEventListener('scroll', handleScroll);
      //   }
    }, [props.cashflow]);

    if (isLoading || !data) {
      return <div>Loading...</div>; // checking any loading
    }

    if (error) {
      return <div>Something went wrong!...</div>; //checking any errors
    }

    return <Element data={data} {...props} />;
  };
};

export default useFetchData;
