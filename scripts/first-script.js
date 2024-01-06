import http from 'k6/http';
import {sleep} from 'k6';
import { randomIntBetween } from 'https://jslib.k6.io/k6-utils/1.2.0/index.js';
import {SharedArray} from 'k6/data';

const users=new SharedArray('users data',function(){
   return JSON.parse(open('./users.json')).users;
})
console.log(users);
export const options={
    vus: 2,
    duration: '30s',
    ext: {
        loadimpact: {
            projectID: 3675408
        }
    }
}
export default function(){
    const res=http.get('https://test.k6.io//news.php');
   // console.log(res.body);
    sleep(randomIntBetween(1, 5));
}