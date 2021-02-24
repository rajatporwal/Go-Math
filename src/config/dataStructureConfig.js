import {
  ARRAY_HELPER,
  STRING_HELPER,
  OBJECT_HELPER,
  MAP_HELPER,
  SET_HELPER,
  STACK_HELPER,
  QUEUE_HELPER,
  LINKED_LIST_HELPER,
  BINARY_SEARCH_TREE_HELPER,
} from '../helper';

let data = [ARRAY_HELPER, STRING_HELPER, OBJECT_HELPER, MAP_HELPER, SET_HELPER];
const dataStructureConfig = (isAuthenticated) => {
  return isAuthenticated
    ? [
        ...data,
        STACK_HELPER,
        QUEUE_HELPER,
        LINKED_LIST_HELPER,
        BINARY_SEARCH_TREE_HELPER,
      ]
    : data;
};

export default dataStructureConfig;
