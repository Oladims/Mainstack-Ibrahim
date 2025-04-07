import "./index.scss";
import { AiOutlineDownload } from "react-icons/ai";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { Button, Divider } from "@chakra-ui/react";

import SingleTransaction from "./TableRow";
import { Transaction } from "models/transaction";
import Empty from "./Empty";

interface Props {
  onOpen: () => void;
  data: Transaction[];
  count: number;
  clear: () => void;
}
const TransactionTable = ({ onOpen, data, count, clear }: Props) => {
  return (
    <div className="transactions-breakdown flex flex-col w-full gap-5">
      <div className="table-head flex items-center justify-between w-full">
        <div className="table-heading flex flex-col items-start gap-1">
          <h3 className="text-black">{data.length} Transactions</h3>
          <p className="text-grey">Your transactions for the last 7 days</p>
        </div>
        <div className="table-actions w-fit flex items-center gap-3">
          <Button
            rightIcon={<MdOutlineArrowDropDown className="" size="20px" />}
            onClick={onOpen}
            className="flex items-center gap-1 filter-btn"
          >
            <span>Filter</span>
            {count > 0 ? <span className="indicator rounded-full">{count}</span> : null}
          </Button>
          <Button
            rightIcon={<AiOutlineDownload className="" size="20px" />}
            className="flex items-center gap-1 filter-btn"
          >
            Export list
          </Button>
        </div>
      </div>
      <Divider />
      {data.length > 0 ? (
        <div className="table-body mt-3 flex flex-col w-full gap-6">
          {data.map((txn, i) => (
            <SingleTransaction data={txn} key={i} />
          ))}
        </div>
      ) : (
        <Empty reset={clear} />
      )}
    </div>
  );
};

export default TransactionTable;
