// import type { Page } from "../../tina/__generated__/types";
// import { Content } from "./content";
// import { tinaField } from "tinacms/dist/react";

export const Blocks = () => {
  return (
    <>
      {/* {props.blocks
        ? props.blocks.map((block, i) => (
            <div key={i} data-tina-field={tinaField(block as object)}>
              <Block {...block} />
            </div>
          ))
        : null} */}
    </>
  );
};

// const Block = (block: PageBlocks) => {
//   switch (block.__typename) {
//     case "PageBlocksContent":
//       return <Content data={block} />;
//     default:
//       return null;
//   }
// };
