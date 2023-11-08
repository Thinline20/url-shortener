import HiOutlineCheck from "~/components/icons/HiOutlineCheck";
import HiOutlineChevronDoubleRight from "~/components/icons/HiOutlineChevronDoubleRight";

// @ts-ignore
import("preline");

export default function Home() {
  const onSubmit = (e: Event) => {
    e.preventDefault();
  };

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
        </div>
      </div>
    </main>
  );
}
