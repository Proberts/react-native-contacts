var ReactNative = require('react-native')
RNC_CB = ReactNative.NativeModules.Contacts

module.exports = {

  getAll() {
    return new Promise((resolve, reject) => {
      RNC_CB.getAll((err, contacts) => {
        if (err) {
          reject(err);
        } else {
          resolve(contacts);
        }
      });
    });
  },

  getAllWithoutPhotos() {
    return new Promise((resolve, reject) => {
      RNC_CB.getAllWithoutPhotos((err, contacts) => {
        if (err) {
          reject(err);
        } else {
          resolve(contacts);
        }
      });
    });
  },

  getPhotoForId(contactId) {
    return new Promise((resolve, reject) => {
      RNC_CB.getPhotoForId(contactId, (err, url) => {
        if (err) {
          reject(err);
        } else {
          resolve(url);
        }
      });
    });
  },

  addContact(contact) {
    return new Promise((resolve, reject) => {
      RNC_CB.addContact(contact, (err, id) => {
        if (err) {
          reject(err);
        } else {
          resolve(id);
        }
      });
    });
  },

  updateContact(contact) {
    return new Promise((resolve, reject) => {
      RNC_CB.updateContact(contact, (err, id) => {
        if (err) {
          reject(err);
        } else {
          resolve(id);
        }
      });
    });
  },

  deleteContact(contact) {
    return new Promise((resolve, reject) => {
      RNC_CB.deleteContact(contact, (err, id) => {
        if (err) {
          reject(err);
        } else {
          resolve(id);
        }
      });
    });
  },

  checkPermission() {
    return new Promise((resolve, reject) => {
      RNC_CB.checkPermission((err, permission) => {
        if (err) {
          reject(err);
        } else {
          resolve(permission);
        }
      });
    });
  },

  requestPermission() {
    return new Promise((resolve, reject) => {
      RNC_CB.requestPermission((err, permission) => {
        if (err) {
          reject(err);
        } else {
          resolve(permission);
        }
      });
    });
  },

}
