
import { Button } from "@/components/ui/button"
export default function Component() {
    return (
      <div key="1" className="w-full h-full flex flex-col min-w-[360px] max-w-[960px]">
        <header className="h-16 flex items-center justify-between px-4 border-b-2 border-gray-300">
            Project name
        </header>
        <main className="flex-grow overflow-y-auto">
          <div className="flex flex-col gap-4 p-4">
            <div className="w-full h-64 rounded-md overflow-hidden border-2 border-gray-300 bg-gray-200">
            <img
              alt="Project 2"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            </div>
            <div className="flex items-center gap-2">
              
            </div>
            <p className="text-sm text-gray-500">
    
              <strong className="font-medium text-gray-600">Tech</strong> 1{" "}
              <strong className="font-medium text-gray-600">others</strong>
            </p>
            <div className="flex items-center gap-2">
              <strong className="font-medium text-gray-600">Details</strong>
              <p className="text-sm text-gray-500">Great post!</p>
            </div>
          </div>
        </main>
        <footer className="h-16 flex items-center justify-around px-4 border-t-2 border-gray-300">
          <a href="/"><button className="focus:outline-none">
            <svg
              className=" h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
              fill="none"
              height="24"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </button>
          </a>
        </footer>
        <section className="w-full py-12 px-8 space-y-12" id="tag1">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Project 1"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Full-stack webpage</h4>
              <p className="text-gray-600 mt-2 dark:text-gray-400">Using Angular with Typescript, Apache server, Postgresql</p>
              <Button
                className="mt-4 text-white bg-blue-500 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700"
                variant="default"
              >
                <a href="/sample1">Go to Project details</a>
              </Button>
            </div>
          </div>
          <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Project 2"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">WebGL (computer graphic)</h4>
              <p className="text-gray-600 mt-2 dark:text-gray-400">Using Javascript, CSS, HTML with WebGL. Create 2d-pacman, dynamic 3d-objects</p>
              <Button
                className="mt-4 text-white bg-blue-500 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700"
                variant="default"
              >
                <a href="/sample2">Go to Project details</a>
              </Button>
            </div>
          </div>
          <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Project 3"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Unity 2d-games</h4>
              <p className="text-gray-600 mt-2 dark:text-gray-400">Using Unity with C#, made real world products.</p>
              <Button
                className="mt-4 text-white bg-blue-500 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700"
                variant="default"
              >
                <a href="/sample3">Go to Project details</a>
              </Button>
            </div>
          </div>
          <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Project 4"
              height="200"
              src="/placeholder.svg"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
              width="200"
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Problem solving</h4>
              <p className="text-gray-600 mt-2 dark:text-gray-400">Using C, solve the tasks.</p>
              <Button
                className="mt-4 text-white bg-blue-500 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700"
                variant="default"
              >
                Go to Project details
              </Button>
            </div>
          </div>
        </div>
      </section>
      </div>
    )
  }
  