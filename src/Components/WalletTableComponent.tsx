import React from "react";
import TabMenu from "./Tabs";
import All from "./WalletTable/All";
import Withdrawals from "./WalletTable/Withdrawals";
import Deposits from "./WalletTable/Deposits";
import Payments from "./WalletTable/Payments";
const WalletTableComponent = () => {
  const tabs = [
    {
      label: "All",
      slug: "all",
      content: <All />,
    },
    {
      label: "Withdrawals",
      slug: "withdrawals",
      content: <Withdrawals />,
    },
    {
      label: "Deposits",
      slug: "deposits",
      content: <Deposits />,
    },
    {
      label: "Payments",
      slug: "payments",
      content: <Payments />,
    },
  ];
  return (
    <>
      <div className="">
        <TabMenu tabs={tabs} />
      </div>
    </>
  );
};

export default WalletTableComponent;
