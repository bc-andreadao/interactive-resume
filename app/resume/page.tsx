
import Link from 'next/link';
import samples from "@/src/sampleData";


export default function Resume () {
    return (
    <section className="flex items-start justify-center gap-7 bg-gray-100 p-10 m-8 w-full h-screen rounded-lg shadow-lg">
        {samples.map( (sample, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md">
                <div>
                    <img 
                        src="/flower-background.jpg" 
                        alt="sample image" 
                    />
                    <div className="p-7">
                        <h5 className="m-2 text-2xl text-gray-900">
                            {sample.title}
                        </h5>
                        <p className="font-normal text-gray-500">
                            {sample.description}
                        </p>
                    </div>
                </div>
                <div className="pb-5">
                    <Link 
                        href={`/samples/${sample.filename}`} 
                        scroll={false}
                        className="text-blue-400"
                    >
                        Learn more
                    </Link>
                </div>
            </div>            
        ))}
    </section>
    )
}