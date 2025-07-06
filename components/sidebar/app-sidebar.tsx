"use client";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
} from "@/components/ui/sidebar";
import Link from "next/link";
import { Button } from "../ui/button";
import SidebarUserFoldersGroup from "./sidebar-user-folders-group";
import SidebarFoldersGroups from "./sidebar-folders-groups";
import { usePathname, useRouter } from "next/navigation";

export function AppSidebar() {
    const router = useRouter();
    const currentUrl = usePathname();
    return (
        <Sidebar>
            <SidebarHeader>
                <Link href="/">
                    <span className="text-xl">Password Manager </span>
                    <i className="fas fa-shield-halved fa-lg"></i>
                </Link>
            </SidebarHeader>
            <SidebarContent>
                <SidebarFoldersGroups currentUrl={currentUrl}>
                    <SidebarUserFoldersGroup />
                </SidebarFoldersGroups>
            </SidebarContent>
            <SidebarFooter>
                <Button
                    onClick={() => {
                        localStorage.clear();
                        router.push("/login");
                    }}
                >
                    Logout
                </Button>
            </SidebarFooter>
        </Sidebar>
    );
}
