import { SearchIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronsUpDown } from "lucide-react";
import Button from "../Button";
const All = () => {
  return (
    <>
      <div className="bg-white px-2 flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <div className="relative flex items-center w-full my-2">
            <SearchIcon className="absolute left-3" />
            <input
              type="text"
              className="w-[1/5] p-2 pl-10 rounded-lg bg-[#f7f6f3]"
              placeholder="search"
            />
          </div>
          <div className="flex items-center gap-1">
            <span className="text-xs text-gray-400 font-semibold">
              Duration
            </span>
            <Button variant={"ghost"} className="rounded-lg font-medium">
              <ChevronDown className="h-2 w-2" />
            </Button>
            <span className="text-xs text-gray-400 font-semibold">Rows</span>
          </div>
        </div>
        <div className="mb-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-[#848484] text-white rounded-lg">
                  <th className="p-2 rounded-l-lg">S/N</th>
                  <th className="p-2">
                    <div className="flex items-center">
                      <ChevronsUpDown className="mr-1" />
                      <span>Name</span>
                    </div>
                  </th>
                  <th className="p-2">Transaction Reference</th>
                  <th className="p-2">Type</th>
                  <th className="p-2">Amount</th>
                  <th className="p-2">
                    <div className="flex items-center gap-1">
                      <ChevronsUpDown className="mr-1" />
                      <span>Date</span>
                    </div>
                  </th>
                  <th className="p-2 rounded-r-lg">
                    <div className="flex items-center">
                      <ChevronsUpDown className="mr-1" />
                      <span>Status</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white my-2">
                  <td className="p-2 text-center">1</td>
                  <td className="p-2 text-center">John Doe</td>
                  <td className="p-2 text-center">123456</td>
                  <td className="p-2 text-center">Credit</td>
                  <td className="p-2 text-center">$100</td>
                  <td className="p-2 text-center">2024-07-11</td>
                  <td className="p-2 text-center">Completed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default All;
