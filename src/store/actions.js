import Api from 'Services/api';

import { ACTION_TYPE } from './constants';

export default {
  action(payload) {
    return {
      type: ACTION_TYPE.TYPE,
      payload,
    };
  },
  
  // THUNKS
  asyncAction(payload = null) {
    return (dispatch, getState) => {
      const payloadState = payload || getState().payload;

      dispatch(this.setLoading(true));

      Api.doSomething(payload).then((result) => {
        dispatch(this.action(result));
        dispatch(this.anotherAction(false));
      });
    };
  }
};
