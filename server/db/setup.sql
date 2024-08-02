DROP TABLE IF EXISTS users, entries;

CREATE TABLE IF NOT EXISTS users (
    id INT GENERATED ALWAYS AS IDENTITY,
    username VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE IF NOT EXISTS entries (
    id INT GENERATED ALWAYS AS IDENTITY,
    user_id INTEGER NOT NULL,
    entry TEXT NOT NULL,
    time TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (username, password) VALUES
('user1', 'password1'),
('user2', 'password2'),
('user3', 'password3'),
('user4', 'password4'),
('user5', 'password5');

INSERT INTO entries (user_id, entry) VALUES
(1, 'This is entry 1 for user 1'),
(2, 'This is entry 1 for user 2'),
(3, 'This is entry 1 for user 3'),
(4, 'This is entry 1 for user 4'),
(5, 'This is entry 1 for user 5'),
(1, 'This is entry 2 for user 1'),
(2, 'This is entry 2 for user 2'),
(3, 'This is entry 2 for user 3'),
(4, 'This is entry 2 for user 4'),
(5, 'This is entry 2 for user 5');