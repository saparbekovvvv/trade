import React from "react";
import { useTrade } from "../../context/Context";
import { Table } from "antd";

const columns = [
  {
    title: "Type",
    dataIndex: "type",
  },
  {
    title: "Balance",
    dataIndex: "balance",
  },
  {
    title: "Description",
    dataIndex: "description",
  },
  {
    title: "Date",
    dataIndex: "date",
  },
];
export default function Balance() {
  const { trades } = useTrade();

  return (
    <div id="Balance" className="pt-[30px]">
      <div className="container">
        <div className=" w-full">
          <Table columns={columns} dataSource={trades} />
        </div>
      </div>
    </div>
  );
}
