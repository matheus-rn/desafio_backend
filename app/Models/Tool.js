/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model');

class Tool extends Model {
  getTags(tags) {
    return tags.tags;
  }

  user() {
    return this.belongsTo('App/Models/User');
  }
}

module.exports = Tool;
