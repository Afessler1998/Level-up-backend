function makeDeleteUserData(deleteUserDataService) {
    return async function deleteUserData(request) {
      try {
        await deleteUserDataService(request.userId);
        return {
          statusCode: 200,
          response: {msg: "User data deleted"}
        };
      } catch (error) {
        console.log(error);
      }
    };
  }
  
  module.exports = makeDeleteUserData;