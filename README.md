Final Project Guideline – Web Design
Class
Project Goal
Build a fully functional, responsive website that demonstrates everything you’ve learned in
this course:
● HTML, CSS, Bootstrap
● Responsive design
● JavaScript DOM manipulation & events
● Forms & form validation
● Asynchronous JavaScript (fetch API / dummy data)
● Basic login session flow
● Accessibility & clean coding practices
Project Requirements & Steps (Total: 30 points)
1. Structure with HTML (4 pts)
● Create at least 3–4 pages (e.g., Home, About, Contact, Dashboard/Login).
● Use semantic HTML tags (<header>, <nav>, <section>, <footer>).
● Include images, text, lists, tables, and links.
● Use a navigation bar for page switching.
● Add Font Awesome icons in relevant places (navigation, buttons, social links).
2. Styling with CSS (4 pts)
● Apply external CSS file.
● Use classes & IDs properly.
● Demonstrate selectors, hover effects, transitions, animations.
● Use a color palette & typography consistently.
● Add at least 1 CSS animation or keyframe effect (e.g., fade-in, bounce, slide).
3. Bootstrap Components (3 pts)
● Use at least 2 Bootstrap components (Navbar, Carousel, Modal, Cards, Grid System).
● Show understanding of Bootstrap grid system for layout.
4. Responsive Design (3 pts)

● Website must work well on desktop, tablet, and mobile.
● Use media queries or Bootstrap responsiveness.
● Test on different screen sizes.
5. Forms & Validation (4 pts)
● Create a registration or contact form (with name, email, password, etc.).
● Use form validation (required fields, email format, password rules).
● Show real-time error messages using JavaScript DOM.
6. JavaScript DOM & Events (4 pts)
● Add at least 3 interactive features (e.g., dark mode toggle, dropdown menu, image
slider, show/hide sections).
● Use event listeners (onclick, onchange, etc.).
● Update DOM dynamically (e.g., adding/removing elements).
7. Asynchronous JavaScript (Fetch API) (3 pts)
● Fetch data from a public API or use a local JSON file.
● Display the fetched data on the page (e.g., user profiles, posts, weather info).
● Show loading/error states.
8. Login Session Flow (3 pts)
● Create a login form (username/password).
● On successful login, show a "Welcome, [username]" message and redirect to a
protected page (like Dashboard).
● Store login info temporarily using localStorage/sessionStorage.
● Logout button clears session.
9. Accessibility & Usability (1.5 pts)
● Use alt text for images.
● Ensure proper contrast ratios (readable text).
● Website should be keyboard accessible (tab navigation).
10. Code Quality & Smoothness (1.5 pts)
● Organize files clearly (HTML, CSS, JS in separate folders).
● Write clean, commented code.
● Avoid unnecessary repetition.
● Website should load smoothly without broken links/images.

Deliverables
● A live project link (GitHub Pages / Netlify / Vercel).
● A GitHub repository with source code.
● A README file explaining:
○ Project description
○ Features included
○ How to run the project

Project Idea
1. Mini E-Commerce Website (Single or Multi-page)
This project idea is about creating a small online shopping website that simulates how a real
e-commerce store works. You don’t need to build a full marketplace like Amazon, but rather a
simple version that demonstrates the core features of an online shop.
Key Features to Include:
● Home Page (Product Showcase)
○ Display a list of products in a clean layout (cards or grid using Bootstrap).
Each product card should have an image, name, short description, price, and an
“Add to Cart” button.
○ Example: Think of a clothing shop homepage where you see several items with
their prices and an option to add them to your cart.

● Product Details Page (or Modal Popup)
○ When the user clicks on a product, they should be able to see more details about
it.
○ This can be a separate product details page or a modal popup that shows a
bigger picture, description, and price.
○ Example: Clicking on “Nike Shoes” opens a modal with a larger photo,
description, and “Add to Cart” button.

● Shopping Cart System
○ Users should be able to add products to their cart.
○ The cart should update dynamically (show item name, price, quantity, and total).
○ Users should also be able to remove items or adjust quantities.
○ Example: When a user clicks “Add to Cart,” a small cart icon in the navbar
updates to show how many items are inside.

● Login & Registration Flow
○ Create a login and sign-up page (or modal).
○ Use sessionStorage or localStorage to temporarily store login info.
○ Once logged in, display a welcome message (e.g., “Welcome, Sarah!”).
○ Example: A user registers with their email and password → the site remembers
them until they log out.

● Checkout Form with Validation
○ At checkout, create a form where the user enters their name, email, address, and
payment details (no real payment system, just a simulated form).
○ Add form validation so users can’t submit unless everything is filled correctly
(valid email format, password rules, etc.).
○ Example: If someone types “abc” in the email field, show an error message like
“Please enter a valid email.”

● Fetch Product Data from an API or JSON File
○ Instead of hardcoding all products, use a dummy API (like Fake Store API) or
create a local products.json file.
○ Fetch the data with JavaScript and display the products dynamically.
○ Example: The site automatically loads product info from the JSON file instead of
you writing out every product card in HTML.

● Responsive & Accessible Design
○ Navbar should adapt for mobile devices (hamburger menu).
○ All pages should look good on desktop, tablet, and phone.
○ Add alt text to images, good color contrast, and keyboard accessibility.
○ Example: On a phone, products should appear in a single column instead of
three per row.
● Animations & Interactivity
○ Use hover effects for product cards.
○ Add animations when products are added to the cart (e.g., product image “flies”
into the cart).
○ Example: When hovering over a product, the card could slightly enlarge with a
shadow effect.

Single-Page vs Multi-Page Option:
● Multi-Page Website
○ Separate pages for:
■ Home (products)
■ Product Details
■ Cart
■ Checkout
■ Login/Register
○ Navigation links move between different HTML files.
● Single-Page Website (SPA)
○ Everything is on one page, but content updates dynamically using JavaScript and
modals.
○ Example: Clicking on “Cart” slides open a drawer on the side instead of taking
you to a new page.
