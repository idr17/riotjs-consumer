import '@riotjs/hot-reload'
import {component} from 'riot'
import Main from './template/main.riot'

component(Main)(document.getElementById('app'), {
  title: 'ivosights test'
})