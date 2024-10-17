import { Cog8ToothIcon, CreditCardIcon, Square3Stack3DIcon, Squares2X2Icon, UserGroupIcon } from "@heroicons/react/24/outline";
import Sidebar, { SidebarItem, SidebarContent } from "~/core/ui/Sidebar";
 
const AppSidebar= () => {
  return (
    <Sidebar>
      <SidebarContent className={'py-4'}>
        <div className="flex items-start mb-4 px-4">
          <img 
            src="/assets/images/milir/milirlogo1.png"
            alt="milir single"
            className="h-5 w-auto"
          />
        </div>
        <SidebarItem
          path={'#dashboard'}
          Icon={() => <Square3Stack3DIcon className={'w-4'} />}
        >
          Home
        </SidebarItem>
 
        <SidebarItem
          path={'#workspace'}
          Icon={() => <Squares2X2Icon className={'w-4'} />}
        >
          Pages & Events
        </SidebarItem>
 
        <SidebarItem
          path={'/milirdashboard/customers'}
          Icon={() => <UserGroupIcon className={'w-4'} />}
        >
          Customers
        </SidebarItem>
        
        <SidebarItem
          path={'/milirdashboard/features'}
          Icon={() => <CreditCardIcon className={'w-4'} />}
        >
          All Feature
        </SidebarItem>
 
        <SidebarItem
          path={'/milirdashboard/setting'}
          Icon={() => <Cog8ToothIcon className={'w-4'} />}
        >
          Setting
        </SidebarItem>
      </SidebarContent>
    </Sidebar>
  );
}

export default AppSidebar