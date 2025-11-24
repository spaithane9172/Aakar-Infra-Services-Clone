import { FaAward } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { MdHome } from "react-icons/md";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { IconType } from "react-icons";

export interface whyAakarFeatureType {
  icons: IconType;
  title: string;
  subTitle: string;
}

export interface whyAakarType {
  title: string;
  para: string;
  features: whyAakarFeatureType[];
}

export const whyAakar = <whyAakarType>{
  title: "Why Choose Aakar Infra Services?",
  para: "We're more than a real estate and construction brand — we're your strategic growth partner backed by years of trust, delivery, and innovation.",
  features: [
    {
      icons: FaAward,
      title: "10+ Years of Experience",
      subTitle: "Trusted by 390+ families and real estate developers.",
    },
    {
      icons: FaHandshake,
      title: "Mandate Specialists",
      subTitle: "Experts in exclusive project sales and execution.",
    },
    {
      icons: MdHome,
      title: "One-Stop Real Estate",
      subTitle: "From property to paperwork — all in one place.",
    },
    {
      icons: FaHandHoldingUsd,
      title: "Finance & Loan Expertise",
      subTitle: "DSA-backed financial solutions with top banks.",
    },
    {
      icons: FaUsers,
      title: "Dedicated Teams",
      subTitle: "In-house CRM, Sales, Legal, and Interior Experts.",
    },
  ],
};
