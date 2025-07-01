'use client';

import { useRouter } from "next/navigation";

export function ModalBackdrop() {
    const router = useRouter();

    return (
        <div className="fixed top-[10%] left-[10%] w-4/5 h-4/5 bg-pink-500/40 flex justify-center items-center" onClick={router.back} />
    );
}