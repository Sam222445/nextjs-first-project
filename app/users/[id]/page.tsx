import { Params, User } from "@/types";
import Image from "next/image";

const fetchUser = async (id: String): Promise<User | null> => {
    try {
      const res = await fetch(`https://reqres.in/api/users/${id}`)
      const { data } = await res.json()
      return data
    } catch (error) {
      console.log(error)
      return null
    }
  }

const UserPage = async ({ params }: { params: Params }) => {

    const user = await fetchUser(params.id)

    return <div className="bg-blue-700 p-10 rounded-md">
        <Image className="rounded-full m-auto y-4" src={user?.avatar || ''} width={90} height={90} alt='User Avatar' />
        <h3 className="text-3xl font-bold">{user?.id} {user?.first_name} {user?.last_name}</h3>
        <p className="text-slate-100">email: {user?.email}</p>
    </div>
}

export default UserPage;
