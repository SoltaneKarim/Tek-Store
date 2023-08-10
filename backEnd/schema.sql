CREATE DATABASE IF NOT EXISTS tekstore;

USE tekstore;

CREATE TABLE IF NOT EXISTS product (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(255) NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    description TEXT NOT NULL,
     category ENUM('computers', 'phones', 'electronics') NOT NULL DEFAULT 'electronics',
    imageUrl TEXT NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO product (name, price, description, category, imageUrl)
VALUES
    ('MacBook Pro', 1999.00, 'The MacBook Pro is a high-end laptop designed for professionals who need a powerful computer for video editing, graphic design, and other demanding tasks.', 'computers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfVsv9PuVFEe0bhgG4SB6Oi7oqR1pRlUHOoQ&usqp=CAU'),
    ('iPhone 13', 799.00, 'The iPhone 13 is the latest smartphone from Apple with a high-quality camera, long battery life, and a fast processor.', 'phones', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEeGm32C8hfCRf47-7RVjnvDlUoHjMGybWwA&usqp=CAU'),
    ('Samsung QLED TV', 1499.00, 'The Samsung QLED TV is a 4K TV with a stunning display, high-quality sound, and smart features.', 'electronics', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs5l6VLwLJZDSSdZYIRtP70NdqtdiPxs_nvw&usqp=CAU'),
    ('Dell Inspiron', 899.00, 'The Dell Inspiron is a mid-range laptop with a solid build quality, decent performance, and good battery life.', 'computers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkwG2oYnBheM0RtY_iINSNJK5O8GicEKT1AQ&usqp=CAU'),
    ('Google Pixel 6', 699.00, 'The Google Pixel 6 is the latest smartphone from Google with a powerful camera, long battery life, and a beautiful design.', 'phones', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrfVK9_xK-hLyYbivEeLI1O5K9glRdJyRkqA&usqp=CAU'),
    ('Samsung Galaxy Book Pro', 1299.00, 'The Samsung Galaxy Book Pro is a high-end laptop with a thin and light design, long battery life, and fast performance.', 'computers', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjSp4rcmnYfYeWhGY8UWxsRLf7nMs2pcofNA&usqp=CAU');
