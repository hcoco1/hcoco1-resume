---
title: "Real Estate Site"
description: "Real Estate Site (RES) is a REACT/REACT-BOOTSTRAP/REACT-ROUTER app that accesses data from a web database."
custom_link_label: "Live App"
custom_link: "https://phase2app.onrender.com"
updatedDate: "Jul 1 2023"
pricing: "Web App"
oldPricing: "https://github.com/hcoco1/phase2app"

checkoutUrl: "https://youtu.be/gTGiYxPJ-Dk"
heroImage: "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2023/03/931/506/FLORIDA-REAL-ESTATE-HOME-SALE-GETTY.jpg?ve=1&tl=1"
---


## Phase 2 Project: Real State Site

#### Database link:  https://phase2-db.onrender.com/
#### Database repository link: https://github.com/hcoco1/phase2-dB

### Project Pitch

**Real Estate Site (RES)** is a REACT/REACT-BOOTSTRAP/REACT-ROUTER app that accesses data from a web database. RES returns a collection of real estate properties for sale and rent. Each property has 13 attributes (id, address, city, state, zip code, listing price, bedrooms, bathrooms, square feet, listing date, property type, operation type, and image).

 The App fetches all the data as soon the browser load. Users can navigate between different links thanks to react-router features. Also, users can filter and search properties by price, property type, and operation type.

Additionally, the user can view details about a property by clicking the View button, and immediately they will be sent to a new view where only the selected property is shown. Also, the users can access more images and the delete button in the detail view. Finally, users can add a new property to the database by filling out the form. Also, The user can view some statistic charts in the chart tab.

## Installation instructions:
1. Fork and clone this repository.
2. Open the project directory in your terminal.
3. Install the dependencies using the following command:
```
    npm install <dependency-name> --save

```
Replace <dependency-name> with the name of the dependency you want to install. For example, to install the bootstrap dependency, you would use the following command:
```
    npm install bootstrap --save

```
4. Once all of the dependencies have been installed, you can start the development server using the following command:
```
    npm start

```
The development server will start on port 3000. You can access the app at http://localhost:3000.

Here is a complete list of the commands you need to run:

Clone repository:
```
git clone git@github.com:hcoco1/phase2app.git
```

Open the project directory in your terminal
```
cd phase2app
```

Install the dependencies:
```
npm install bootstrap chart.js mdb-react-ui-kit mdb-ui-kit modern-normalize react-bootstrap react-chartjs-2 react-dom react-hook-form react-icons react-router-dom react-table react-table-plugins react-table-sticky semantic-ui-css semantic-ui-react --save
```
---
Users have to follow these additional steps before start the App:

* Bootstrap : <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" target="_blank">https://getbootstrap.com/docs/5.3/getting-started/introduction/</a>

* Material Design for Bootstrap 5 & React 18: <a href="https://mdbootstrap.com/docs/react/getting-started/installation/" target="_blank">https://mdbootstrap.com/docs/react/getting-started/installation/</a>

* Material Design for Bootstrap 5 & Vanilla JavaScript: <a href="https://mdbootstrap.com/docs/standard/" target="_blank">https://mdbootstrap.com/docs/standard/</a>

* Semantic UI: <a href="https://semantic-ui.com/introduction/getting-started.html" target="_blank">https://semantic-ui.com/introduction/getting-started.html</a>

* Semantic UI React: <a href="https://react.semantic-ui.com/usage" target="_blank">https://react.semantic-ui.com/usage</a>
---

Start the development server:
```
npm start
```

## How to navigate in RES:

 Users can access the app data through four main links in the navigation bar: Home, Properties, Tables, and Charts.

1. Once the page load, the home page shows a few images and some information about real estate.

2. All the data is fetched in the properties tab. The user can scroll down and check the collection of properties. There are two nested tabs in  Properties: List and Add New Property. The List tab is, by default, where all data is displayed. By clicking the view button on a property card, users will be sent to a new view where only the selected property is shown. Also, the users can access more images, and a delete button is in the detail view. The user will be sent to the List tab by clicking the List button. The Add New Property tab is where the user adds new real estate properties in the database.

3. A table is shown in the Table tab. It contains information on seven attributes (id,  city, state, listing price,  square feet,  property type, and operation type). Users can sort the attributes by clicking on the table header. Additionally, users can search for a specific detail by typing in the search text box input located about the table.

4. Two statistics charts are shown in the Charts tab. A bar chart and a line chart show information about how properties prices in Texas state. If the user hovers over the graph, some information will be displayed.

<div align="center">

---

![how this app works](https://github.com/hcoco1/phase2app/blob/main/gif_phase_2.gif?raw=true) 
 
---


</div>


### **Project Structure**

 Real Estate Site runs on a single page and has Eighteen  JSX components.
 

 
 ![how this App works](https://github.com/hcoco1/phase2app/blob/main/phase2_components.png?raw=true) 
 

 
 
 Also, RES uses seven client-side routes (four nested). Users can navigate between routes using the navigation bar and the nested menu.
 
Component App:


```javascript
<Container>
  <Row>
    <Col lg>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='charts' element={<PropertyCharts properties={properties} />}></Route>
        <Route path='search' element={<SearchTable properties={properties} />}></Route>
        <Route path='/properties/' element={<Properties />}>
          <Route path='list' element={<ListProperties properties={properties} onUpdate={handleCurrentProperty} />} />
          <Route path='add' element={<AddProperty onhandleAddProperty={handleAddProperty} setProperties={setProperties} property={currentProperty} />} />
          <Route path=':id' element={<PropertyDisplay properties={properties} property={currentProperty} onhandleDeletedProperty={handleDeletedProperty} />} />
          <Route path='*' element={<NoMatch />} />
        </Route>
      </Routes>
    </Col>
  </Row>
</Container>
```
Component NavigationBar:

```javascript
<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" sticky="top" >
  <Container>
    <Navbar.Brand>
      <Link className="linkNav" to="/">Home</Link>
    </Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <NavLink id="RouterNavLink" className="linkNav" to="properties/list">Properties</NavLink>
        <NavLink id="RouterNavLink" className="linkNav" to="/search">Search</NavLink>
        <NavLink id="RouterNavLink" className="linkNav" to="charts">Charts</NavLink>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
```


Additionally, RES uses three RESTful routing conventions:

| Route   Name    | URL             | HTTP Verb | Description                |
|-----------------|-----------------|-----------|----------------------------|
| ListProperties  | properties/list | GET       | Display all properties     |
| AddProperty     | properties/add  | POST      | Add new property to db     |
| PropertyDisplay | properties/:id  | DELETE    | Delete a specific property |

---
### Backend Setup

**Real Estate Site (RES)**  makes GET, POST, and DELETE requests to the " properties " web database. The POST request is managed for a controlled form using a "react-hook-form" hook.

Database Structure



```markdown
{
  "properties": [
    {
      "id": 1,
      "address": "8 Hermina Center",
      "city": "San Jose",
      "state": "California",
      "zip_code": "95138",
      "listing_price": 278185,
      "bedrooms": 8,
      "bathrooms": 2,
      "square_feet": 6427,
      "listing_date": "6/22/2021",
      "property_type": "Farm",
      "operation_type": "Sale",
      "image": "https://images.unsplash.com/photo-rce=unsplash_source&w=640"
    },
    {
      "id": 2,
      "address": "418 Mitchell Trail",
      "city": "Newport News",
      "state": "Virginia",
      "zip_code": "23612",
      "listing_price": 496205,
      "bedrooms": 8,
      "bathrooms": 1,
      "square_feet": 1553,
      "listing_date": "1/9/2020",
      "property_type": "Farm",
      "operation_type": "Rent",
      "image": "https://images.unsplash.com/photo-159h_source&w=640"
    }
  ]
}
```




 Some of the dependencies of **Real Estate Site** are:

| #  	| Dependencies                               	|
|----	|--------------------------------------------	|
| 1  	|           "bootstrap": "^5.3.0",           	|
| 2  	|           "chart.js": "^4.3.0",            	|
| 3  	|           "mdb-react-ui-kit": "^6.1.0",    	|
| 4  	|           "mdb-ui-kit": "^6.4.0",          	|
| 5  	|           "modern-normalize": "^2.0.0",    	|
| 6  	|           "react-bootstrap": "^2.7.4",     	|
| 7  	|           "react-chartjs-2": "^5.2.0",     	|
| 8  	|           "react-dom": "^18.2.0",          	|
| 9  	|           "react-hook-form": "^7.45.0",    	|
| 10 	|           "react-icons": "^4.9.0",         	|
| 11 	|           "react-router-dom": "^6.13.0",   	|
| 12 	|           "react-table": "^7.8.0",         	|
| 13 	|           "react-table-plugins": "^1.3.4", 	|
| 14 	|           "react-table-sticky": "^1.1.3",  	|
| 15 	|           "semantic-ui-css": "^2.5.0",     	|
| 16 	|           "semantic-ui-react": "^2.1.4",   	|


##### **Challenges**

 1. Write a clean code / Use Folders to organize the components. 

 2. Responsive design.

 3. Update the state of the modal components.