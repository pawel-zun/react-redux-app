import uuid from 'uuid';

const ADD_COMMENT = 'ADD_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const DELETE_COMMENT = 'DELETE_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

function addComment(text) {
  return {
    type: ADD_COMMENT,
    text: text,
    id: uuid.v4()
  }
}

function editComment(id, text) {
  return {
    type: EDIT_COMMENT,
    id,
    text
  }
}

function deleteComment(id) {
  return {
    type: DELETE_COMMENT,
    id
  }
}

function thumbUpComment(commentId) {
  return {
    type: THUMB_UP_COMMENT,
    id: commentId
  }
}

function thumbDownComment(commentId) {
  return {
    type: THUMB_DOWN_COMMENT,
    id: commentId
  }
}

export {
  ADD_COMMENT,
  DELETE_COMMENT,
  EDIT_COMMENT,
  THUMB_UP_COMMENT,
  THUMB_DOWN_COMMENT
}

export {
  addComment,
  editComment,
  deleteComment,
  thumbUpComment,
  thumbDownComment
}