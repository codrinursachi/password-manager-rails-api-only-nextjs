import NotesDialog from "@/components/notes/notes-dialog";
import NotesTable from "@/components/notes/notes-table";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function NotesPage() {
    return (
        <div className="flex flex-col gap-4">
            <h1>Notes</h1>
            <Link href="/notes/new">
                <Button variant="outline" className="w-46">
                    Create note
                </Button>
            </Link>
            <div className="flex flex-wrap gap-4">
                <NotesTable />
            </div>
            <NotesDialog />
        </div>
    );
}

export default NotesPage;
