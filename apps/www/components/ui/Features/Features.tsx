import {
  IconArrowsexpandLeft,
  IconBxCustomize,
  IconPennibLine,
} from "components/icons";
import { ReactNode } from "react";
import featureCover from "public/feature-cover.svg";
import Image from "next/image";
import Card from "./Card";
import bgback from "./../../../public/bg-back.png";
type Feature = {
  title: string;
  desc: string;
  icon: ReactNode;
};

export default () => {
  const features: Feature[] = [
    {
      title: "Category-defining BCI",
      desc: "Direct data interface (DDI) is a BCI with both the data rate and the proximity to brain signals for advanced applications. Massively scalable to support even more channels, higher data rates, and future enhanced capabilities.",
      icon: <IconPennibLine />,
    },
    {
      title: "(DDI) is the future of brain tech",
      desc: "Intracortical electrodes provide precise, single-neuron resolution that surface electrodes cannot. Current platform supports over 1600 intracortical channels for an industry-leading data rate.",
      icon: <IconArrowsexpandLeft />,
    },
    {
      title: "New Treatments & Beyond",
      desc: "With the brain in direct communication with digital devices, we can leverage technology to revolutionize treatments for conditions ranging from sensory and motor deficits to mood disorders. While our system will first help motor-impaired people communicate, our massively scalable platform will drive expanding capabilities to enhance the lives of millions of people.",
      icon: <IconBxCustomize />,
    },
  ];

  return (
    <section className="custom-screen-lg mb-[-40px] z-10 relative mt-32">
      <Image
        alt="bgback"
        src={bgback}
        className="absolute -top-40 left-0 opacity-60"
      />
      <div className="max-w-xl mx-auto space-y-4 text-center px-3 md:px-0">
        <h2 className="text-4xl md:text-5xl lg:text-7xl  bg-gradient-to-tr from-zinc-400/50 via-white to-white/60 bg-clip-text text-transparent font-geist tracking-tighter font-normal ">
          DIRECT DATA INTERFACE (DDI)
        </h2>
        <p className="text-zinc-400">
          With our high data-rate, massively scalable brain computer interface,
          we will help motor- impaired people now and unlock future applications
          that could benefit millions.
        </p>
      </div>
      <ul className="space-y-6 gap-6 mt-8 custom-screen-lg mx-auto grid-cols-2 sm:grid lg:grid-cols-3 sm:space-y-0">
        {features.map((item: Feature, key: number) => (
          <Card icon={item.icon} title={item.title} desc={item.desc} />
        ))}
      </ul>
    </section>
  );
};
