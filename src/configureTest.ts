// FasterEdge 开源项目 - Github: https://github.com/FasterEdge - Gitee: https://gitee.com/FasterEdge
import "@testing-library/jest-dom";
import crypto from 'crypto';

jest.mock("./App.tsx", () => "App");


Object.defineProperty(global.self, 'crypto', {
  value: {
    getRandomValues: arr => crypto.randomBytes(arr.length)
  }
});

import { act } from "react";
import { createRoot, type Root } from "react-dom/client";

let container: HTMLDivElement | null = null;
let root: Root | null = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  container.setAttribute("id", "root");
  document.body.appendChild(container);
  root = createRoot(container);
});

afterEach(() => {
  // cleanup on exiting
  act(() => root?.unmount());
  root = null;
  container?.remove();
  container = null;
});
