const db = require('../db/connect');


class Entry {
    constructor({id, user_id, entry, time }) {
        this.id = id
        this.user_id = user_id
        this.entry = entry
        this.time = time
    }

    static async getAll() {
        const response = await db.query("SELECT * FROM entries;");
    
        if (response.rows.length === 0) {
          throw new Error("No entries available.")
        }
    
        return response.rows.map(g => new Entry(g));
    }

    static async create(data) {
        const { user_id, entry} = data;
        const response = await db.query('INSERT INTO entries (user_id, entry) VALUES ($1, $2) RETURNING *;', [user_id, entry]);
        return new Entry(response.rows[0])
    }

    static async getOneById(id) {

        const response = await db.query("SELECT * FROM entries WHERE id = $1;", [id]);
        console.log(response.rows);
    
        if (response.rows.length != 1) {
          throw new Error("There is no entry with this id")
        }
    
        return new Entry(response.rows[0]);
      }

      async destroy() {

        const response = await db.query('DELETE FROM entries WHERE id = $1 RETURNING *;', [this.id]);

        if (response.rows.length != 1) {
          throw new Error("Unable to delete entry")
        }
    
        return new Entry(response.rows[0]);
      }

      




}

module.exports = Entry;
