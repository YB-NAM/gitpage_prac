
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
                    I have designed relational tables.<br></br> Using PostgreSQL, I verified the implementation and operation of tables locally. I then created a Docker image and efficiently deployed it on a server using Docker.
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-2 border-gray-800 p-4 rounded-lg">
                    <h2 className="text-xl font-bold text-white">3. Build Server</h2>
                    <p className="text-zinc-200 dark:text-zinc-100">
                    I implemented a server using a GCP (Ubuntu VM).<br></br> I set up a server using Express.js on localhost, and configured it to be accessible externally by utilizing Apache2.
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
          <h3 className="font-medium text-lg text-white">Database Table Issue</h3>
          <p className="text-white mt-2">
            When designing the database tables for a feature-rich website at the beginning, I had to consider numerous relationships to enable diverse functionalities.
             As a result, during the initial testing with the created tables, I encountered issues such as conflicts between tables and difficulties in obtaining the desired output.
             To address such issues, I started by drawing an ER diagram and sought advice from my professor during office hours. 
             I also reached out to other senior students for guidance, initiating a collaborative effort to resolve the challenges I encountered.
             In the end, I decided to recreate each table from scratch, a process that consumed a significant amount of time. However, it proved to be worthwhile as I eventually achieved the desired results.
          </p>
        </li>
        <li className="p-4 rounded-md border border-gray-600 shadow-sm bg-gray-900">
          <h3 className="font-medium text-lg text-white">Server Https Request</h3>
          <p className="text-white mt-2">
            I learned how to generate a personal HTTPS certificate during class, enabling temporary permission for HTTPS requests. 
            However, my ultimate goal was to implement public HTTPS with universal access for anyone.
            I reached out to other seniors for advice, but I couldn't find anyone who had practical experience in implementing public HTTPS. 
            Additionally, online sources didn't align with the specific environment variables and codebase of our project, making it challenging to successfully implement the receipt of HTTPS requests.
            However, I am determined to succeed in implementing this in either the ongoing project or future projects that I undertake.
          </p>
        </li>
        <li className="p-4 rounded-md border border-gray-600 shadow-sm bg-gray-900">
          <h3 className="font-medium text-lg text-white">API Connection</h3>
          <p className="text-white mt-2">
            As it was my first project involving the connection of an external API and a website, I encountered challenges during the initial integration. 
            The map was not implemented as desired, and there were issues with displaying the desired locations and tags.
            To address this issue, I had to modify the design of the frontend. 
            Additionally, in the backend, I implemented a function to accurately store the specified locations from the map into the database and retrieve them only when needed. This solution resolved the problem.
            An additional improvement method was to store a value in the user table indicating whether the user had granted real-time location sharing. 
            This information could then be saved as a cookie, ensuring that the permission for real-time location sharing would not be queried every time the user logs in.
          </p>
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
  )
}
