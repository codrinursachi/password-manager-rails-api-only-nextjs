"use client";
import { getAuthToken } from "@/util/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useState } from "react";

export default function RouteGuard({
    children,
}: {
    children: React.ReactNode;
}) {
    const router = useRouter();
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        const token = getAuthToken();
        if (!token || token === "EXPIRED") {
            router.push("/login");
            setAuthorized(false);
        } else {
            setAuthorized(true);
            const handleBeforeUnload = () => {
                localStorage.clear();
            };
            addEventListener("beforeunload", handleBeforeUnload);
            setTimeout(() => {
                localStorage.clear();
                router.push("/login");
            }, new Date(localStorage.getItem("expiration") || "").getTime() - Date.now());
            return () => {
                removeEventListener("beforeunload", handleBeforeUnload);
            };
        }
    }, [router]);

    if (!authorized) return null;

    return <>{children}</>;
}
