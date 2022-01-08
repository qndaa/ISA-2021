insert into users (id, username, deleted, first_name, last_name, email, password, type_of_user, phone_number, address,
                   city, country)
values ('623a2230-17fa-4fa6-b96f-291803e84f0b', 'marko123', false, 'Marko', 'Markovic', 'marko@gmail.com',
        '$2a$12$fB5RqVpYN/WUl3saxHn49Ouckh20MVcdy5Br50OchE6yr0ijgGWse', 0, '+381-64-123-11-11', 'Bulevar 3', 'Novi Sad',
        'Srbija');

insert into administrators(id)
values ('623a2230-17fa-4fa6-b96f-291803e84f0b');

insert into roles (id, deleted, name)
values ('380b2cf1-7f15-4694-8fb7-9a3246a10691', false, 'ROLE_ADMINISTRATOR'),
       ('cf782a9b-9d3b-47d2-8cad-0b5bf38de251', false, 'ROLE_CLIENT'),
       ('32c57dc2-6d99-11ec-90d6-0242ac120003', false, 'ROLE_HOUSE_OWNER'),
       ('37d9b6b6-6d99-11ec-90d6-0242ac120003', false, 'ROLE_BOAT_OWNER'),
       ('3e1f5ac6-6d99-11ec-90d6-0242ac120003', false, 'ROLE_INSTRUCTOR');


insert into users_roles(user_id, role_id)
values ('623a2230-17fa-4fa6-b96f-291803e84f0b', '380b2cf1-7f15-4694-8fb7-9a3246a10691');

insert into countries (id, deleted, name)
values ('5dd5ee5f-15d7-4480-8291-dd5ced667a94', false, 'Serbia'),
       ('a570e1bc-768d-4cfd-889e-8c95527f43f7', false, 'Bosnia and Herzegovina');


insert into reservation_entity(id, deleted, title, description, average_mark, address, type)
values ('43eeb758-2031-41c2-a85b-e3268b47dd9f', false, 'Brod kod Palme', 'Dodji da se provedes!', 10.0, 'Bogu iza nogu!', 0);
