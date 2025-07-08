import RouteGuard from "@/components/route-guard";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "sonner";

export default function RootLayout({
    children,
    sidebar,
}: Readonly<{
    children: React.ReactNode;
    sidebar: React.ReactNode;
}>) {
    return (
        <RouteGuard>
            <SidebarProvider>
                {sidebar}
                <main className="p-4 ">{children}</main>
                <Toaster closeButton />
            </SidebarProvider>
        </RouteGuard>
    );
}
