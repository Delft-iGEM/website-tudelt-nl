import { Template } from "tinacms";
import HeroImage, { HeroImageProps, HeroImageTemplate } from "./HeroImage";
import { HeroImageCarousel, HeroImageCarouselTemplate } from "./Carousel";
import { HomeBlocks } from "../../tina/__generated__/types";
import { FC } from "react";
import { replaceNullWithUndefined } from "../../lib/tsUtils";

export const templates: Template[] = [
  HeroImageTemplate,
  HeroImageCarouselTemplate,
];

export const templateComponents = {
  HeroImage,
  HeroImageCarousel,
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
          case "HomeBlocksHeroImageCarousel": {
            if (!block.slides) return null;
            return <HeroImageCarousel key={index} {...block} />;
          }
        }
      })}
    </>
  );
};
