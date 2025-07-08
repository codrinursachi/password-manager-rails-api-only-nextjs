"use client";
import Link from "next/link";
import {
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "../ui/sidebar";
import { usePathname, useSearchParams } from "next/navigation";

const specialLocations = [
    ["All logins", "/logins"],
    ["Favorites", "/logins?favorite=true"],
    ["Shared by me", "/shared-logins/by-me"],
    ["Shared with me", "/shared-logins/with-me"],
    ["Notes", "/notes"],
    ["SSH Keys", "/ssh-keys"],
];

function SidebarFoldersGroups({ children }: { children: React.ReactNode }) {
    const searchParams = useSearchParams();
    const currentUrl =
        usePathname() +
        (searchParams.toString() ? "?" + searchParams.toString() : "");
    return (
        <>
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        {specialLocations.map(([name, path]) => (
                            <SidebarMenuItem key={path}>
                                <SidebarMenuButton
                                    asChild
                                    isActive={currentUrl === path}
                                >
                                    <Link href={path}>
                                        <span>{name}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        ))}
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
            {children}
            <SidebarGroup>
                <SidebarGroupContent>
                    <SidebarMenu>
                        <SidebarMenuItem key="trash">
                            <SidebarMenuButton
                                asChild
                                isActive={currentUrl === "/trash"}
                            >
                                <Link href="/trash">
                                    <span>Trash</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarGroupContent>
            </SidebarGroup>
        </>
    );
}

export default SidebarFoldersGroups;
