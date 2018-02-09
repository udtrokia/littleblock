import Gun from 'gun'
const gun = Gun(['http://106.14.205.225:8080/gun'])


export const a = gun.get('mine').put({planet:"mercury"})


