/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Tool = use('App/Models/Tool');

const Env = use('Env');
const elasticsearch = use('elasticsearch');

class ToolController {
  async store({ request, auth }) {
    const data = request.only(['title', 'link', 'description', 'tags']);
    const user = await auth.getUser();

    const tool = await Tool.create({ ...data, user_id: user.id });

    return tool;
  }

  async destroy({ params }) {
    const tool = await Tool.findOrFail(params.id);

    await tool.delete();
  }
}

module.exports = ToolController;
