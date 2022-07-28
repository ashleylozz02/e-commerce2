USE CRUD;


CREATE table products(
id INT AUTO_INCREMENT,
image VARCHAR(800),
title VARCHAR(150),
item_description VARCHAR(100),
price VARCHAR(100),
PRIMARY KEY(id)
);
  
INSERT INTO products (image, title, item_description, price) 
VALUES
("https://cdn.shopify.com/s/files/1/0469/3927/5428/products/bts-2-cool-4-skool-single-album-489082_1200x1200.jpg?v=1627918724","2 Cool 4 Skool","Hip hop group BTS has released its debut single 2 COOL 4 SKOOL. While billed as a single, the album boasts an impressive 27-minute runtime. ","8.99"),
("https://m.media-amazon.com/images/I/71ItteVcwuL._SL1500_.jpg","O!RUL8,2?","With O!RUL8,2? (Oh! Are you late, too?), BTS offers the message that “you must find your happiness and your own life before it’s too late.”","$9.99"),
("https://cdn.shopify.com/s/files/1/2282/8555/products/apple-music-bts-1st-full-length-album-dark-wild-28500667760720_1200x.png?v=1628508471","Dark&Wild","In their first studio album in a year and two months, BTS sings about love gone awry in DARK & WILD. They warn the girl who acts like she doesn't love them not to test their love anymore.","$13.99"),
("https://m.media-amazon.com/images/I/61ZNT3Z27ES._SX355_.jpg","Skool Luv Affair","With their previous two albums, 2 COOL 4 SKOOL and O!RUL8,2?, BTS sang about the dreams and happiness of teens. The songs spoke about young people living without a dream and schools that force rigid and homogenous thought onto its students. The new album, released on February 12, continues to focus on school and teens. ""23.99"),
("https://btsdigest.com/wp-content/uploads/2019/08/most_beautiful_moment_in_life_pt_1_album.jpg","The most Beautiful momemnt in life pt1","BTS has come back with their third mini album, The most beautiful moment in life pt.1.
No longer just young boys, the album is an introduction to BTS as a group that continues to grow and develop. In each track are distilled poetic and pop emotions that allows the listener to sense both the soft and the resounding musical transformation of the group.","$ 10.99"),
("https://m.media-amazon.com/images/I/51fC4hIXGnL._SL1200_.jpg","The most beautful moment pt2","Seven young men on the threshold of their 20s. Now entering their young adulthood, the members of BTS sang in their previous album, The most beautiful moment in life pt.1, about people their age being threatened by uncertainty. ","$10.99"),
("https://m.media-amazon.com/images/I/81HJPZdyXQL._SL1500_.jpg","You never walk alone Album","BTS releases YOU NEVER WALK ALONE!
The epilogue brings closure to WINGS.
“We can laugh if we are together”, a message of comfort and hope to the youth of this generation.","$17.99"),
("https://cdn.shopify.com/s/files/1/0882/5118/products/BTS-Love-Yourself-Her-CD-2300807-2_1024x1024.jpg?v=1517523462","Love yourslef Her","BTS releases LOVE YOURSELF 承 'HER'!
“Loving yourself is the beginning of true love”,
All the different faces of love expressed through the signature music of BTS!","BTS releases third studio album LOVE YOURSELF 轉 ‘TEAR’
Fake love inevitably leads to loss and separation,
For true love can only begin when you learn to love yourself","$24.99"),
("https://m.media-amazon.com/images/I/71+KJNHNX7L._SL1500_.jpg","Love yourself tear","BTS releases third studio album LOVE YOURSELF 轉 ‘TEAR’
Fake love inevitably leads to loss and separation,
For true love can only begin when you learn to love yourself","$24.99"),
("https://m.media-amazon.com/images/I/71Qn8rTKinL._SL1500_.jpg","Map of soul Persona ","BTS signals the beginning of a brand new story with the release of their newest EP MAP OF THE SOUL : PERSONA on April 12.
As global superstars who play stadiums and are loved by countless fans across the world, BTS now looks to shape the future reflecting on and using the power they have gained while embracing all its shadows.","$26.99"),
("https://cdn.shopify.com/s/files/1/2282/8555/products/apple-music-bts-be-deluxe-edition-16775725940816_5000x.jpg?v=1628340714","BE","BTS is returning with their new album BE to unfold another chapter of 2020.
","$34.99"),
("https://images.squarespace-cdn.com/content/v1/5aa2069c25bf02363bf5c7c4/1651713445437-A78OB0A3HT3V7RPHD3KP/proof-standard-7.jpg","BTSs Anthology Album","BTS released the new anthology album Proof on June 10, 11 months after their latest single CD Butter. Proof is the core of BTS’ history. The new three-CD album introduces three new tracks, one in each CD: “Yet To Come (The Most Beautiful Moment)”, “Run BTS” and “For Youth”, each in different genres conveying their own messages.
","$45.99");


Error Code: 1136. Column count doesn't match value count at row 4


SELECT * FROM products