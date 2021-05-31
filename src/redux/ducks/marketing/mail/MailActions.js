import * as types from "./MailTypes";

/**
 * Get All Mailing List
 */
export const getAllMailingList = () => ({
  type: types.GET_ALL_MAILING_LIST
});
export const getAllMailingListSuccess = data => ({
  type: types.GET_ALL_MAILING_LIST_SUCCESS,
  payload: data
});
export const getAllMailingListFailure = error => ({
  type: types.GET_ALL_MAILING_LIST_FAILURE,
  payload: error
});
/**
 * Get All Mailing List
 */
export const getAllAdminMailingList = () => ({
  type: types.GET_ALL_ADMIN_MAILING_LIST
});
export const getAllAdminMailingListSuccess = data => ({
  type: types.GET_ALL_ADMIN_MAILING_LIST_SUCCESS,
  payload: data
});
export const getAllAdminMailingListFailure = error => ({
  type: types.GET_ALL_ADMIN_MAILING_LIST_FAILURE,
  payload: error
});

export const getSingleMailing = (id) => ({
  type: types.GET_SINGLE_MAILING,
  payload: id
});
export const getSingleMailingSuccess = (data) => ({
  type: types.GET_SINGLE_MAILING_SUCCESS,
  payload: data
})
export const getSingleMailingFailure = (error) => ({
  type: types.GET_SINGLE_MAILING_FAILURE,
  payload: error
});

/**
 * Get Contacts in Mailing List
 */
export const getMailingList = (listId, limit, skip, filter, searchText, orderBy) => ({
  type: types.GET_MAILING_LIST,
  payload: { listId, limit, skip, filter, searchText, orderBy }
});
export const getMailingListSuccess = data => ({
  type: types.GET_MAILING_LIST_SUCCESS,
  payload: data
});
export const getMailingListFailure = error => ({
  type: types.GET_MAILING_LIST_FAILURE,
  payload: error
});

/**
 * Get All Contacts
 */
export const getContacts = (listId, limit, skip, filter, searchText, orderBy) => ({
  type: types.GET_CONTACTS,
  payload: { listId, limit, skip, filter, searchText, orderBy },
});
export const getContactsSuccess = data => ({
  type: types.GET_CONTACTS_SUCCESS,
  payload: data
});
export const getContactsFailure = error => ({
  type: types.GET_CONTACTS_FAILURE,
  payload: error
});

/**
 * Save to Mailing List
 */
export const saveToMailingList = (contacts, filter, searchText, limit, adminList) => ({
  type: types.SAVE_TO_MAILING_LIST,
  payload: { contacts, filter, searchText, limit, adminList },
});
export const saveToMailingListSuccess = data => ({
  type: types.SAVE_TO_MAILING_LIST_SUCCESS,
  payload: data
});
export const saveToMailingListFailure = error => ({
  type: types.SAVE_TO_MAILING_LIST_FAILURE,
  payload: error
});

/**
 * Remove from Mailing List
 */
export const removeFromMailingList = (contacts, searchText, limit) => ({
  type: types.REMOVE_FROM_MAILING_LIST,
  payload: { contacts, searchText, limit },
});
export const removeFromMailingListSuccess = data => ({
  type: types.REMOVE_FROM_MAILING_LIST_SUCCESS,
  payload: data
});
export const removeFromMailingListFailure = error => ({
  type: types.REMOVE_FROM_MAILING_LIST_FAILURE,
  payload: error
});

/**
 * Create Mailing List
 */
export const createMailingList = data => ({
  type: types.CREATE_MAILING_LIST,
  payload: data
});
export const createMailingListSuccess = data => ({
  type: types.CREATE_MAILING_LIST_SUCCESS,
  payload: data
});
export const createMailingListFailure = error => ({
  type: types.CREATE_MAILING_LIST_FAILURE,
  payload: error
});

/**
 * Update Mailing List
 */

export const updateMailingList = data => ({
  type: types.UPDATE_MAILING_LIST,
  payload: data
});
export const updateMailingListSuccess = data => ({
  type: types.UPDATE_MAILING_LIST_SUCCESS,
  payload: data
});
export const updateMailingListFailure = error => ({
  type: types.UPDATE_MAILING_LIST_FAILURE,
  payload: error
});

/**
 * Delete Mailing List
 */
export const deleteMailingList = data => ({
  type: types.DELETE_MAILING_LIST,
  payload: data
});
export const deleteMailingListSuccess = data => ({
  type: types.DELETE_MAILING_LIST_SUCCESS,
  payload: data
});
export const deleteMailingListFailure = error => ({
  type: types.DELETE_MAILING_LIST_FAILURE,
  payload: error
});

/**
 * Get  Mailing List campaigns
 */
 export const getCampaignMailingList = (userId, mailListId) => ({
  type: types.GET_CAMPAIGN_MAILING_LIST,
  payload: { userId, mailListId },
});
export const getCampaignMailingListSuccess = (data) => ({
  type: types.GET_CAMPAIGN_MAILING_LIST_SUCCESS,
  payload: data,
});
export const getCampaignMailingListFailure = (error) => ({
  type: types.GET_CAMPAIGN_MAILING_LIST_FAILURE,
  payload: error,
});

/**
 * Get All RELATED CAMPAIGNS
 */
 export const getAllRelatedCampaigns = (userId, mailListId) => ({
  type: types.GET_ALL_RELATED_CAMPAIGNS,
  payload: { userId, mailListId },
});
export const getAllRelatedCampaignsSuccess = (data) => ({
  type: types.GET_ALL_RELATED_CAMPAIGNS_SUCCESS,
  payload: data,
});
export const getAllRelatedCampaignsFailure = (error) => ({
  type: types.GET_ALL_RELATED_CAMPAIGNS_FAILURE,
  payload: error,
});