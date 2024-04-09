"use client";

import * as Z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle
} from "@/components/ui/dialog"


export const InitialModal = () => {
    const form = useForm({
        defaultValues: {
            name: "",
            imageUrl: "",
        }
    });

    return (
        <Dialog open>
            <DialogContent className="bg-white text-black p-0 overflow-hidden">
                <DialogHeader className="pt-8 px-6">
                    <DialogTitle className="text-2xl text-center font-bold">
                        Customize Your Server!
                    </DialogTitle>
                    <DialogDescription className="text-center text-zinc-500">
                        Give your server a Personality with a name and an image. This can always be changed later.
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}