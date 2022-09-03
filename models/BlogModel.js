//importa la conexón a bd
import db from '../database/db.js';

import { DataTypes } from 'sequelize';

const BlogModel = db.define('tbl_blogs', {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default BlogModel;
