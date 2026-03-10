/**
 * Copyright IBM Corp. 2014, 2020
 * SPDX-License-Identifier: MIT
 */

var PopupIdSerializer = {
  serialize(popupId) {
    return "torii-popup:" + popupId;
  },

  deserialize(serializedPopupId) {
    if (!serializedPopupId){
      return null;
    }

    var match = serializedPopupId.match(/^(torii-popup:)(.*)/);
    return match ? match[2] : null;
  },
};


export default PopupIdSerializer;
