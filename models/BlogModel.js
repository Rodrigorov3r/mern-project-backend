//importa la conexón a bd
import db from '../database/db';

import { DataTypes } from 'sequelize/types';

const BlogModel = db.define('tbl_blogs', {
  title: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
});

export default BlogModel;
