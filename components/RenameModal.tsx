"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";
import { useAppStore } from "@/store/store";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogHeader,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { Input } from "@/components/ui/input";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "@/firebase";
import toast from "react-hot-toast";

function RenameModal() {
  const { user } = useUser();
  const [input, setInput] = useState("");
  const [fileId, filename, isRenameModalOpen, setIsRenameModalOpen] =
    useAppStore((state) => [
      state.fileId,
      state.filename,
      state.isRenameModalOpen,
      state.setIsRenameModalOpen,
    ]);

  const renameFile = async () => {
    if (!user || !fileId) return;

    const toastId = toast.loading("Renaming...");

    await updateDoc(doc(db, "users", user.id, "files", fileId), {
      filename: input,
    });

    toast.success("Renamed Successfully", {
      id: toastId,
    });

    setInput("");
    setIsRenameModalOpen(false);
  };

  return (
    <Dialog
      open={isRenameModalOpen}
      onOpenChange={(isOpen) => {
        setIsRenameModalOpen(isOpen);
      }}
    >
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Rename the File</DialogTitle>

          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
              if (e.key === "Enter") {
                renameFile();
              }
            }}
          />
          <div className="flex space-x-2 py-3">
            <Button
              variant={"ghost"}
              onClick={() => setIsRenameModalOpen(false)}
              size="sm"
              className="px-3 flex-1"
            >
              <span className="sr-only">Cancel</span>
              <span>Cancel</span>
            </Button>
            <Button
              type="submit"
              onClick={() => renameFile()}
              size="sm"
              className="px-3 flex-1"
            >
              <span className="sr-only">Rename</span>
              <span>Rename</span>
            </Button>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default RenameModal;
