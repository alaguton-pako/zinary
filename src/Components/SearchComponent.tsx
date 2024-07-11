import React from "react";
import { SearchIcon } from "lucide-react";
import ahmed from "../images/passPort.jpg";
import { ChevronDown } from "lucide-react";

const SearchComponent = () => {
  return (
    <>
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center p-4 gap-2 rounded-md">
          <div>
            <SearchIcon />
          </div>
          <div>
            <input type="text" className="w-full p-2" />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <div>
              <p className="text-gray-500">Adenigba Ahmed Adefolarin</p>
            </div>
            <div className="h-10 w-10 rounded-full">
              <img
                src={ahmed}
                alt="profile_picture"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div>
              <ChevronDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchComponent;
