import { ThemeToggler } from "./ThemeToggler"

export const Header = () : JSX.Element => {
  return (
    <header className="flex justify-between items-center h-20 bg-White dark:bg-VeryDarkBlue">
        <div>
            <p className="text-bold">Where in the world ?</p>
        </div>
        <div>
            <ThemeToggler/>
            <p>Dark Mode</p>
        </div>

    </header>
  )
}
