// // create table Items(

//   Item_ID int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//   Item_name VARCHAR(255),
//   Item_create_at DATE NOT NULL DEFAULT CURRENT_DATE,
//   Price VARCHAR(255)

// );


// create table Orders (
//    Order_ID int GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//    Item_ID INTEGER REFERENCES Items(Item_ID),
//    Order_create_at DATE NOT NULL DEFAULT CURRENT_DATE,
//    Order_time_begin VARCHAR(255),
//    Order_time_end VARCHAR(255),
//    Item_quantity INTEGER  CHECK(Item_quantity <= 10),
//    Total_price VARCHAR(255)
// );

