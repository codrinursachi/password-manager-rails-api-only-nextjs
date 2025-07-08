"use client";

import { redirect } from "next/navigation";
import { Button } from "../ui/button";

function ActionableLogoutButton() {
    return (
        <Button
            onClick={() => {
                localStorage.clear();
                redirect("/login");
            }}
        >
            Logout
        </Button>
    );
}

export default ActionableLogoutButton;
