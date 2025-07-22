import Link from "next/link";

export default async function InterceptedPage( {params}: { params: { sample: string } }) {

    const { sample } = await params;

    return (
        <>
            <dialog className="fixed top-[15%] left-1/7 w-3/4 h-3/4 bg-gray-300 p-8 rounded border-none shadow-lg z-[9999]" open>
                <h1 className="text-2xl mb-5">{sample}</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipiscing elit. Quisque faucibus ex sapien vitae pellentesque sem placerat. In id cursus mi pretium tellus duis convallis. Tempus leo eu aenean sed diam urna tempor. Pulvinar vivamus fringilla lacus nec metus bibendum egestas. Iaculis massa nisl malesuada lacinia integer nunc posuere. Ut hendrerit semper vel class aptent taciti sociosqu. Ad litora torquent per conubia nostra inceptos himenaeos.</p>
                <Link 
                    href="/resume" 
                    scroll={false}
                    className="fixed top-[80%] right-[15%] z-[10000] inline-flex items-center px-4 py-2 text-sm font-medium text-blue-800"
                >
                    Close
                </Link>
            </dialog>
        </>
    );
}