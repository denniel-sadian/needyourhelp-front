// For determining whether the current user is authorized to
// edit the topic.

import axios from 'axios'

export default async function({ store, redirect, route }) {
  const username = store.getters.auth.username
  if (username) {
    const topic = `https://needyourhelp-api.herokuapp.com/topics/${
      route.params.id
    }/`
    await axios.get(topic).then(res => {
      if (res.data.owner !== username) redirect('/topics')
    })
  } else redirect('/topics')
}
