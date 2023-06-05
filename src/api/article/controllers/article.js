'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

//module.exports = createCoreController('api::article.article');
module.exports = createCoreController('api::article.article', ({ strapi }) =>  ({
   
    async create(ctx) {
        const data=ctx.request.body.data;
        //data['title']="Hulaaaare";
        //data['publishedAt']=null;
        data['users_permissions_user']=ctx.state.user.id;
        ctx.request.body.data=data;
        const response = await super.create(ctx);
        return response;
      },

     
  }));

