import { Link } from "react-router"
import { useState } from "react"
import type { User } from "~/types/User"
import { CustomBotton } from "~/components/CustomBotton"

export function Welcome() {
  const [user, setUser] = useState<User>({
    username: "Benny",
    password: "123",
  })
  const [score, setScore] = useState<number>(0)

  function updateScore() {
    setScore((prev) => prev + 1)
  }

  function updateUser() {
    setUser((prevUser) => ({ ...prevUser, username: "benni" }))
  }

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header></header>

        <CustomBotton customButtonName={"Contact"} />
        <CustomBotton customButtonName={"Shop"} />
        <CustomBotton customButtonName={"Hej"} />
        <Link to={"/about"}>Navigate to about!</Link>
      </div>
    </main>
  )
}
