import { SearchIcon } from "lucide-react";
import { ChevronDown } from "lucide-react";
import { ChevronsUpDown } from "lucide-react";
import Button from "../Button";
const All = () => {
  return (
    <>
      <div className="bg-white px-2 flex flex-col gap-2 mt-4 mb-6">
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
            <span className="text-xs text-gray-400 font-semibold">Display</span>
            <Button variant={"ghost"} className="rounded-lg font-medium">
              <ChevronDown className="h-2 w-2" />
            </Button>
            <span className="text-xs text-gray-400 font-semibold">Rows</span>
          </div>
        </div>
        <div className="my-4">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead className="text-sm">
                <tr className="bg-[#848484] text-white">
                  <th className="p-2 rounded-l-lg text-start">S/N</th>
                  <th className="p-2 text-start">
                    <div className="flex items-center">
                      <ChevronsUpDown className="mr-1" />
                      <span>Name</span>
                    </div>
                  </th>
                  <th className="p-2 text-start">Transaction Reference</th>
                  <th className="p-2 text-start">Type</th>
                  <th className="p-2 text-start">Amount</th>
                  <th className="p-2 text-start">
                    <div className="flex items-center gap-1">
                      <ChevronsUpDown className="mr-1" />
                      <span>Date</span>
                    </div>
                  </th>
                  <th className="p-2 rounded-r-lg text-start">
                    <div className="flex items-center">
                      <ChevronsUpDown className="mr-1" />
                      <span>Status</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="my-3">
                <tr className="bg-slate-400 text-black rounded-lg my-3">
                  <td className="p-2 text-start rounded-l-lg">0001</td>
                  <td className="p-2 text-start">Adenigba Ahmed Adefolarin</td>
                  <td className="p-2 text-start">lameda789@gmail.com</td>
                  <td className="p-2 text-start">Credit</td>
                  <td className="p-2 text-start">N34,698.140</td>
                  <td className="p-2 text-start">Dec 4, 2019 21:42</td>
                  <td className="p-2 text-start rounded-r-lg">Completed</td>
                </tr>
                <tr className="bg-slate-400 text-black rounded-lg my-3">
                  <td className="p-2 text-start rounded-l-lg">0001</td>
                  <td className="p-2 text-start">Adenigba Ahmed Adefolarin</td>
                  <td className="p-2 text-start">lameda789@gmail.com</td>
                  <td className="p-2 text-start">Credit</td>
                  <td className="p-2 text-start">N34,698.140</td>
                  <td className="p-2 text-start">Dec 4, 2019 21:42</td>
                  <td className="p-2 text-start rounded-r-lg">Completed</td>
                </tr>
                <tr className="bg-slate-400 text-black rounded-lg my-3">
                  <td className="p-2 text-start rounded-l-lg">0001</td>
                  <td className="p-2 text-start">Adenigba Ahmed Adefolarin</td>
                  <td className="p-2 text-start">lameda789@gmail.com</td>
                  <td className="p-2 text-start">Credit</td>
                  <td className="p-2 text-start">N34,698.140</td>
                  <td className="p-2 text-start">Dec 4, 2019 21:42</td>
                  <td className="p-2 text-start rounded-r-lg">Completed</td>
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
