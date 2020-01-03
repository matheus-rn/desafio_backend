/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

const Tool = use('App/Models/Tool');

const { Client } = use('@elastic/elasticsearch');

const esClient = new Client({
  node: `http://elasticsearch:9200`,
});

class ToolController {
  async store({ request, auth }) {
    const data = request.only(['title', 'link', 'description', 'tags']);
    const user = await auth.getUser();

    const tool = await Tool.create({ ...data, user_id: user.id });

    // elasticsearch create
    await esClient.index({
      index: 'tools',
      type: 'doc',
      id: tool.id,
      body: {
        id: tool.id,
        title: tool.title,
        description: tool.description,
        tags: tool.tags.tags,
      },
    });

    return tool;
  }

  async destroy({ params }) {
    const tool = await Tool.findOrFail(params.id);

    await tool.delete();
  }
}

module.exports = ToolController;
