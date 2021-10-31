'use strict'
const User = use('App/Models/User')

class AuthController {
   async register({auth,request, response}) {
        const userData =  request.post()
        const user = await User.create(userData)

        const token = await auth.generate(user,true)
        response.created({status:true,token})
    }

    async login({auth, request, response}){
        const {email, password} = request.post()

        if(await auth.attempt(email, password)){
            const user = await User.findBy('email', email)

            const token = await auth.generate(user, true)

            response.ok({status:true,token})
        }
    }
}

module.exports = AuthController
