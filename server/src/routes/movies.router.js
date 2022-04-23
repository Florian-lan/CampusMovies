import Router from 'koa-router'

const router = new Router({
    prefix:'/movies'
})

router.post('upload')

export default router