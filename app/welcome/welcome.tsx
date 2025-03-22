import { Link } from "react-router"
import { useState } from "react"
import type { User } from "~/types/User"
import { CustomBotton } from "~/components/CustomBotton"

export function Welcome() {
  const [user, setUser] = useState<User>({
    username: "Jackson",
    password: "123",
  })

  const [score, setScore] = useState<number>(0)

  function updateScore() {
    setScore((prev) => prev + 1)
  }

  function displayScore(score: number): string {
    return "Score: " + score
  }

  function updateUser() {
    setUser((prevUser) => ({ ...prevUser, username: "jb" }))
  }

  function displayUser(user: User): string {
    return "Hello, " + user.username
  }

  //displayUser(user)

  return (
    <main>
      <div>
        <header></header>

        <Link to={"/about"}>
          <CustomBotton customButtonName={"About"} />
        </Link>

        <div>
          <button onClick={() => setScore(score + 1)}>Score + 1</button>
          <p> {displayScore(score)} </p>
          <p> {displayUser(user)} </p>
        </div>
      </div>
    </main>
  )
}
