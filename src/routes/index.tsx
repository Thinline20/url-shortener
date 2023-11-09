import { createSignal, createResource } from "solid-js";
import HiOutlineCheck from "~/components/icons/HiOutlineCheck";
import HiOutlineChevronDoubleRight from "~/components/icons/HiOutlineChevronDoubleRight";

// @ts-ignore
import("preline");

export default function Home() {
  const onSubmit = (e: Event) => {
    e.preventDefault();
  };

  const onClipboardClick = () => {};

  return (
    <main class="h-screen w-screen">
      <div class="container relative grid h-full w-full place-items-center overflow-hidden">
        <div>
          <h1 class="text-center text-4xl font-bold text-gray-800 dark:text-gray-200 sm:text-6xl">
            URL Shortener
          </h1>
          <p class="mt-3 text-center text-gray-600 dark:text-gray-400">
            Shorten your long url to a short one.
          </p>
          <div class="relative mx-auto mt-7 max-w-xl sm:mt-12">
            <form onsubmit={onSubmit}>
              <div class="relative z-10 flex space-x-3 rounded-lg border bg-white p-3 shadow-lg shadow-gray-100 dark:border-gray-700 dark:bg-slate-900 dark:shadow-gray-900/[.2]">
                <div class="flex-[1_0_0%]">
                  <label
                    for="url"
                    class="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    <span class="sr-only">Url</span>
                  </label>
                  <input
                    type="url"
                    name="url"
                    id="url"
                    class="block w-full rounded-lg border-transparent px-4 py-2.5 transition-colors duration-75 focus:border-blue-500 focus:ring-blue-500 dark:border-transparent dark:bg-slate-900 dark:text-gray-400 dark:focus:ring-gray-600"
                    placeholder="https://www.example.com"
                  />
                </div>
                <div class="flex-[0_0_auto]">
                  <button class="inline-flex h-[46px] w-[46px] items-center justify-center gap-x-2 rounded-lg border border-transparent bg-blue-600 text-xl font-semibold text-white transition-colors duration-75 hover:bg-blue-700 active:bg-blue-500 disabled:pointer-events-none disabled:opacity-50 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                    <HiOutlineChevronDoubleRight />
                  </button>
                </div>
              </div>
            </form>
          </div>
          <div class="relative mx-auto mt-7 max-w-xl sm:mt-12">
            <input
              type="hidden"
              id="hs-clipboard-tooltip"
              value="npm install preline"
            />
            <button
              type="button"
              class="js-clipboard hs-tooltip relative inline-flex items-center justify-center gap-x-2 rounded-lg border border-gray-200 bg-white px-4 py-3 font-mono text-sm text-gray-800 shadow-sm [--trigger:focus] hover:bg-gray-50 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-700 dark:bg-slate-900 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-clipboard-target="#hs-clipboard-tooltip"
              data-clipboard-action="copy"
              data-clipboard-success-text="Copied"
            >
              $ npm i preline
              <span class="border-s ps-3.5 dark:border-gray-700">
                <svg
                  class="js-clipboard-default h-4 w-4 transition group-hover:rotate-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                  <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                </svg>

                <svg
                  class="js-clipboard-success hidden h-4 w-4 rotate-6 text-blue-600"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              <span
                class="hs-tooltip-content invisible z-10 hidden rounded-lg bg-gray-900 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity hs-tooltip-shown:visible hs-tooltip-shown:opacity-100 dark:bg-slate-700"
                role="tooltip"
              >
                Copied
              </span>
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
