import Image from "next/image";

import { ReadMoreLink } from '@/components/readMoreLink'

export default function Home() {
  return ( 
  <>
        <section className="bg-[url('/assets/cover.jpg')] bg-center bg-cover text-[rgb(224,177,170)] pb-[2%]">
            <h1 className="pt-[8%] pr-[20%] pb-[3%] pl-[5%] font-mono text-[300%]">Andrea's Home</h1>
            <div className="w-[35%] font-[150%] text-black  text-left space-y-3">
              <p className="p-[15%] bg-[rgb(224,177,178)]">Find me on LinkedIn</p>
              <p className="p-[15%] bg-[rgb(224,177,178)]" >Ask me anything</p>
              <p className="p-[15%] bg-[rgb(224,177,178)]" >Tell me about you</p>
            </div>
        </section>
        <section className="mt-10 grid grid-cols-2 bg-[url('/assets/flower-background.jpg')] bg-center bg-fixed p-8" id="middle">
            <article className="bg-[rgb(227,192,187);)] m-10 py-7 px-15 space-y-5" id="tile1">
                <h2>About</h2>
                <p>I'm all about the food. Check out my recipes.</p>
                <ReadMoreLink link={"/about"} />
            </article>
            <article className="bg-[rgb(227,192,187);)] m-10 py-7 px-15 space-y-5" id="tile2">
                <h2>Resume</h2>
                <p>Learn about my path to today.</p>
                <ReadMoreLink link={"/about"} />
            </article>
            <article className="bg-[rgb(227,192,187);)] m-10 py-7 px-15 space-y-5" id="tile3">
                <h2>Contact Me</h2>
                <p>Fill out a contact form.</p>
                <ReadMoreLink link={"/about"} />
            </article>
            <article className="bg-[rgb(227,192,187);)] m-10 py-7 px-15 space-y-5" id="tile4">
                <h2>Image Gallery</h2>
                <p>See my greatest works.</p>
                <ReadMoreLink link={"/about"} />
            </article>
        </section>
  </>
  );
}
