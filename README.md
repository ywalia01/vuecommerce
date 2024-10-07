# ECommerce Application built with Node.js, Vue.js, MongoDB, and TailwindCSS

## Features

Vuecommerce is an e-commerce platform developed using Node.js, Express.js, MongoDB, Vue.js, and TailwindCSS. It supports three user roles: Admin, Seller, and User.

- Admins can manage categories (create, update, view, delete), and also have the ability to view and delete users, shops, products, and reviews.
- Sellers can manage their individual shop (create, view, update, delete) and handle their products.
- Users can apply to become sellers, browse available shops and products, manage their user profile, and write or delete reviews.

## Installation Instruction

To get started with this project, clone the repository with the command below:

```bash
git clone https://github.com/ywalia01/vuecommerce
```

Navigate to the backend directory:

```bash
cd backend
```

Install the necessary backend dependencies:

```bash
npm install
```

Run the database using Docker Compose:

```bash
docker-compose up
```

Start the backend server:

```bash
npm run watch
```

Next, switch to the frontend directory and install the dependencies:

```bash
cd frontend
npm install
```

Launch the frontend:

```bash
npm run dev
```

## Working Proof

Home Page

![Home Page](https://github.com/user-attachments/assets/3e4c50e0-acef-4437-b8e5-c7716fe31cb3)

Shop Page

![Shop Page](https://github.com/user-attachments/assets/6d7055be-c0a8-4016-9993-cfff3974e751)

Category Page

![Category Page](https://github.com/user-attachments/assets/12c512bd-a0db-47dc-8f29-10755083aca0)

Product Page

![Product Page](https://github.com/user-attachments/assets/b364508c-4e38-41bb-86c5-11a42a4180e2)

Login Page

![Login Page](https://github.com/user-attachments/assets/8596fc5d-1902-46e6-b2b2-7e10ceb3d584)

Register Page

![Register Page](https://github.com/user-attachments/assets/e7bccf7d-22ca-44a0-9488-ff7dfd80dd62)

User Profile Page

![User Profile Page](https://github.com/user-attachments/assets/72534368-20db-48b1-a711-44d72c9a08c3)

Dashboard Page

![Dashboard Page](https://github.com/user-attachments/assets/a26d1bdd-df03-4531-a27e-ece49e6a7462)

### Admin Sections

Home

![Admin Home Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/admin_home.png?raw=true)

User Management

![Admin User Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/admin_user.png?raw=true)

Shop Management

![Admin Shop Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/admin_shop.png?raw=true)

Product Management

![Admin Product Page](https://github.com/ericnanhu/ecommerce-nodejs/blob/main/screenshots/admin_product.png?raw=true)
