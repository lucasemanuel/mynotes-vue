import Vue from 'vue'
import moment from 'moment'

moment.locale('pt-br')

Vue.filter('data', value => moment(value).format('L'))
Vue.filter('hour', value => moment(value).format('LT'))
