"use client";

import { useEffect } from "react";

const STYLE_ID = "jc-chat-dock";

/**
 * The chat bubble is position:fixed; bottom:20px inside the widget shadow
 * root, which paints it on top of the mobile action bar (and of the estimate
 * form). Move it up by the bar height. Page CSS cannot reach these nodes.
 */
function dockChatWidget() {
  const host = document.querySelector("chat-widget");
  const root = host?.shadowRoot;
  if (!root || root.getElementById(STYLE_ID)) return Boolean(root?.getElementById(STYLE_ID));

  const style = document.createElement("style");
  style.id = STYLE_ID;
  style.textContent = `
    @media (max-width: 767px) {
      #lc_text-widget,
      .lc_text-widget {
        top: auto !important;
        bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px)) !important;
        height: 150px !important;
        max-height: 150px !important;
      }
      #lc_text-widget--btn {
        top: auto !important;
        bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px)) !important;
        width: 58px !important;
        height: 58px !important;
      }
    }
  `;
  root.appendChild(style);
  return true;
}

export function ChatWidgetDock() {
  useEffect(() => {
    dockChatWidget();
    const observer = new MutationObserver(() => {
      dockChatWidget();
    });
    observer.observe(document.body, { childList: true, subtree: true });
    const timer = window.setInterval(dockChatWidget, 1000);
    const stop = window.setTimeout(() => window.clearInterval(timer), 20000);
    return () => {
      observer.disconnect();
      window.clearInterval(timer);
      window.clearTimeout(stop);
    };
  }, []);

  return null;
}
