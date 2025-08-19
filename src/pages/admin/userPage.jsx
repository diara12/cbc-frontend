import { useEffect, useState } from "react";
import axios from "axios";

export default function UsersPage() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
  axios.get("http://localhost:5000/api/users/all")
    .then(res => {
      setUsers(res.data);
      setIsLoading(false);
    })
    .catch(err => {
      console.error(err);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="relative w-full h-full max-h-full overflow-y-auto p-4 font-[var(--font-main)]">
    
                {isLoading ? (
                    <div className="w-full h-full flex justify-center items-center">
                        <div className="w-16 h-16 border-4 border-gray-300 border-t-[var(--color-accent)] rounded-full animate-spin"></div>
                    </div>
                ) : (
                    <div className="overflow-x-auto">
                        
                        <table className="w-full text-center border border-gray-200 shadow-md rounded-lg overflow-hidden">
                            <thead className="bg-[var(--color-accent)] text-white">
                                <tr>
                                    <th className="py-3 px-2">Name</th>
                                    <th className="py-3 px-2">Email</th>
                                    <th className="py-3 px-2">Role</th>
                                    <th className="py-3 px-2">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((u, index) => (
                                    <tr
                                        
                                        key={index}
                                        className={`${
                                            index % 2 === 0
                                                ? "bg-[var(--color-primary)]"
                                                : "bg-gray-100"
                                        } hover:bg-gray-200 transition`}
                                    >
                                        <td className="py-4 px-2">{u.firstName} {u.lastName}</td>
                                        <td className="py-4 px-2">{u.email}</td>
                                        <td className="py-4 px-2">{u.role}</td>
                                        <td className="py-4 px-2">{u.isBlocked ? "Blocked" : "Active"}</td>
                                        
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
  );
}
