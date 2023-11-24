/**
 * v0 by Vercel.
 * @see https://v0.dev/t/UuMpgZiIp8H
 */
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div key="1" className="w-full min-h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className="w-full h-screen flex flex-col items-center justify-center bg-cover"
        style={{
          backgroundImage: "linear-gradient(to right, #6a3093, #a044ff), url(/placeholder.svg?height=1080&width=1920)",
        }}
      >
        <h1 className="text-5xl font-bold text-white dark:text-gray-200">Welcome to Yoobin's Portfolio</h1>
        <h2 className="text-2xl text-white mt-4 dark:text-gray-300">My projects</h2>
        <div className="flex mt-8 space-x-4">
          <Button
            className="text-white border-white hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:border-gray-300 dark:hover:bg-gray-300 dark:hover:text-black"
            variant="outline"
          >
            <a href="#tag1">View Projects</a>
          </Button>

          <Button
            className="text-white border-white hover:bg-gray-100 hover:text-black dark:text-gray-300 dark:border-gray-300 dark:hover:bg-gray-300 dark:hover:text-black"
            variant="outline"
          >
            <a href="/about">About Me</a>
          </Button>
        </div>
      </div>
      <section className="w-full py-12 px-8 space-y-12" id="tag1">
        <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-200">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
            <img
              alt="Project 1"
              className="w-full h-auto max-w-[200px] max-h-[200px] aspect-[1/1] object-cover object-center"
              src="/web-372.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
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
              alt="Project 1"
              className="w-full h-auto max-w-[200px] max-h-[200px] aspect-[1/1] object-cover object-center"
              src="/webgl.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
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
              alt="Project 1"
              className="w-full h-auto max-w-[200px] max-h-[200px] aspect-[1/1] object-cover object-center"
              src="/unity1.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
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
              alt="Project 1"
              className="w-full h-auto max-w-[200px] max-h-[200px] aspect-[1/1] object-cover object-center"
              src="/robot.png"
              style={{
                aspectRatio: "200/200",
                objectFit: "cover",
              }}
            />
            <div className="p-4">
              <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Problem solving</h4>
              <p className="text-gray-600 mt-2 dark:text-gray-400">Using C, solve the tasks.</p>
              <Button
                className="mt-4 text-white bg-blue-500 hover:bg-blue-600 dark:bg-gray-800 dark:hover:bg-gray-700"
                variant="default"
              >
                <a href="/sample4">Go to Project details</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

