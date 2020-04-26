CREATE DATABASE sample_blog;
USE sample_blog
CREATE TABLE blogs(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title varchar(30) NOT NULL,
    content text NOT NULL,
    created_at datetime NOT NULL,
    updated_at datetime
);
INSERT INTO blogs 
(title, content, created_at)
VALUES 
('今日の出来事', 'hogehoge', now()),
('昨日の出来事', 'fugafuga', now()),
('一昨日の出来事', 'ほげほげフガフガ', now());

SELECT * FROM blogs;

CREATE TABLE tags(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(30) NOT NULL,
    created_at datetime NOT NULL,
    updated_at datetime
);
INSERT INTO tags
(name, created_at)
VALUES
('日記', now()),
('日本語', now());

SELECT * FROM tags;

CREATE TABLE blogs_tags(
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    blog_id int NOT NULL,
    tag_id int NOT NULL
);
INSERT INTO blogs_tags
(blog_id, tag_id)
VALUES
(1, 1),
(2, 1),
(3, 1),
(3, 2);

SELECT blogs.title, blogs.content 
FROM blogs 
INNER JOIN blogs_tags 
ON blogs_tags.tag_id = blogs.id 
WHERE blogs_tags.tag_id = 1;

SELECT blogs.title, blogs.content 
FROM blogs 
INNER JOIN blogs_tags 
ON blogs_tags.tag_id = blogs.id 
WHERE blogs_tags.tag_id = 2;