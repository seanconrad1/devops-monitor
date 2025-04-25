// /init-replica.js
function initiateReplicaSet() {
  const rsConfig = {
    _id: "rs0",
    members: [{ _id: 0, host: "mongo-db:27017" }],
  };

  const maxAttempts = 10;
  let attempt = 0;
  while (attempt < maxAttempts) {
    try {
      const status = rs.status();
      printjson(status);
      if (status.ok === 1) {
        print("Replica set already initiated.");
        break;
      }
    } catch (e) {
      try {
        rs.initiate(rsConfig);
        print("Replica set initiated.");
        break;
      } catch (err) {
        print("Waiting for MongoDB to be ready...");
        sleep(2000); // wait 2 seconds
        attempt++;
      }
    }
  }
}

initiateReplicaSet();
