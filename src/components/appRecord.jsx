import React from "react";
import { appRecordList } from "../data/pageData";

const AppRecord = () => {
  return (
    <ol className="w-fit flex flex-row items-center gap-12">
      {appRecordList.map((data, index) => {
        return (
          <React.Fragment key={index}>
            <li className="w-fit">
              <h3 className="text-4xl pt-3 text-zinc-900 font-semibold font-poppins">{data.record}</h3>
              <h5 className="text-lg text-zinc-400 font-medium font-opensans">{data.name}</h5>
            </li>
          </React.Fragment>
        );
      })}
    </ol>
  );
};

export default AppRecord;
