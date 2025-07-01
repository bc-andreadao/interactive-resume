import { ModalBackdrop } from '@/components/modalBackdrop';

export default function InterceptedPage( {params}: { params: { sample: string } }) {
    return (
        <>
            <ModalBackdrop />
                <dialog className="fixed top-[12%] left-[12%] w-3/4 flex justify-center items-center bg-gray-300 p-8 rounded border-none shadow-lg" open>
                    <div>
                        Intercepted! <br/> {params.sample} ...
                    </div>
                </dialog>
        </>
    );
}