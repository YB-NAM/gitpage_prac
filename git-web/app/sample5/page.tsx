import Link from "next/link"
import { Button } from "@/components/ui/button"
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
        <>
        <div className="flex flex-col min-h-screen">
                <main className="flex-1" style={{ backgroundColor: '#1a1a2e' }}>
                <section className="w-full">
                        
                    <div className="container flex flex-col justify-center items-center px-4 md:px-6 text-center space-y-4">
                            <h1 className="text-white text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                Java Project
                            </h1>
                        <video {...videoProps}>
                            <source src="/276.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                            <h1 className="text-white text-2xl font-bold tracking-tighter sm:text-2xl md:text-2xl lg:text-2xl">
                            Using Java to create 2d maze game, Using git to do version control and collaborate with group members
                        </h1>
                    </div>
                </section>
            </main>


            <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid gap-6 items-center">
                        <div className="flex flex-col justify-center space-y-8 text-center" >
                            <h2 className="text-2xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                                What I did
                            </h2>
                            <div className="w-full max-w-full space-y-4 mx-auto">
                                <div className="grid grid-cols-3 gap-8">
                                    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">

                                        <h2 className="text-xl font-bold text-white">1. Maze Map Generate</h2>
                                        <p className="text-zinc-200 dark:text-zinc-100">
                                            I wrote a code using the binary tree algorithm to generate a simple random 2D maze.
                                            <br></br>

                                                I calculated the appropriate size and wall thickness for the maze, ensuring it fits the overall game size and the dimensions of the objects, to create an optimal maze without errors.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                            <h2 className="text-xl font-bold text-white">2. Code Optimization</h2>
                                        <p className="text-zinc-200 dark:text-zinc-100">
                                            For basic Object-Oriented Programming, there was a need to modify the code for each element of the game (Refactoring).
                                            <br></br>
                                            To prevent memory leaks, I focused on reviewing the dynamic memory allocation in the code, which helped minimize the game's memory usage.
                                        </p>
                                    </div>
                                    <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                                        <h2 className="text-xl font-bold text-white">3. Code tester</h2>
                                        <p className="text-zinc-200 dark:text-zinc-100">
                                            I identified potential errors that could arise during the game, such as collisions between game elements and issues with score and time calculations. By recognizing these issues in advance, I applied new values and tested the code to ensure proper functionality.
                                            <br></br>
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
                        <h3 className="font-medium text-lg text-white">Version Control</h3>
                        <p className="text-white mt-2">
                            During the project progression using Git, difficulties were encountered in version control, such as simultaneously committing and pushing new code.
                            <br></br>To address this, each person worked on their assigned parts of the code using individual branches. Regular communication was maintained to prevent conflicts.
                            Finally, the Git merge feature was used to combine everyone's new changes into the main/master branch, with a joint review to control the version.
                        </p>
                    </li>
                    <li className="p-4 rounded-md border border-gray-600 shadow-sm bg-gray-900">
                        <h3 className="font-medium text-lg text-white">Code Optimization</h3>
                            <p className="text-white mt-2">
                                In the process of optimizing the code to minimize the game's size, there was an issue of needing to use hard coding in certain parts.</p>
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
                        <div className="p-1">
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
                        <div className="p-2">
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
                        <div className="p-3">
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
                    <div className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                        <img
                            alt="Project 5"
                            className="w-full h-auto max-w-[200px] max-h-[200px] aspect-[1/1] object-cover object-center"
                            src="/276.png"
                            style={{
                                aspectRatio: "200/200",
                                objectFit: "cover",
                            }}
                        />
                        <div className="p-5">
                            <h4 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Java 2d-Game</h4>
                            <p className="text-gray-600 mt-2 dark:text-gray-400">Using Java, 2d-maze game.</p>
                            <Button
                                className="mt-4 text-white bg-purple-500 hover:bg-purple-600 dark:bg-gray-800 dark:hover:bg-gray-700"
                                variant="default"
                            >
                                <a href="/sample5">Go to Project details</a>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
}

