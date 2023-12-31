import Users from "@/components/Users"
import { User } from "@/types"

const fetchUsers = async (): Promise<User[]> => {
  try {
    const res = await fetch('https://reqres.in/api/users')
    const { data } = await res.json()
    return data
  } catch (error) {
    console.log(error)
    return []
  }
}

const Home: React.FC = async () => {

  const users: User[] = await fetchUsers()

  return (
    <Users users={users} />
  )
}

export default Home;
