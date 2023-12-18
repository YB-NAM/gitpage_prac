
import { Button } from "@/components/ui/button";
import React, { VideoHTMLAttributes } from 'react';

interface CustomVideoProps extends VideoHTMLAttributes<HTMLVideoElement> {
  playbackRate?: number;
}

export default function Component() {

  const videoProps: CustomVideoProps = {
    width: "640",
    height: "360",
    controls: true,
    playbackRate: 2.0, 
  };
  return (
    <div key="1" className="flex flex-col w-full h-full p-4 bg-white dark:bg-gray-800 rounded-md shadow-lg">
      <div className="flex flex-col items-center justify-center" style={{ backgroundColor: '#1a1a2e' }} >
        <div className="flex justify-between items-center mb-4 text-left w-full">
          <h1 className="text-2xl font-bold text-gray-900 text-white dark:text-white text-left"> - Problem Solving with ROBOTC(C)</h1>
        </div>
        <div className="flex-1 overflow-auto text-center w-full">
          <video {...videoProps}>
            <source src="/maze.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <p className="text-sm text-gray-600 text-white dark:text-gray-300 mb-4">
            
          </p>
          <p className="text-sm text-gray-600 text-white dark:text-gray-300 mb-4">
            Using C to solve the given task by moving ROBOTC (Bar code scanners, Distinguish Colors with Sensor value, and Maze Solving)
          </p>
        </div>
      </div>

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

                    <h2 className="text-xl font-bold text-white">1. Team leader</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      As a team leader: When given a task , the best scenario was organized and provided by coordinating the ideas of the group members from the creation of ideas
                      <br></br>
                      After assessing the capabilities of each group member, optimal roles were assigned to them accordingly.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-white">2. Main Programmer</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      I wrote most of the code to solve the challenge using the C programming language.<br></br>
                      Since the group members were new to using the C language, I conducted code reviews after writing and merging their code, explaining how our group's code operated and how variables were controlled.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-white">3. Code tester</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      The error that may occur during the process of merging codes with group members was identified in advance to prevent issues that may arise when the actual robot operates.
                      <br></br>
                      The operation of virtual robots and actual physical robots differed due to various environmental variables, but this was modified to function identically by writing various test codes.
                    </p>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="p-4 bg-gray-800">
        <h2 className="text-2xl font-semibold mb-4 text-white">Encountered issues / Probleming Solving</h2>
        <ul className="space-y-4">
          <li className="p-4 rounded-md border border-gray-600 shadow-sm bg-gray-900">
            <h3 className="font-medium text-lg text-white">Environmental Variables</h3>
            <p className="text-white mt-2">For the virtual robot, there was no need to consider additional variables as the shadows and light sources remained consistent. 
            However, for the actual robot, variables such as the robot's shadow, people's shadows, light coming from multiple directions, and the unevenness and stains on the classroom floor had to be considered.
              <br></br>To address these variables, various test codes were written and executed, and by using optimal median values, all challenges were successfully completed.
            </p>
          </li>
          <li className="p-4 rounded-md border border-gray-600 shadow-sm bg-gray-900">
            <h3 className="font-medium text-lg text-white">Code Optimization</h3>
            <p className="text-white mt-2">Due to the limited capacity for operation within the robot, there was a need to optimize the code. Through code reviews and testing, unnecessary parts were removed and code optimization was conducted to minimize the file size.</p>
          </li>
        </ul>
      </div>
      <a href="/"><Button className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200" size="sm">
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
                className="mt-4 text-white bg-purple-500 hover:bg-purple-600 dark:bg-gray-800 dark:hover:bg-gray-700"
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
                className="mt-4 text-white bg-purple-500 hover:bg-purple-600 dark:bg-gray-800 dark:hover:bg-gray-700"
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
                className="mt-4 text-white bg-purple-500 hover:bg-purple-600 dark:bg-gray-800 dark:hover:bg-gray-700"
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
                className="mt-4 text-white bg-purple-500 hover:bg-purple-600 dark:bg-gray-800 dark:hover:bg-gray-700"
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
