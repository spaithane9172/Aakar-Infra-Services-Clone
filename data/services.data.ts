import { MdHome } from "react-icons/md";
import { FaTools } from "react-icons/fa";
import { FaHandHoldingUsd } from "react-icons/fa";
import { FaPaintRoller } from "react-icons/fa6";
import { FaHandshake } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";
import { FaFileContract } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

export const services = {
  title: "Our Services",
  para: "Powered by over a decade of industry experience, Aakar Infra Services bridges traditional real estate practices with new-age marketing, technology, and mandate execution.",
  servicesData: [
    {
      title: "Before 2020",
      services: [
        {
          icon: MdHome,
          title: "Resale & Rental Advisory",
        },
        {
          icon: FaTools,
          title: "Construction & Building",
        },
        {
          icon: FaHandHoldingUsd,
          title: "Finance & Home Loans",
        },
        {
          icon: FaPaintRoller,
          title: "Interior Fit-Outs",
        },
      ],
    },
    {
      title: "After 2020",
      services: [
        {
          icon: FaHandshake,
          title: "Exclusive Mandate Sales",
        },
        {
          icon: RiCustomerService2Line,
          title: "Digital Marketing & CRM",
        },
        {
          icon: FaFileContract,
          title: "Documentation & Legal Support",
        },
        {
          icon: FaUserCheck,
          title: "Customer Experience Journey",
        },
      ],
    },
  ],
};
