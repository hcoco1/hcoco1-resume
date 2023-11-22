---
title: "Phase 5 Project: E-Commerce"
description: "Welcome to the E-Commerce  repository! This project is an e-commerce platform built with React for the frontend and flask for the backend"
custom_link_label: "Live App"
custom_link: "https://phase5-app-tyia.onrender.com/"
updatedDate: "Oct 1 2023"
pricing: "Web App"
oldPricing: "https://github.com/hcoco1/e-commerce-2"
badge: "New"
checkoutUrl: "https://youtu.be/9TeuJNePlGw"
heroImage: "https://images.unsplash.com/photo-1556742111-a301076d9d18?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
---

## Phase 5 Project: E-Commerce.



Welcome to the E-Commerce  repository! This project is an e-commerce platform built with React for the frontend and flask for the backend.E-Commerce  is a comprehensive e-commerce platform designed to provide users with a seamless online shopping experience.  The app is fully responsive and can be used on mobile devices as well as desktops.

Features:
* User Authentication: Register, login, and manage user details.
* Product Management: Browse products, view product details, and add products to the cart.
* Order Management: View and manage past orders.
* Shopping Cart: Add, remove, and view products in the shopping cart.



<div align="center">

---

![how this app works](https://github.com/hcoco1/e-commerce-2/blob/main/e-commerce.gif?raw=true) 
 
---


</div>

## Installation instructions:
1. Fork and clone this repository.
2. Open the project directory in your terminal.
3. Install the dependencies using the following commands:
```
    pipenv install
    pipenv shell
    pip install -r requirements.txt && npm install --prefix client 

```

4. Once all of the dependencies have been installed, you can open a terminal and start the app using the following command:

```
    honcho start -f Procfile.dev
```

## How to navigate in E-Commerce:

After launching the app  using the python honcho command, users will be sent to the Home page. From here, you can:

* Sign up for an account,
* Log in to the site & remain logged in,
* Log out,
* View a list of all available products, products details, and add products to the Shopping Cart.
* Modify or delete a quantities of products in the Shopping Cart.
* Modify or delete user details.
* View past orders.
* Proceed to checkout and place orders (create new orders).
  
### **Project Structure**
  ```javascript
├── CONTRIBUTING.md
├── LICENSE.md
├── Pipfile
├── Pipfile.lock
├── Procfile.dev
├── README.md
├── client
│   ├── build
│   ├── node_modules
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   └── src
├── e-commerce.gif
├── requirements.txt
└── server
    ├── __pycache__
    ├── app.py
    ├── config.py
    ├── instance
    ├── migrations
    ├── models.py
    └── seed.py

9 directories, 14 files
  ```

### **Technologies Used**
* Flask/SQLAlchemy API backend with a React frontend.
* Four models on the backend (one many-to-many relationship)
* Full CRUD actions for Users (POST, GET, PATCH, and DELETE)
* Nine client-side routes using React Router, with full CRUD actions for Users.
* Password hashing and authentication
* Validations implemented on frontend and backend
* Forms and validation through Formik & Yup on all input (data type validation and string/number format validation)
* Using axios to connect the backend and frontend
* useContext  to manage global state
* posgresql database with four tables deployed on Render.
* Project fully deployed on Render


Additionally, E-commerce uses four RESTful routing conventions:

| Route   Name    | URL             | HTTP Verb             |
|-----------------|-----------------|-----------------------| 
| UserLogin       | login           | POST                  | 
| UserRegister    | register        | POST                  | 
| UserDetails     | user/:id        | GET, PATCH, DELETE    |


Component NavBar.jsx
```javascript 
function NavigationBar({ onLogout }) {
  const { user, logout } = useContext(UserContext);

  function handleLogout() {
    api.logout()
      .then(() => {
        logout();
        onLogout();
      })
      .catch(err => {
        console.error("Error during logout:", err);
      });
  }

  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
        <ul className="navbar-nav" style={{ flexDirection: 'row', alignItems: 'center', listStyleType: 'none' }}>
          <li className="nav-item" style={{ marginRight: '10px' }}>

            <NavLink
              to="."
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "white",
                };
              }}

            >
              <FaHome /> Home
            </NavLink>
          </li>

          <li className="nav-item" style={{ marginRight: '10px' }}>
            <NavLink
              to="/products"
              style={({ isActive, isPending }) => {
                return {
                  fontWeight: isActive ? "bold" : "",
                  color: isPending ? "red" : "white",
                };
              }}

            >
              <FaIcons /> Products
            </NavLink>
          </li>

          {user && (
            <>
              <li className="nav-item" style={{ marginRight: '10px' }}>
                <NavLink
                  to="/orders"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "white",
                    };
                  }}

                >
                  <FaListOl /> Orders
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/cart"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "white",
                    };
                  }}

                >
                  <FaShoppingCart /> Cart
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/user"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "white",
                    };
                  }}

                >
                  <FaSignOutAlt /> Hi, {user.username}
                </NavLink>
              </li>

              <li className="nav-item">
                <Button $primary onClick={handleLogout}>Sign Out</Button>
              </li>
            </>
          )}

          {!user && (
            <>
              <li className="nav-item" style={{ marginRight: '10px' }}>
                <NavLink
                  to="/login"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "white",
                    };
                  }}

                >
                  <FaSignInAlt /> Sign In
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/register"
                  style={({ isActive, isPending }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isPending ? "red" : "white",
                    };
                  }}

                >
                  <FaSignOutAlt /> Sign Up
                </NavLink>
              </li>
            </>
          )}

        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
```

### Backend Setup

E-Commerce  has a posgresql database with four tables deployed on Render.

```sql
app_tbcl=> \dt
                List of relations
 Schema |      Name       | Type  |     Owner
--------+-----------------+-------+---------------
 public | alembic_version | table | app_tbcl_user
 public | order_products  | table | app_tbcl_user
 public | orders          | table | app_tbcl_user
 public | products        | table | app_tbcl_user
 public | users           | table | app_tbcl_user
(5 rows)

app_tbcl=>



```

 ### Db Diagram:
---

![how this app works](https://github.com/hcoco1/e-commerce-2/blob/main/db_diagram.png?raw=true) 
 
---
* A User can have multiple Orders.
  
* An Order can contain multiple Products, and a Product can be part of multiple Orders. This many-to-many relationship is represented by the order_products_association table.
  
* The Order model also has a method get_product_quantity that can be used to retrieve the quantity of a specific product in the order by querying the association table.

#### **Contributions**
Feel free to fork this project and submit your PRs. Any contributions to enhance the features or improve the tool are welcome!

#### **License**
This project is licensed under the terms of the MIT license. For more details, refer to the LICENSE file.

#### **Future Enhancements**

* Add a search bar to search for products by name.
* Send an email to the user after register and placing  orders.