/**
 * v0 by Vercel.
 * @see https://v0.dev/t/q78qlbK
 */
import { AccordionTrigger, AccordionContent, AccordionItem, Accordion } from "@/components/ui/accordion"
import { CardContent, Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import '../about/page.css'
export default function Component() {
  return (
    <div>

      <div className="flex justify-center items-center min-h-screen w-full" style={{
        backgroundImage: "linear-gradient(to right, #a044ff ,#6a3093), url(/placeholder.svg?height=1080&width=1920)",
      }}>

        <Card className="shadow-lg w-[550px]" style={{
          backgroundImage: "linear-gradient(to right,#aaaa ,#0000 ), url(/placeholder.svg?height=1080&width=1920)",
        }}>
          <CardContent className="p-6 text-white">
            <h2 className="text-2xl font-semibold">Hi, I am Yoobin Nam</h2>
            <Accordion className="w-full mt-4" type="multiple">
              <AccordionItem value="item-1">
                <AccordionTrigger className="hover:underline-none">
                  1. Skills
                </AccordionTrigger>
                <AccordionContent>
                  Language - C++, C, C#, Python, Java, Javascript, Typescript, HTML, CSS<br></br><br></br>
                  Framework - Angular, Nextjs<br></br><br></br>
                  Library - Jquery, React<br></br><br></br>
                  Operating Systems - Microsoft Window, Linux, Mac<br></br><br></br>
                  Application - Unity, Git & GitHub, VirtualBox, Docker, Microsoft Office<br></br><br></br>
                  Database - Postgresql, MySQL, MongoDB, Microsoft Sql
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="hover:underline-none">
                  2. Education
                </AccordionTrigger>
                <AccordionContent>
                  Simon Fraser University (2022. Spring ~ Present)<br></br>
                  BSc. Computer Science – Software System<br></br><br></br>

                  Douglas College (2020. Fall~ 2021. Fall)<br></br>
                  Computer Science<br></br><br></br>


                  Soongsing University in Korea (2016. Spring ~ 2018. Fall)<br></br>
                  Material Engineering
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="hover:underline-none">
                  3.
                </AccordionTrigger>
                <AccordionContent>
                  ...
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="hover:underline-none">
                  4
                </AccordionTrigger>
                <AccordionContent>
                  ...
                </AccordionContent>
              </AccordionItem>
              <AccordionItem className="border-b-0" value="item-5">
                <AccordionTrigger className="hover:underline-none">
                  5. Contact Info.
                </AccordionTrigger>
                <AccordionContent>
                  School email: yoobin_nam@sfu.ca<br></br>
                  Personal email: ybca6244@gmail.com
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Button
              className="text-white border-white hover:bg-white hover:text-black dark:text-gray-300 dark:border-gray-300 dark:hover:bg-gray-300 dark:hover:text-black"
              variant="outline"
            >
              <a href="/">Home</a>
            </Button>
          </CardContent>
        </Card>

      </div>
      <div style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundImage: "linear-gradient(to right, #a044ff ,#6a3093)",
        padding: "20px",
      }}>
        <div className="bouncing-container h-24" style={{
          backgroundImage: "linear-gradient(to right, #a044ff ,#6a3093)",
        }}>
          <img
            alt="Bouncing Icon"
            className="w-8 h-8"
            src="/js.png"
          />
        </div>
        <div className="bouncing-container h-24" style={{
          backgroundImage: "linear-gradient(to right, #a044ff ,#6a3093)",
        }}>
          <img
            alt="Bouncing Icon"
            className="w-8 h-8"
            src="/cp.svg"
          />
        </div>
      </div>

    </div>
  )
}
