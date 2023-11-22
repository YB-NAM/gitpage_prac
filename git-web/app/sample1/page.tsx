
import { Button } from "@/components/ui/button"

export default function Component() {
  return (
    <div className="w-full py-5 md:py-5 lg:py-5 text-left mx-auto">
      <h1 className="text-4xl font-bold tracking-tighter">Project Summary</h1>
      <br></br>
      <div className="container flex items-start gap-8 px-4 md:px-6 mx-auto">
        <div style={{ flex: 1 }}>
          <img
            alt="Sneaker Image"
            className="w-full h-auto max-w-[500px] max-h-[500px] aspect-[1/1] object-cover object-center"
            src="/web-372.png"
          />
        </div>
        <div style={{ flex: 1 }}>
          <div className="space-y-6 ">
            <h1 className="text-4xl font-bold tracking-tighter "> Planet Online Web </h1>
            <div className="flex space-x-1">
            </div>
            <p className="text-base text-zinc-500 dark:text-zinc-400">
              Made community web site
            </p>
            <p className="text-1xl font-semibold text-zinc-900 dark:text-zinc-50">Angular, Typescript, CSS, HTML, Apache, Postgresql, GCP(VM-Ubuntu)</p>
            <p className="text-1xl font-semibold text-zinc-900 dark:text-zinc-50">
              1. Register feature: Encrypt user's information with md5 hashing,
              <br />
              <span style={{ marginLeft: '20px' }}>checking the unique user id with our database</span>
            </p>
            <p className="text-1xl font-semibold text-zinc-900 dark:text-zinc-50">
              2. Post Board: User can choose topic and create post, <br />
              <span style={{ marginLeft: '20px' }}>other user can wirte comment under the post</span>
            </p>
            <p className="text-1xl font-semibold text-zinc-900 dark:text-zinc-50">
              3. Chatting room: User can create chatting room with friend
            </p>
            <p className="text-1xl font-semibold text-zinc-900 dark:text-zinc-50">
              4. Find nearest user: Using leafmap API 
              <br />
              <span style={{ marginLeft: '20px' }}>When user allow track their location, user can find nearest friend</span>
            </p>
          </div>
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

                    <h2 className="text-xl font-bold text-white">1. Front-end with Angular</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                    I designed the frontend of our website using Angular, with a key focus on enhancing user convenience.<br></br> I prioritized creating a user-friendly design to elevate the overall user experience.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-white">2. Database Setting</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                      ....
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-white">3. Build Server</h2>
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
      <div className="p-4 bg-gray-800">
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
