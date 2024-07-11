import Sidebar from "./SideBar";
import { HiHome } from "react-icons/hi";
import { Outlet } from "react-router-dom";
import Container from "./Container";
import ToggleSidebar from "./ToggleSidebar";
import SidebarLinkItem from "./SidebarLinkItem";
import image from "../images/sideBarImage.png";
import SearchComponent from "./SearchComponent";
import Wrapper from "./Wrapper";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar>
        <div className="flex flex-col justify-center w-full gap-3">
          <SidebarLinkItem
            href={"dashboard"}
            label="Dashboard"
            icon={<HiHome />}
          />

          <SidebarLinkItem
            href={"short-loans"}
            label="Short-loans"
            icon={<HiHome />}
          />
          <SidebarLinkItem
            href={"installment-loans"}
            label="Installment loans"
            icon={<HiHome />}
          />
          <SidebarLinkItem href={"loans"} label="Loans" icon={<HiHome />} />

          <SidebarLinkItem
            href={"transactions"}
            label="Transactions"
            icon={<HiHome />}
          />
          <SidebarLinkItem href={"users"} label="Users" icon={<HiHome />} />

          <SidebarLinkItem
            href={"payments"}
            label="Payments"
            icon={<HiHome />}
          />
          <SidebarLinkItem href={"wallet"} label="Wallet" icon={<HiHome />} />
          <SidebarLinkItem href={"staff"} label="Staff" icon={<HiHome />} />
          <SidebarLinkItem
            href={"audit-trail"}
            label="Audit Trail"
            icon={<HiHome />}
          />
          <SidebarLinkItem
            href={"settings"}
            label="Settings"
            icon={<HiHome />}
          />
        </div>

        <div className="flex flex-col w-full mb-16">
          <img src={image} alt="logo" />
        </div>
      </Sidebar>

      <Container>
        <nav className="sticky top-0 z-50 bg-white">
          <Wrapper>
            <div className="">
              <div className="flex items-center w-2/5 gap-2">
                <ToggleSidebar />
              </div>
              <div className="my-2">
                <SearchComponent />
              </div>
            </div>
          </Wrapper>
        </nav>
        <div className="">
          <Outlet />
        </div>
      </Container>
    </div>
  );
}
