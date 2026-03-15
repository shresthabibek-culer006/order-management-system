// testConnection.js
const { MongoClient } = require("mongodb");

const test = async () => {
  // ✅ Remove any extra '=' at the start
  const url = "mongodb+srv://bhushanoms:bhushan1234@cluster0.ybgxqoo.mongodb.net/?appName=Cluster0";

  const client = new MongoClient(url);

  try {
    // Connect to the cluster
    await client.connect();

    // Test the connection by getting server info
    const info = await client.db().admin().serverStatus();
    console.log("✅ Connection successful!");
    console.log("MongoDB version:", info.version);
  } catch (err) {
    console.error("❌ Connection failed:", err.message);
  } finally {
    await client.close();
  }
};

// Run the test
test();