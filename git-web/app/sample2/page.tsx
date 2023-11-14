/**
 * v0 by Vercel.
 * @see https://v0.dev/t/AokCsMvkYGf
 */
import { Button } from "@/components/ui/button"
import { CardContent, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div>
    <Card
      key="1"
      className="rounded-lg overflow-hidden shadow-lg max-w-sm mx-auto hover:shadow-xl transition-all duration-200"
    >
      <img
        alt="Profile picture"
        className="object-cover w-full"
        height="320"
        src="/placeholder.svg"
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
          Details.
        </p>
        <div className="flex mt-4 space-x-2">
          <Button className="w-full hover:bg-gray-700 hover:text-white transition-all duration-200" size="sm">
            <a href="/">Home</a>
          </Button>
        </div>
      </CardContent>
    </Card>
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
            Go to Project details
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
