import { CalendarIcon, HomeIcon, UsersIcon } from "@heroicons/react/20/solid";

const links = [
  {
    url: "/",
    icon: <HomeIcon width={20} className="pr-2" />,
    title: "Home",
  },
  {
    url: "/facilitators",
    icon: <UsersIcon width={20} className="pr-2" />,
    title: "Facilitators",
  },
  {
    url: "/events",
    icon: <CalendarIcon width={20} className="pr-2" />,
    title: "Events",
  },
  {
    url: "/users",
    icon: <UsersIcon width={20} className="pr-2" />,
    title: "Users",
  },
];

export default links;
