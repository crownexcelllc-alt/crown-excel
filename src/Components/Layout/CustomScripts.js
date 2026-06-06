"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function CustomScripts({ settings }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  useEffect(() => {
    // Exclude injection on admin routes or if settings aren't loaded
    if (isAdmin || !settings) return;

    // Use a global window flag to prevent duplicate injections on SPA page transitions
    if (window.customScriptsInjected) return;
    window.customScriptsInjected = true;

    // Inject Custom Head Script (HTML)
    if (settings.customHeadScript) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = settings.customHeadScript;
      
      const elementsToAppend = [];
      Array.from(tempDiv.childNodes).forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName === "SCRIPT") {
            const script = document.createElement("script");
            // Copy all attributes (like src, async, defer, etc.)
            Array.from(node.attributes).forEach((attr) => {
              script.setAttribute(attr.name, attr.value);
            });
            script.innerHTML = node.innerHTML;
            elementsToAppend.push({ target: document.head, element: script });
          } else {
            elementsToAppend.push({ target: document.head, element: node.cloneNode(true) });
          }
        }
      });

      elementsToAppend.forEach(({ target, element }) => {
        target.appendChild(element);
      });
    }

    // Inject Custom Body Script (HTML)
    if (settings.customBodyScript) {
      const tempDiv = document.createElement("div");
      tempDiv.innerHTML = settings.customBodyScript;
      
      const elementsToAppend = [];
      Array.from(tempDiv.childNodes).forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          if (node.tagName === "SCRIPT") {
            const script = document.createElement("script");
            // Copy all attributes
            Array.from(node.attributes).forEach((attr) => {
              script.setAttribute(attr.name, attr.value);
            });
            script.innerHTML = node.innerHTML;
            elementsToAppend.push({ target: document.body, element: script });
          } else {
            elementsToAppend.push({ target: document.body, element: node.cloneNode(true) });
          }
        }
      });

      elementsToAppend.forEach(({ target, element }) => {
        target.appendChild(element);
      });
    }
  }, [settings, isAdmin]);

  return null;
}
