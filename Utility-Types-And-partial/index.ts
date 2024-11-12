type User2 = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

const users2: User2[] = [
  { id: 1, username: "john_doe", role: "member" },
  { id: 2, username: "jane_smith", role: "contributor" },
  { id: 3, username: "alice_jones", role: "admin" },
  { id: 4, username: "charlie_brown", role: "member" },
];

const updateUser = (id: any, updates: any) => {
    const foundUser = users2.find((user) => user.id === id);
    console.log(foundUser);
    
};

updateUser(1, { username: "new_jane_doe" });
updateUser(4, { role: "contributor" });

console.log(users2);
