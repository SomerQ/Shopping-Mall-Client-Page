import date from './dateFilter'
export default {
    install(vue){
        vue.filter('dateFilter',date);
    }
}