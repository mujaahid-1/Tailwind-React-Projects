import { useEffect, useState } from "react";

const App = () => {
  const [users, setUser] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUser(data.users);
        setIsLoading(false);
        console.log(data.users);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <Loader />
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

export default App;
