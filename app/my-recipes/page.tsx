"use client";

import { useState } from "react";

import { TitlebarImageList } from "@/components/titlebarImageList";
import { BasicRating } from "@/components/rating";
import { BasicList } from "@/components/basicList";


import itemData from "@/src/data/itemData";

export default function About() {
  const [selectedItem, changeSelectedItem] = useState(0);

  return (
    <>
      <h1 className="m-10 text-4xl">What I'm Craving (Like, Always)</h1>
      <p className="m-12 leading-loose">Welcome to my food mood board—aka a delicious lineup of everything I’m obsessed with eating. Think creamy risottos, saucy noodles, crispy wings, and cozy one-pot wonders. Some of these are go-to comfort meals, others are inspired by late-night cravings or deep dives into world cuisines. I’m not saying food is my personality… but if it were, this would be it. Hungry? Same. Let’s dig in.</p>
      <section className="grid grid-cols-2 mb-15">
        <TitlebarImageList changeSelectedItem={changeSelectedItem} />
        <section>
          {itemData[selectedItem] && (
            <>
              <h2 className="text-2xl">{itemData[selectedItem].title}</h2>
              <BasicRating rating={itemData[selectedItem].rating} />
              <BasicList list={itemData[selectedItem].recipe} listType={"ol"} />
            </>
          )}
        </section>
      </section>
    </>
  );
}
