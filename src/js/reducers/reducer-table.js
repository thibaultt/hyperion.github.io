const initialState ={};

export default function  (state = initialState, action) {
	const newState = Object.assign({}, state);
	//	switch
	switch(action.type) {
    default:
    		return newState;
    		//break;
  }
};
