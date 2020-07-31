// import { getUsers } from './common/usersAPI'
// const getUserModule = () => import('./common/usersAPI')
const getUserModule = () => import(/* webpackChunkName: "usersAPIChunk" */ './common/usersAPI')
import './style.scss'
import moment from 'moment'

// getUsers().then(json => console.log(json))
console.log('Hello webpack!')

const fancyFunc = () => {
  return [1, 2]
}

const [a, b] = fancyFunc()
// View ./dist/index.js file for transpiled version of fancyFunc. (Will use "var" and "function fancyFunc")
console.log(`${a} and ${b}`)

const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
  getUserModule().then(({ getUsers }) => {
    getUsers().then(json => console.log(json))
  })
})