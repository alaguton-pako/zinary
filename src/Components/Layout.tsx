import Sidebar from "./SideBar";
import { HiHome } from "react-icons/hi";
import { Outlet } from "react-router-dom";
import Container from "./Container";
import ToggleSidebar from "./ToggleSidebar";
import SidebarLinkItem from "./SidebarLinkItem";
import image from "../images/sideBarImage.png";
import SearchComponent from "./SearchComponent";
import Wrapper from "./Wrapper";
import { LayoutDashboard, Wallet, User, Settings, Library, Users2Icon, Banknote, KeyboardMusic } from "lucide-react";

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar>
        <div className="flex flex-col justify-center w-full gap-3">
          <SidebarLinkItem
            href={"dashboard"}
            label="Dashboard"
            icon={<LayoutDashboard />}
          />

          <SidebarLinkItem href={"short-loans"} label="Short-loans" />
          <SidebarLinkItem
            href={"installment-loans"}
            label="Installment loans"
          />
          <SidebarLinkItem href={"loans"} label="Loans" icon={<Banknote />} />

          <SidebarLinkItem
            href={"transactions"}
            label="Transactions"
            icon={<Library />}
          />
          <SidebarLinkItem href={"users"} label="Users" icon={<Users2Icon />} />

          <SidebarLinkItem
            href={"payments"}
            label="Payments"
            icon={<HiHome />}
          />
          <SidebarLinkItem href={"wallet"} label="Wallet" icon={<Wallet />} />
          <SidebarLinkItem href={"staff"} label="Staff" icon={<User />} />
          <SidebarLinkItem
            href={"audit-trail"}
            label="Audit Trail"
            icon={<KeyboardMusic />}
          />
          <SidebarLinkItem
            href={"settings"}
            label="Settings"
            icon={<Settings />}
          />
        </div>

        <div className="flex flex-col h-[120px] w-full mb-10">
          <img
            src={image}
            alt="logo"
            className="h-full w-full object-cover object-center"
          />
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
