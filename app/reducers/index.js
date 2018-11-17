// import {combineReducers} from 'redux';
// import todos from './todo';
// import visibilityFilter from './visibilityFilter';
// export default combineReducers({
//     todos,
//     visibilityFilter
// })
import {combineReducers} from 'redux';
import userinfo from './userinfo';
const rootReducer = combineReducers({
    // userinfo 等价于下面的写法
    userinfo:userinfo
})
export default rootReducer