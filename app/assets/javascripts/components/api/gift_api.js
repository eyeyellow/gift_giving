class GiftApi {

// Separates out logic for Gift api calls into separate class, to be invoked in container component for Gift.

  static getFriendGifts(friendId) {
    return $.ajax({
        url: `/api/v1/gifts/${friendId}`,
        type: 'GET',
        success: (response) => {
          return response
        }
      })
  }

  static updateGift(gift) {
    return $.ajax({
        url: `/api/v1/gifts/${gift.id}`,
        type: 'PUT',
        data: { gift },
        dataType: "json",
        success: (response) => {
          return response
        },
        error: (errors) => {
          return errors
        }
      })
  }

  static createNewGift(gift) {
    return  $.ajax({
        url: '../../api/v1/gifts/',
        type: 'POST',
        data: { gift },
        success: (response) => {
          return response
        },
        error: (errors) => {
          return errors
        }
      });

  }

  static deleteGift(id) {
    return  $.ajax({
        url: `/api/v1/gifts/${id}`,
        type: 'DELETE'
      })

  }
}