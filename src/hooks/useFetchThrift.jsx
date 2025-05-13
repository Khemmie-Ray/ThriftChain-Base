import React, { useCallback, useEffect, useState } from "react";
import useContractInstance from "./useContractInstance";
import { readOnlyProvider } from "../constants/readOnlyProvider";

const useFetchThrift = () => {
  const contract = useContractInstance(true);
  const [thriftData, setThriftData] = useState([]);

  const thrifthandlers = useCallback((one, two, three, four) => {
    setThriftData((prev) => [
      ...prev,
      {
        one: Number(thriftId),
        two: Description,
        three: report,
      },
    ]);
  }, []);

  useEffect(() => {
    readOnlyProvider(contract.on("eventName", thrifthandlers));
    readOnlyProvider
      .listenerCount("eventName")
      .then((count) => console.log("Counter:", count));
    return () => {
      readOnlyProvider(contract.off("eventName", thrifthandlers));
    };
  }, [thrifthandlers, readOnlyProvider]);
  
  return <div>useFetchThrift</div>;
};

export default useFetchThrift;
