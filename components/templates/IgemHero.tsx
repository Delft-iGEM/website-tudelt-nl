import { FC, useEffect, useState } from "react";
import HeroImage from "./HeroImage";
import Carousel from "./Carousel";
import { Template } from "tinacms";
import VectorWave1 from "../../assets/img/vector-wave-1.svg";
import VectorGear from "../../assets/img/igem_gear.svg";
import { cn } from "../../lib/cn";

type IgemHeroProps = Omit<
  React.ComponentProps<typeof HeroImage>,
  "imageUrl" | "text"
> & {
  slides?: { imageUrl: string; text?: string }[];
};

const IgemHero: FC<IgemHeroProps> = ({ slides = [], ...props }) => {
  return (
    <div className="w-full">
      <div className="relative w-full bg-accent-dark overflow-hidden">
        <Carousel className="dark">
          {slides.map((slide, index) => (
            <HeroImage
              key={index}
              {...{ ...props, ...slide }}
              fadeBottom
              fadeClassName="from-accent-dark"
            />
          ))}
        </Carousel>

        <GearAnimation
          animation="stutter-turn"
          className={
            "absolute top-[70px] right-[-30px] md:top-0 md:right-[200px] transform translate-x-1/2 -translate-y-1/2"
          }
          svgClassName="text-accent-dark w-[200px]"
        />
        <GearAnimation
          animation="stutter-turn"
          className={
            "absolute top-[-30px] right-[80px] md:right-0 md:top-[150px] transform translate-x-1/2 -translate-y-1/2"
          }
          svgClassName="text-green-600 w-[250px]"
        />
        <GearAnimation
          animation="slow-spin"
          className={
            "absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
          }
          svgClassName="text-accent-light w-[350px]"
        />

        <GearAnimation
          animation="slow-spin"
          className={
            "absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/3"
          }
          svgClassName="text-accent-light w-[350px]"
        />

        {/* Flask in bottom left */}
        {/* <div className="absolute bottom-0 left-0 h-full flex flex-col pointer-events-none motion-reduce:hidden">
          <div className="w-full h-full">
            <BubbleAnimation />
          </div>
          <VectorFlask className="fill-accent-light w-[100px] h-auto text-accent-lighter" />
        </div> */}
      </div>
      <div className="w-full overflow-hidden">
        <div className="">
          <VectorWave1
            className="fill-accent-dark w-full h-auto"
            preserveAspectRatio="none"
          />
        </div>
      </div>
    </div>
  );
};
export default IgemHero;

export const IgemHeroTemplate: Template = {
  name: "IgemHero",
  label: "iGEM Hero Carousel",
  fields: [
    {
      name: "slides",
      label: "Slides",
      type: "object",
      required: true,
      list: true,
      fields: [
        {
          name: "imageUrl",
          label: "Image",
          type: "image",
          required: true,
        },
        {
          name: "text",
          label: "Text",
          type: "string",
        },
      ],
    },
  ],
};

interface Bubble {
  id: number;
  left: number;
  bottom: number;
  size: number;
  speed: number;
  horizontalSpeed: number;
  opacity: number;
  shineAngle: number;
}

interface BubbleAnimationProps {}

const initialBubbles = (): Bubble[] => {
  const bubbles = [];
  for (let i = 0; i < 20; i++) {
    bubbles.push({
      id: i,
      bottom: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 0.5 + 5,
      horizontalSpeed: (Math.random() - 0.5) * 0.1,
      opacity: Math.random() * 0.5 + 0.5,
      shineAngle: Math.random() * Math.PI * 2,
    });
  }
  return bubbles;
};

const BubbleAnimation: FC<BubbleAnimationProps> = () => {
  const [bubbles, setBubbles] = useState<Bubble[]>(initialBubbles);

  useEffect(() => {
    setBubbles((prevBubbles) =>
      prevBubbles.length === 0 ? initialBubbles() : prevBubbles
    );

    const interval = setInterval(() => {
      if (Math.random() < 0.4) return;

      const newBubble: Bubble = {
        id: Math.random(),
        bottom: 0,
        left: 45 + (Math.random() - 0.5) * 10,
        size: Math.random() * 20 + 10,
        speed: Math.random() * 0.5 + 5,
        horizontalSpeed: (Math.random() - 0.5) * 0.1,
        opacity: Math.random() * 0.5 + 0.5,
        shineAngle: Math.random() * Math.PI * 2,
      };

      setBubbles((prevBubbles) =>
        prevBubbles.filter((bubble) => bubble.bottom < 110).concat(newBubble)
      );
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let lastTime = 0;
    const animateBubbles = () => {
      const time = performance.now();
      const dt = (time - lastTime) / 1000;
      console.log(dt);
      lastTime = time;
      setBubbles((prevBubbles) =>
        prevBubbles.map(
          (bubble) =>
            ({
              ...bubble,
              bottom: bubble.bottom + bubble.speed * dt,
              left:
                bubble.left +
                Math.sin(bubble.bottom / 50) * bubble.horizontalSpeed,
            } satisfies Bubble)
        )
      );
      requestAnimationFrame(animateBubbles);
    };
    const animationFrame = requestAnimationFrame(animateBubbles);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <div className="relative w-full h-full overflow-visible">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className="absolute rounded-full border-4 border-blue-500 flex items-center justify-center"
          style={{
            left: `${bubble.left}%`,
            bottom: `${bubble.bottom || 0}%`,
            width: `${bubble.size}px`,
            height: `${bubble.size}px`,
            opacity: bubble.opacity,
            transition: "all 0.1s linear",
          }}
        >
          {/* smaller circle for shine effect */}
          <div
            className="relative rounded-full bg-blue-300"
            style={{
              left: Math.cos((Math.PI * 3) / 4) * bubble.size * 0.2,
              bottom: Math.sin((Math.PI * 3) / 4) * bubble.size * 0.2,
              // transform: `translate(${Math.cos(bubble.shineAngle) * 0.2}px, ${
              //   Math.sin(bubble.shineAngle) * 0.2
              // }px)`,
              width: "30%",
              height: "30%",
            }}
          ></div>
        </div>
      ))}
    </div>
  );
};

interface GearAnimationProps {
  animation: "stutter-turn" | "slow-spin";
  className?: string;
  svgClassName?: string;
}

const GearAnimation: FC<GearAnimationProps> = ({
  className,
  svgClassName,
  animation,
}) => {
  const [animationDelay] = useState(() => Math.random() * 10);

  return (
    <div className={className}>
      <style jsx>{`
        @keyframes fluidStutterTurn {
          0%,
          100% {
            transform: rotate(0deg);
          }
          20% {
            transform: rotate(72deg);
          }
          40% {
            transform: rotate(144deg);
          }
          60% {
            transform: rotate(216deg);
          }
          80% {
            transform: rotate(288deg);
          }
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .slow-spin {
          animation: spin 20s linear infinite;
          animation-delay: ${-animationDelay}s;
        }

        .stutter-turn {
          animation: fluidStutterTurn 20s cubic-bezier(0.65, 0, 0.35, 1)
            infinite;
          animation-delay: ${-animationDelay}s;
        }

        @media (prefers-reduced-motion: reduce) {
          .stutter-turn {
            animation: none;
          }
        }
      `}</style>
      <div
        className={cn({
          "stutter-turn": animation === "stutter-turn",
          "slow-spin": animation === "slow-spin",
        })}
      >
        <VectorGear
          className={cn(
            "text-accent-light w-[350px] max-w-[40vw] h-auto",
            svgClassName
          )}
        />
      </div>
    </div>
  );
};
