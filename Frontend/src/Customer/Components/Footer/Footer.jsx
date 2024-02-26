import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full bg-blue-gray-100">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key}>
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-2 font-bold uppercase opacity-80"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map((link, index) => (
                  <li key={index}>
                    <Typography
                      as="a"
                      href="#"
                      color="blue-gray"
                      className="block py-1 transition-transform hover:scale-105"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center border-t border-blue-gray-200 py-4">
          <Typography
            variant="small"
            className="mb-2 text-center font-normal text-blue-gray-900"
          >
            &copy; {currentYear}{" "}
            <a href="https://material-tailwind.com/">Material Tailwind</a>. All
            Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900">
            <Typography
              as="a"
              href="#"
              className="opacity-80 transition-opacity hover:opacity-100"
            >
              <svg
                className="h-5 w-5"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                {/* Facebook icon SVG */}
              </svg>
            </Typography>
            {/* Add other social media icons similarly */}
          </div>
        </div>
      </div>
    </footer>
  );
}
