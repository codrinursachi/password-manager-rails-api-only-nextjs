import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import SidebarUserFoldersGroup from "@/components/sidebar/sidebar-user-folders-group";
import SidebarFoldersGroups from "@/components/sidebar/sidebar-folders-groups";
import ActionableLogoutButton from "@/components/actionable-items/actioniable-logout-button";
import { redirect } from "next/navigation";

export default function AppSidebar() {
    return (
        <Sidebar>
            <SidebarHeader>
                <Link href="/">
                    <span className="text-xl">Password Manager </span>
                    <i className="fas fa-shield-halved fa-lg"></i>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarFoldersGroups>
                    <SidebarUserFoldersGroup />
                </SidebarFoldersGroups>
            </SidebarContent>
            <SidebarFooter>
                <ActionableLogoutButton />
            </SidebarFooter>
        </Sidebar>
    );
}
