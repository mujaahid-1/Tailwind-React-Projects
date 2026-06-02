import { useEffect, useState } from "react";

const errorButtonStyle = {
  width: "48px",
  height: "48px",
};

const App = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch("https://dummyjson.com/users");
        if (!res.ok) throw new Error("Something went wrong.");
        const data = await res.json();
        setUsers(data.users);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUsers();
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Error error={error} />
      ) : (
        <table className="border-collapse w-full">
          <TableHeader />
          <TableBody users={users} />
        </table>
      )}
    </div>
  );
};

function TableHeader() {
  return (
    <thead>
      <tr className="even:bg-gray-100 hover:bg-gray-200 hover:cursor-pointer">
        <th className="p-[8px] border-[1px] border-[#ddd] border-solid bg-[#f2f2f2] font-bold text-left">
          ID
        </th>
        <th className="p-[8px] border-[1px] border-[#ddd] border-solid bg-[#f2f2f2] font-bold text-left">
          First Name
        </th>
        <th className="p-[8px] border-[1px] border-[#ddd] border-solid bg-[#f2f2f2] font-bold text-left">
          Last Name
        </th>
        <th className="p-[8px] border-[1px] border-[#ddd] border-solid bg-[#f2f2f2] font-bold text-left">
          Age
        </th>
        <th className="p-[8px] border-[1px] border-[#ddd] border-solid bg-[#f2f2f2] font-bold text-left">
          Phone
        </th>
        <th className="p-[8px] border-[1px] border-[#ddd] border-solid bg-[#f2f2f2] font-bold text-left">
          Email
        </th>
        <th className="p-[8px] border-[1px] border-[#ddd] border-solid bg-[#f2f2f2] font-bold text-left">
          Role
        </th>
        <th className="p-[8px] border-[1px] border-[#ddd] border-solid bg-[#f2f2f2] font-bold text-left">
          Company
        </th>
        <th className="p-[8px] border-[1px] border-[#ddd] border-solid bg-[#f2f2f2] font-bold text-left">
          Department
        </th>
      </tr>
    </thead>
  );
}

function TableBody({ users }) {
  return (
    <tbody>
      {users.map((user) => (
        <tr
          key={user.id}
          className="even:bg-gray-100 hover:bg-gray-200 hover:cursor-pointer"
        >
          <td className="p-[8px] border-[1px] border-[#ddd] border-solid text-left">
            {user.id}
          </td>
          <td className="p-[8px] border-[1px] border-[#ddd] border-solid text-left">
            {user.firstName}
          </td>
          <td className="p-[8px] border-[1px] border-[#ddd] border-solid text-left">
            {user.lastName}
          </td>
          <td className="p-[8px] border-[1px] border-[#ddd] border-solid text-left">
            {user.age}
          </td>
          <td className="p-[8px] border-[1px] border-[#ddd] border-solid text-left">
            {user.phone}
          </td>
          <td className="p-[8px] border-[1px] border-[#ddd] border-solid text-left">
            {user.email}
          </td>
          <td className="p-[8px] border-[1px] border-[#ddd] border-solid text-left">
            {user.role}
          </td>
          <td className="p-[8px] border-[1px] border-[#ddd] border-solid text-left">
            {user.company.name}
          </td>
          <td className="p-[8px] border-[1px] border-[#ddd] border-solid text-left">
            {user.company.department}
          </td>
        </tr>
      ))}
    </tbody>
  );
}

function Loader() {
  return (
    <h1 className="text-6xl flex items-center justify-center h-screen">
      Loading...
    </h1>
  );
}

function Error({ error }) {
  return (
    <div className="flex text-4xl items-center justify-center h-screen gap-4 font-bold text-red-500">
      <span>
        <svg
          style={errorButtonStyle}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          />
        </svg>
      </span>
      <span>{error}</span>
    </div>
  );
}

export default App;
