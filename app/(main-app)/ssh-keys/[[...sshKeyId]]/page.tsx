import SSHKeyDialog from "@/components/ssh-keys/ssh-key-dialog";
import { Button } from "@/components/ui/button";
import SSHKeysTable from "@/components/ssh-keys/ssh-keys-table";
import Link from "next/link";

function SSHKeysPage() {
    return (
        <div className="flex flex-col gap-4">
            <h1>SSH Keys</h1>
            <Link href="/ssh-keys/new">
                <Button variant="outline" className="w-46">
                    Add SSH key
                </Button>
            </Link>
            <div className="flex flex-wrap gap-4">
                <SSHKeysTable />
            </div>
            <SSHKeyDialog />
        </div>
    );
}

export default SSHKeysPage;
