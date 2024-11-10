Velvet and Whisks is a milk-product-based commercial website offering a variety of fresh, quality milk products, from single-can & bottle milk to bulk supplies. Customers can browse our curated selection, add products to their cart, and seamlessly check out using our secure payment system.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Catalog**: Browse single-can/bottle and bulk milk products.
- **User Authentication**: Google OAuth login for secure access.
- **Cart Management**: Add items to the cart, adjust quantities, and view the total.
- **Checkout and Payment**: Secure payment processing through Razorpay.
- **Email Confirmation**: Order details sent to the user’s email after payment.
- **Role-Based Access**: Admin panel for managing products and user permissions.

## Tech Stack

- **Frontend**: React, Figma for design, CSS for styling
- **Backend**: Express, firebase
- **Authentication**: Google OAuth
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer (for sending order confirmations)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/velvet-and-whisks.git
    cd velvet-and-whisks
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   - Create a `.env` file and add:
     ```plaintext
     MONGODB_URI=your_mongodb_uri
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     RAZORPAY_KEY_ID=your_razorpay_key_id
     RAZORPAY_SECRET=your_razorpay_secret
     EMAIL_HOST=your_email_host
     EMAIL_PORT=your_email_port
     EMAIL_USER=your_email_username
     EMAIL_PASS=your_email_password
     ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

5. **Visit** `http://localhost:3000` to view the site.

## Usage

1. **Login**: Use Google OAuth to log in.
2. **Browse Products**: Check out single and bulk milk options.
3. **Cart Management**: Add items, adjust quantities, and proceed to checkout.
4. **Checkout and Payment**: Use Razorpay for secure payment processing.
5. **Email Confirmation**: Receive order confirmation details in your email inbox.

## Project Structure

```
velvet-and-whisks/
├── src/
│   ├── components/        # Reusable components like Navbar, Footer, ProductCard
│   ├── pages/             # Main pages like Home, About, BrowseMenu
│   ├── services/          # Services for handling API calls, authentication, etc.
│   ├── utils/             # Helper functions and constants
│   └── App.js             # Main application component
├── public/                # Public files (e.g., images, icons)
├── .env                   # Environment variables
├── README.md              # Project documentation
└── package.json           # Project metadata and dependencies
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Here's a README file for your Velvet and Whisks website:

---

# Velvet and Whisks

Velvet and Whisks is a milk-product-based commercial website offering a variety of fresh, quality milk products, from single-can & bottle milk to bulk supplies. Customers can browse our curated selection, add products to their cart, and seamlessly check out using our secure payment system.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Product Catalog**: Browse single-can/bottle and bulk milk products.
- **User Authentication**: Google OAuth login for secure access.
- **Cart Management**: Add items to the cart, adjust quantities, and view the total.
- **Checkout and Payment**: Secure payment processing through Razorpay.
- **Email Confirmation**: Order details sent to the user’s email after payment.
- **Role-Based Access**: Admin panel for managing products and user permissions.

## Tech Stack

- **Frontend**: React, Figma for design, CSS for styling
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: Google OAuth
- **Payment Gateway**: Razorpay
- **Email Service**: Nodemailer (for sending order confirmations)

## Installation

1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/velvet-and-whisks.git
    cd velvet-and-whisks
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Set up environment variables**:
   - Create a `.env` file and add:
     ```plaintext
     MONGODB_URI=your_mongodb_uri
     GOOGLE_CLIENT_ID=your_google_client_id
     GOOGLE_CLIENT_SECRET=your_google_client_secret
     RAZORPAY_KEY_ID=your_razorpay_key_id
     RAZORPAY_SECRET=your_razorpay_secret
     EMAIL_HOST=your_email_host
     EMAIL_PORT=your_email_port
     EMAIL_USER=your_email_username
     EMAIL_PASS=your_email_password
     ```

4. **Start the development server**:
    ```bash
    npm run dev
    ```

5. **Visit** `http://localhost:3000` to view the site.

## Usage

1. **Login**: Use Google OAuth to log in.
2. **Browse Products**: Check out single and bulk milk options.
3. **Cart Management**: Add items, adjust quantities, and proceed to checkout.
4. **Checkout and Payment**: Use Razorpay for secure payment processing.
5. **Email Confirmation**: Receive order confirmation details in your email inbox.

## Project Structure

```
velvet-and-whisks/
├── src/
│   ├── components/        # Reusable components like Navbar, Footer, ProductCard
│   ├── pages/             # Main pages like Home, About, BrowseMenu
│   ├── services/          # Services for handling API calls, authentication, etc.
│   ├── utils/             # Helper functions and constants
│   └── App.js             # Main application component
├── public/                # Public files (e.g., images, icons)
├── .env                   # Environment variables
├── README.md              # Project documentation
└── package.json           # Project metadata and dependencies
```

## Contributing

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeature`).
3. Commit your changes (`git commit -m 'Add YourFeature'`).
4. Push to the branch (`git push origin feature/YourFeature`).
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy coding with **Velvet and Whisks**!
