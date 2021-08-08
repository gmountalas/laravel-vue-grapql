import ApolloClient from 'apollo-boost'
import Vue from 'vue';
import VueRouter from 'vue-router';
import './bootstrap';
import PostList from './PostList';
import Post from './Post';
import VueApollo from 'vue-apollo'
import TopicPostList from './TopicPostList';
import AuthorPostList from './AuthorPostList';
// Use moment library and create global filter
import moment from 'moment';

window.Vue = Vue;
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'index',
        component: PostList
    },
    {
        path: '/post/:id',
        name: 'post',
        component: Post
    },
    {
        path: '/topic/:slug',
        name: 'topic',
        component: TopicPostList
    },
    {
        path: '/authors/:id',
        name: 'author',
        component: AuthorPostList
    },
];
Vue.use(VueApollo)
const apolloClient = new ApolloClient({
    // You should use an absolute URL here
    uri: 'http://127.0.0.1:8000/graphql'
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient,
})

const router = new VueRouter({
    mode: 'history',
    routes
});

Vue.filter("timeago", value => moment(value).fromNow());
Vue.filter("longDate", value => moment(value).format("MMMM Do YYYY"));

const app = new Vue({
    el: '#app',
    apolloProvider,
    router
});
