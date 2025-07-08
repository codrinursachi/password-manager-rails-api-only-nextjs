import LoginsTable from "@/components/logins/logins-table";
import LoginDialog from "@/components/logins/login-dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import LoginSearchForm from "@/components/logins/login-search-form";

const LoginsPage = () => {
    return (
        <div className="flex flex-col gap-4">
            <h1>Logins</h1>
            <LoginSearchForm />
            <Link href="/logins/new">
                <Button
                    variant="outline"
                    className="w-46"
                >
                    Create login
                </Button>
            </Link>
            <LoginDialog />
            {<LoginsTable />}
        </div>
    );
};

export default LoginsPage;
