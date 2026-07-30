import { useEffect } from "react";

interface PageMetaProps {
  title: string;
  description: string;
}

function setMetaContent(name: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[name="${name}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.name = name;
    document.head.appendChild(element);
  }

  element.content = content;
}

function setPropertyContent(property: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(`meta[property="${property}"]`);

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute("property", property);
    document.head.appendChild(element);
  }

  element.content = content;
}

export function PageMeta({ title, description }: PageMetaProps) {
  useEffect(() => {
    document.title = title;
    setMetaContent("description", description);
    setPropertyContent("og:title", title);
    setPropertyContent("og:description", description);
    setMetaContent("twitter:title", title);
    setMetaContent("twitter:description", description);
  }, [description, title]);

  return null;
}
