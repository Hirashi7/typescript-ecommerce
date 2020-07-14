import * as express from 'express';
import User from '../schemas/user.schema';
import jwt from 'jsonwebtoken';


export default class AuthenticationController {

    public login = async (req: express.Request, res: express.Response) => {
        if(!req.body) {
            return res.status(409).json({
                error: 'Invalid request'
            });
        }

        let user = await User.findOne({email: req.body.email}).exec();

        if(!user) {
            return res.status(401).json({
                error: 'Authentication failed'
            });
        }


        if(req.body.password != user.password) {
            return res.status(401).json({
                error: 'Authentication failed'
            });
        }

        user.password = '';

        return res.status(200).json({
            user: user,
            token: user._id + user.email
        });

    }
}