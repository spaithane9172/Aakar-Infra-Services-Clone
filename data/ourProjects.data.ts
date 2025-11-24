export interface projectType {
  id: number;
  title: string;
  location: string;
  status: string;
  bg: string;
  textColor: string;
}

export interface ProjectsType {
  title: string;
  projects: projectType[];
}
export const ourProjects = <ProjectsType>{
  title: "Our Projects",
  projects: [
    {
      id: 1,
      title: "Tamara Uprise",
      location: "Rahatani",
      status: "Ongoing",
      bg: "bg-orange-100",
      textColor: "text-orange-600",
    },
    {
      id: 2,
      title: "Sai Harmony",
      location: "Baner",
      status: "Completed",
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      id: 3,
      title: "Sai Manas",
      location: "Wakad",
      status: "Completed",
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      id: 4,
      title: "Tamara",
      location: "Rahatani",
      status: "Completed",
      bg: "bg-green-100",
      textColor: "text-green-600",
    },
    {
      id: 5,
      title: "Sunrise Valley",
      location: "Wakad",
      status: "Upcoming",
      bg: "bg-blue-100",
      textColor: "text-blue-600",
    },
  ],
};
