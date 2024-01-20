import Link from "next/link"
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="flex flex-col min-h-screen bg-blue-50 dark:bg-blue-900">
      <header className="flex h-16 items-center justify-between px-4 md:px-6 bg-blue-100 dark:bg-blue-800">
        <Link className="flex items-center gap-2" href="#">
          <SchoolIcon className="h-6 w-6 text-blue-500 dark:text-blue-300" />
          <span className="text-lg font-semibold text-blue-600 dark:text-blue-300">College Club</span>
        </Link>
        <nav className="hidden md:flex gap-4">
          <Link
            className="text-sm font-medium text-blue-600 hover:underline underline-offset-4 dark:text-blue-300"
            href="#"
          >
            About Us
          </Link>
          <Link
            className="text-sm font-medium text-blue-600 hover:underline underline-offset-4 dark:text-blue-300"
            href="#"
          >
            Events
          </Link>
          <Link
            className="text-sm font-medium text-blue-600 hover:underline underline-offset-4 dark:text-blue-300"
            href="#"
          >
            Members
          </Link>
          <Link
            className="text-sm font-medium text-blue-600 hover:underline underline-offset-4 dark:text-blue-300"
            href="#"
          >
            Contact
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button className="rounded-full text-blue-500 dark:text-blue-300" size="icon" variant="outline">
              <MenuIcon className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent className="bg-blue-100 dark:bg-blue-800" side="left">
            <nav className="grid gap-6">
              <Link
                className="text-lg font-medium text-blue-600 hover:underline underline-offset-4 dark:text-blue-300"
                href="#"
              >
                About Us
              </Link>
              <Link
                className="text-lg font-medium text-blue-600 hover:underline underline-offset-4 dark:text-blue-300"
                href="#"
              >
                Events
              </Link>
              <Link
                className="text-lg font-medium text-blue-600 hover:underline underline-offset-4 dark:text-blue-300"
                href="#"
              >
                Members
              </Link>
              <Link
                className="text-lg font-medium text-blue-600 hover:underline underline-offset-4 dark:text-blue-300"
                href="#"
              >
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <img
                alt="Club"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
                height="550"
                src="/placeholder.svg"
                width="550"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter text-blue-600 sm:text-5xl xl:text-6xl/none dark:text-blue-300">
                    Welcome to our Club.
                  </h1>
                  <p className="max-w-[600px] text-gray-500 md:text-xl dark:text-gray-400">
                    Join us and make a difference.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-blue-600 px-8 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-blue-500 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:bg-blue-300 dark:text-gray-900 dark:hover:bg-blue-200 dark:focus-visible:ring-blue-500"
                    href="#"
                  >
                    Join Now
                  </Link>
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md border border-blue-200 bg-white px-8 text-sm font-medium text-blue-600 shadow-sm transition-colors hover:bg-blue-100 hover:text-blue-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-blue-700 disabled:pointer-events-none disabled:opacity-50 dark:border-blue-800 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800 dark:hover:text-blue-200 dark:focus-visible:ring-blue-500"
                    href="#"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container grid items-center justify-center gap-4 px-4 md:px-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card className="bg-blue-100 dark:bg-blue-800">
                <CardHeader>
                  <CardTitle className="text-blue-600 dark:text-blue-300">Event 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Event 1"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    width="300"
                  />
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-300 dark:text-gray-900 dark:hover:bg-blue-200">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-blue-100 dark:bg-blue-800">
                <CardHeader>
                  <CardTitle className="text-blue-600 dark:text-blue-300">Event 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Event 2"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    width="300"
                  />
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-300 dark:text-gray-900 dark:hover:bg-blue-200">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
              <Card className="bg-blue-100 dark:bg-blue-800">
                <CardHeader>
                  <CardTitle className="text-blue-600 dark:text-blue-300">Event 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <img
                    alt="Event 3"
                    className="aspect-video overflow-hidden rounded-lg object-cover"
                    height="200"
                    src="/placeholder.svg"
                    width="300"
                  />
                </CardContent>
                <CardFooter>
                  <Button className="bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-300 dark:text-gray-900 dark:hover:bg-blue-200">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-blue-200 dark:border-blue-800 bg-blue-100 dark:bg-blue-800">
        <p className="text-xs text-blue-600 dark:text-blue-300">© 2024 College Club. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs text-blue-600 hover:underline underline-offset-4 dark:text-blue-300" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs text-blue-600 hover:underline underline-offset-4 dark:text-blue-300" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}


function SchoolIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 6 8-4 8 4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  )
}
