import { useEffect, useState } from "react"
import { supabase } from "./lib/supabase";

type User = {
  id: number;
  name: string;
  email: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [editId, setEditId] = useState<number | null>(null);

  const getUsers = async () => {
    const { data } = await supabase
      .from("sampleusers")
      .select("id, name, email")
      .order("id", { ascending: true });

    setUsers(data || []);
  };

  useEffect(() => {
    getUsers();
  }, []);

  const saveUser = async () => {
    if (!name || !email) return;

    if (editId!==null) {
      await supabase
        .from("sampleusers")
        .update({ name, email })
        .eq("id", editId);
    }

    else {
      await supabase
        .from("sampleusers")
        .insert([{ name, email }]);
    }

    setName("");
    setEmail("");
    setEditId(null);
    getUsers();
  };

  const deleteUser = async (id: number) => {
    await supabase
    .from("sampleusers")
    .delete()
    .eq("id", id);

    getUsers();
  };

  const editUser = (user: User) => {
    setEditId(user.id);
    setName(user.name);
    setEmail(user.email);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white p-4 rounded shadow-lg">
        <h1 className="text-xl font-semibold mb-4">Users Infromation</h1>

        <div className="flex gap-2 mb-4">
          <input className="border p-2 w-full" placeholder="Enter your name" value={name} onChange={(e) => setName(e.target.value)} />
          <input className="border p-2 w-full" placeholder="Enter your email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <button onClick={saveUser} className="bg-blue-500 text-white px-4">{editId ? "Update" : "Add"}</button>
        </div>

        <table className="w-full border">
          <thead className="bg-gray-200">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="border p-2">{user.name}</td>
                <td className="border p-2">{user.email}</td>
                <td className="border p-2 space-x-2">
                  <button onClick={() => editUser(user)} className="bg-yellow-400 px-2">Edit</button>
                  <button onClick={() => deleteUser(user.id)} className="bg-red-500 text-white px-2">Delete</button>
                </td>
              </tr>
            ))}

            {users.length === 0 && (
              <tr>
                <td colSpan={3} className="p-4 text-center text-gray-500">No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default App
