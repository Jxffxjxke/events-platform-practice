type User2 = {
  id: number;
  username: string;
  role: "member" | "contributor" | "admin";
};

type UpdateUser = Partial<User2>;

let nextUserID = 1;

const users2: User2[] = [
  { id: nextUserID++, username: "john_doe", role: "member" },
  { id: nextUserID++, username: "jane_smith", role: "contributor" },
  { id: nextUserID++, username: "alice_jones", role: "admin" },
  { id: nextUserID++, username: "charlie_brown", role: "member" },
];

const updateUser = (id: number, updates: UpdateUser) => {
  let foundUser = users2.find((user) => user.id === id);
  if (!foundUser) {
    throw new Error("user not found");
  }
  Object.assign(foundUser, updates);
};

const addNewUser = (newUser: Omit<User2, 'id'>): User2 => {
  const user: User2 = {
    id: nextUserID++,
    ...newUser,
  };
  users2.push(user);
  return user;
};

addNewUser({ username: "joe_schmoe", role: "member" });

console.log(users2);
