import { Template } from "tinacms";
import HeroImage, { HeroImageProps, HeroImageTemplate } from "./HeroImage";
import IgemHero, { IgemHeroTemplate } from "./IgemHero";
import { HomeBlocks } from "../../tina/__generated__/types";
import { FC } from "react";
import { replaceNullWithUndefined } from "../../lib/tsUtils";

export const templates: Template[] = [HeroImageTemplate, IgemHeroTemplate];

export const templateComponents = {
  HeroImage,
  IgemHero,
};

export const Blocks: FC<{ blocks: HomeBlocks[] }> = ({ blocks }) => {
  return (
    <>
      {blocks.map((_block, index) => {
        const block = replaceNullWithUndefined(_block)!;
        if (!block.__typename) return null;
        switch (block.__typename) {
          case "HomeBlocksHeroImage": {
            return <HeroImage key={index} {...(block as HeroImageProps)} />;
          }
          case "HomeBlocksIgemHero": {
            if (!block.slides) return null;
            return <IgemHero key={index} {...block} />;
          }
        }
      })}
    </>
  );
};
