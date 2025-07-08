import LoginDialog from "@/components/logins/login-dialog";
import TrashedLoginsTable from "@/components/trashed-logins/trashed-logins-table";

const TrashPage = () => {
    
    return (
        <div className="flex flex-col gap-4">
            <h1>Trash Page</h1>
            <LoginDialog />
            <TrashedLoginsTable />
        </div>
    );
};

export default TrashPage;
