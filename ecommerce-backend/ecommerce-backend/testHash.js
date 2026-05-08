import bcrypt from "bcryptjs";

const password = "admin123";

const run = async () => {
  const hash = await bcrypt.hash(password, 10);

  console.log("NEW HASH:", hash);

  const match = await bcrypt.compare(password, hash);
  console.log("SELF TEST MATCH:", match);
};

run();