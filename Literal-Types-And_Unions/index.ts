let yourName: "Bob" = "Bob";
const yourName2 = "Bob";

type UserRole = "guest" | "member" | "admin";

type User = {
  username: string;
  role: UserRole;
};

const users: User[] = [
  { username: "john_doe", role: "member" },
  { username: "jane_doe", role: "admin" },
  { username: "guest_user", role: "guest" },
];

const fectchUserDetails = (username: string) => {
  const user = users.find((user) => user.username === username);
  if (!user) {
    throw new Error(`User with userbname ${username} not found`);
  }
  return user;
};
