import React from "react";
import Wrapper from "../Components/Wrapper";
import Button from "../Components/Button";
import { ChevronDown } from "lucide-react";
import LineChart from "../Components/LineChart";
import Card from "../Components/Card";
import WalletTableComponent from "../Components/WalletTableComponent";
const Wallet = () => {
  const walletItem = [
    { id: "1", Title: "Withdrawals", amount: "N3,403,300", cases: "722" },
    { id: "2", Title: "Withdrawals", amount: "N3,403,300", cases: "722" },
    { id: "3", Title: "Withdrawals", amount: "N3,403,300", cases: "722" },
    { id: "4", Title: "Withdrawals", amount: "N3,403,300", cases: "722" },
  ];

  const middleWalletItem = [
    { id: "1", title: "Total Withdrawals", amount: "N3,403,300" },
    { id: "2", title: "Total Deposits", amount: "N3,403,300" },
    { id: "3", title: "Total Payments", amount: "N3,403,300" },
    { id: "4", title: "Total Commission", amount: "N3,403,300" },
    { id: "4", title: "Total Amount", amount: "N3,403,300" },
  ];

  return (
    <Wrapper>
      <div className="flex flex-col gap-6">
        <div className="my-2 flex items-center justify-between">
          <div>
            <p className="text-xl text-gray-500 font-semibold">
              Wallet Overview
            </p>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-400 font-semibold">
              Duration
            </span>
            <Button variant={"ghost"} className="rounded-lg font-medium">
              Today
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="h-[1px] w-full bg-black my-2"></div>
        <div className="grid grid-cols-12 gap-2">
          <div className="col-span-4 h-[500px]">
            <Card className="w-full h-full p-2 grid grid-cols-12 gap-1">
              {walletItem.map((item) => (
                <Card
                  key={item.id}
                  className="col-span-6 h-[200px] bg-[#FFF7E5]"
                >
                  <div className="flex flex-col gap-2">
                    <h1 className="text-lg text-gray-500 font-semibold mt-4">
                      {item.Title}
                    </h1>
                    <h1 className="text-md text-[#ff6610] font-semibold mt-6">
                      {item.amount}
                    </h1>
                    <h1 className="text-md">{item.cases} Cases</h1>
                  </div>
                </Card>
              ))}
              <div className="col-span-12">
                <Card className="bg-[#505050] text-white w-full">
                  <p className="text-md font-semibold">
                    Total Amount N3,403,300
                  </p>
                </Card>
              </div>
            </Card>
          </div>
          <div className="col-span-2 h-[500px]">
            <Card className="w-full h-full bg-[#ff6610] flex flex-col justify-center">
              {middleWalletItem.map((item, index) => (
                <div className="flex flex-col gap-3" key={index}>
                  <p className="text-sm text-white">{item.title}</p>
                  <span className="font-semibold text-white">
                    {item.amount}
                  </span>
                  {index < middleWalletItem.length - 1 && (
                    <div className="h-[1px] w-full bg-white my-2"></div>
                  )}
                </div>
              ))}
            </Card>
          </div>
          <div className="col-span-6 h-[500px]">
            <Card className="w-full h-full">
              <LineChart />
            </Card>
          </div>
        </div>
        <div className="">
          <WalletTableComponent />
        </div>
      </div>
    </Wrapper>
  );
};

export default Wallet;
