import { Link } from "react-router-dom";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE_DISPLAY,
  CONTACT_PHONE_HREF,
} from "@/config/contact";

const footerLinks = [
  { name: "Courses", path: "/courses" },
  { name: "Our Journey", path: "/journey" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
  { name: "Privacy", path: "/privacy" },
];

export function Footer() {
  return (
    <footer className="border-t bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-start">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="gradient-hero flex h-10 w-10 items-center justify-center rounded-full font-heading text-lg font-bold text-white">
                FK
              </span>
              <span className="font-heading text-xl font-bold">For Kids, By Kids</span>
            </Link>
            <p className="mt-4 max-w-xl text-sm leading-relaxed text-background/75">
              Peer-led coding and AI programs that help young people learn, build, and lead
              through hands-on projects.
            </p>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-background/75">
              A parent or guardian should submit inquiries for students under 13.
            </p>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="mt-4 inline-flex text-sm font-medium text-background underline decoration-background/40 underline-offset-4 hover:decoration-background"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={`tel:${CONTACT_PHONE_HREF}`}
              className="mt-2 block text-sm font-medium text-background underline decoration-background/40 underline-offset-4 hover:decoration-background"
            >
              {CONTACT_PHONE_DISPLAY}
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <h2 className="font-heading text-base font-semibold">Explore</h2>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 text-sm">
              {footerLinks.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-background/75 transition-colors hover:text-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-background"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-background/20 pt-6 text-sm text-background/65">
          © {new Date().getFullYear()} For Kids, By Kids. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
