/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AokCsMvkYGf
 */
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"
import React, { useEffect } from 'react';
export default function Component() {
  const handleDemoClick = () => {
    //window.open('/myScene.html', '_blank');
    console.log("!!!!!!!!!!!!!!!!!!!!!");
  };

  return (
    <div className="flex flex-wrap justify-center mx-auto">
      <Card
        key="1"
        className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-4 my-4 hover:shadow-xl transition-all duration-200"
      >
        <img
          alt="Profile picture"
          className="object-cover w-full"
          height="320"
          src="/webgl.png"
          style={{
            aspectRatio: "320/320",
            objectFit: "cover",
          }}
          width="320"
        />
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">Proejct name</h2>
          <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">Tech</h3>
          <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
            Detailsss.
          </p>
        </CardContent>
      </Card>

      <Card
        key="1"
        className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-4 my-4 hover:shadow-xl transition-all duration-200"
      >
        <img
          alt="Profile picture"
          className="object-cover w-full"
          height="320"
          src="/webgl.png"
          style={{
            aspectRatio: "320/320",
            objectFit: "cover",
          }}
          width="320"
        />
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">Proejct name</h2>
          <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">Tech</h3>
          <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
            Detailsss.
          </p>
        </CardContent>
      </Card>


      <Card
        key="1"
        className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-4 my-4 hover:shadow-xl transition-all duration-200"
      >
        <img
          alt="Profile picture"
          className="object-cover w-full"
          height="320"
          src="/webgl.png"
          style={{
            aspectRatio: "320/320",
            objectFit: "cover",
          }}
          width="320"
        />
        <CardContent className="p-4">
          <h2 className="text-2xl font-bold hover:text-gray-700 transition-all duration-200">Proejct name</h2>
          <h3 className="text-gray-500 hover:text-gray-600 transition-all duration-200">Tech</h3>
          <p className="mt-2 text-gray-600 hover:text-gray-700 transition-all duration-200">
            Detailsss.
          </p>
          <div className="flex mt-4 space-x-2">
            <a href="webgl-demo2"><Button className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200" size="sm" >
              Play Demo
            </Button></a>
          </div>
        </CardContent>
      </Card>


      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid gap-6 items-center">
            <div className="flex flex-col justify-center space-y-8 text-center">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                What I did
              </h2>
              <div className="w-full max-w-full space-y-4 mx-auto">
                <div className="grid grid-cols-3 gap-8">
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">

                    <h2 className="text-xl font-bold text-white">1.</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      ....
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-white">2</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      ....
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-white">3</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      ....
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="p-4 bg-gray-800 w-full">
      <h2 className="text-2xl font-semibold mb-4 text-white">Encountered issues / Probleming Solving</h2>
      <ul className="space-y-4">
        <li className="p-4 rounded-md border border-gray-600 shadow-sm bg-gray-900">
          <h3 className="font-medium text-lg text-white">Issue 1</h3>
          <p className="text-white mt-2">This is a detailed explanation about how I solved Issue 1.</p>
        </li>
        <li className="p-4 rounded-md border border-gray-600 shadow-sm bg-gray-900">
          <h3 className="font-medium text-lg text-white">Issue 2</h3>
          <p className="text-white mt-2">This is a detailed explanation about how I solved Issue 2.</p>
        </li>
        <li className="p-4 rounded-md border border-gray-600 shadow-sm bg-gray-900">
          <h3 className="font-medium text-lg text-white">Issue 3</h3>
          <p className="text-white mt-2">This is a detailed explanation about how I solved Issue 3.</p>
        </li>
      </ul>
    </div>
      <a href="/" className="w-full"><Button className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200" size="sm">
        Home
      </Button></a>


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
              alt="Project 2"
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
              alt="Project 3"
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
              alt="Project 4"
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
