"use client";
import NotesDialog from "@/components/notes/notes-dialog";
import NotesTable from "@/components/notes/notes-table";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

function NotesPage() {
    const navigate = useRouter();
    return (
        <div className="flex flex-col gap-4">
            <h1>Notes</h1>
            <Button
                variant="outline"
                className="w-46"
                onClick={() => navigate.push("/notes/new")}
            >
                Create note
            </Button>
            <div className="flex flex-wrap gap-4">
                <NotesTable />
            </div>
            <NotesDialog />
        </div>
    );
}

export default NotesPage;
