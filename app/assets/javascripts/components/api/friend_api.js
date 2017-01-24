class FriendApi {

// Separates out logic for Friend api calls into separate class, to be invoked in container component for Friend.

  static getFriendInfo(id) {
    return $.ajax({
        url: `/api/v1/friends/${id}`,
        type: 'GET',
        success: (response) => {
          return response
        }
      })
  }

  static updateFriendInfo(friend) {
    return $.ajax({
        url: `/api/v1/friends/${friend.id}`,
        type: 'PUT',
        data: { friend },
        dataType: "json",
        success: (response) => {
          return response
        },
        error: (errors) => {
          return errors
        }
      })
  }

  static createNewFriend(friend) {
    return $.ajax({
        url: '/api/v1/friends/',
        type: 'POST',
        data: { friend },
        success: (response) => {
          return response
        },
        error: (errors) => {
          return errors
        }
      });
  }
}