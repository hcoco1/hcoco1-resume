---
title: "Database Tool"
description: "Database Tool (DT) is a SQLALCHEMY/SQLITE3/CLICK command line interface (CLI) designed to manage US entities."
custom_link_label: "Custom Btn"
custom_link: ""
updatedDate: "Aug 1 2023"
pricing: "Web App"
oldPricing: "https://github.com/hcoco1/phase3_cli_click"
badge: "Popular"
checkoutUrl: "https://youtu.be/UrotTLXdx5c"
heroImage: "https://www.web-alliance.co.uk/blog/admin/blg_img/1663842396_1654089990_AdobeStock_42677898%20(1).jpeg"
---


## Phase 3 Project: Database Tool.


**Database Tool (DT)** is a SQLALCHEMY/SQLITE3/CLICK command line interface (CLI) designed to manage US entities like states, cities, and counties. Users can effortlessly navigate through a color-coded menu, making CRUD (Create, Read, Update, Delete) operations more intuitive than ever. Whether you want to display all entities, add a new city, play a game, or even fetch the latest weather updates.

<div align="center">

---
![how this app works](https://github.com/hcoco1/phase3_cli_click/blob/main/cli_gif.gif?raw=true) 

---

</div>

## Installation instructions:
1. Fork and clone this repository.
2. Open the project directory in your terminal.
3. Install the dependencies using the following commands:
```
    pipenv install
    pipenv shell
    pipenv install ipdb sqlalchemy alembic pyfiglet termcolor faker requests python-dotenv prettytable click

```
4. Once all of the dependencies have been installed, you can open a terminal and start the CLI using the following command:
```
    python -m lib.user
```
If you want to check a step-by-step installation process tutorial of a reduced version of this project, please click on the following link:

 * https://www.hcoco1.com/blog/2023-08-27-aggregate-functions-in-sqlalchemy

## How to navigate in DT:

After launching the tool using the python user.py command, users will be greeted with a color-coded menu. From here, you can:

Manage the database: Create, Read, Update, and Delete entities.

Play CapitalStates game: Test your knowledge of US state capitals by answering a series of questions.

Get the latest weather updates: Fetch the latest weather updates for a city of your choice.

Sub menu: Navigate to a sub menu to perform more specific operations:

Display Entities: Choose the entity you want to display, whether it's states, cities, or counties, and the tool will provide a list of all entities in the database.

Add New Entity: Easily add a new state, city, or county by providing the necessary details.
Update Entity: Modify existing entities by specifying the attribute you wish to change and providing the new value.

Delete Entity: Delete an entity from the database by selecting it and confirming your choice.

Count the number of cities: Get a count of all cities in a given state

Exit: Exit to the main menu



### **Project Structure**
```
.
├── LICENSE
├── Pipfile
├── Pipfile.lock
├── README.md
├── __init__.py
├── alembic.ini
├── cli_gif.gif
├── db_diagram.png
├── geodata.db
├── lib
│   ├── db
│   │   ├── __init__.py
│   │   ├── data.py
│   │   ├── geodata.db
│   │   ├── models.py
│   │   └── seed.py
│   ├── display.py
│   ├── game.py
│   ├── helpers.py
│   ├── others
│   │   ├── __init__.py
│   │   ├── aggregate_methods.py
│   │   ├── associate_methods.py
│   │   └── debug.py
│   ├── start.py
│   ├── test_db.py
│   ├── user.py
│   ├── user_details.txt
│   ├── user_scores.txt
│   └── weather.py
├── migrations
│   ├── README
│   ├── env.py
│   ├── script.py.mako
│   └── versions
│       ├── 006895a8c21a_add_fk_to_classes.py
│       ├── c5fcbfbc59f7_states_and_counties_related.py
│       └── e3fb3d80e214_initial_stage.py
├── requirements.txt
└── video
    └── README.md

6 directories, 35 files
```


### Database schema

The database schema is designed using SQLAlchemy. The Cities table is represented by a model class, with columns such as id (a primary key column that uses an integer type for unique city identification), name (a string column for the city's name), population (an integer column for the number of residents), area (an integer column representing the city's area in square units), latitude and longitude (both float columns for geolocation purposes), and county_name (a string column that provides a relational link to its respective county).

The Counties table has a similar structure, with an id column serving as a primary key, and other columns like name, population, and area defined as string, integer, and float data types respectively.

The Facilities table, on the other hand, is designed to capture details about various establishments. It includes columns such as id (a primary key), name, description (both of which are string columns), and facility_type (a string column that specifies the kind of facility, such as 'hospital' or 'school').

The States table is defined with columns including id (primary key), name, abbreviation (a short form representation of state names, e.g., 'CA' for California, defined as a string column), population (integer), capital (string), and area (float, denoting the geographical expanse of the state).

Lastly, the CityFacilityAssociation table is a classical association table in SQLAlchemy terms, set up to handle a many-to-many relationship between cities and facilities. It doesn't have its own primary key but uses a combination of city_id and facility_id as foreign keys, referencing the id columns of the Cities and Facilities tables respectively. This setup allows for the creation of a bidirectional relationship between the two tables, managed via SQLAlchemy's relationship function in the ORM layer.

Relationships:

**One-to-Many Relationships**:

State and County: One state can have multiple counties. This is established using the state_id foreign key in the County class and the counties relationship in the State class.
State and City: Similarly, one state can have multiple cities. This is established using the state_id foreign key in the City class and the cities relationship in the State class.
County and City: One county can have multiple cities. This is set up using the county_id foreign key in the City class and the cities relationship in the County class.

**Many-to-Many Relationships**:

City and Facilities: A city can have multiple facilities and a facility can be present in multiple cities. The City and Facilities have a many-to-many relationship, which is achieved using the association_table as a secondary table. This table doesn't have its own ORM class representation; instead, it's a  table representation in SQLAlchemy.
The relationship function uses a secondary parameter to specify the association_table, creating the many-to-many linkage.

### Seed Data
The database was populate using the seed.py file. You can run (from the root) the seed.py file using the following commands :

```Python
 python -m lib.db.seed   #To seed: all data
 python -m lib.db.seed seed-states  #To seed: states
 python -m lib.db.seed seed-counties  #To seed: counties
 python -m lib.db.seed seed-cities  #To seed: cities
 python -m lib.db.seed seed-facilities  #To seed: facilities
 python -m lib.db.seed seed-associations  #To seed: associations
```

    ```Python
    @click.group()
    def cli():
        """Manage the database records."""
        pass
    
    @cli.command()
    def seed_states():
        """ Seed states."""
        session.query(State).delete()
        session.commit()
        session.add_all(states_to_add)
        session.commit()
        click.echo("✅ Done seeding states!")
    
    
    @cli.command()
    def seed_counties():
        """ Seed counties."""
        session.query(County).delete()
        session.commit()
        session.add_all(counties_to_add)
        session.commit()
        click.echo("✅ Done seeding counties!")
        
        # more click commands
    ```

 <div align="center">

---
![how this app works](https://github.com/hcoco1/phase3_cli_click/blob/main/db_diagram.png?raw=true) 

---
</div>

##### Figma link: https://www.figma.com/file/cYSYdTecovja4q5QVNooFS/Untitled?type=design&node-id=0%3A1&mode=design&t=nkX47i0uXBQFIvrb-1
##### Dbdiagram.io link: https://dbdiagram.io/d/64dbe90102bd1c4a5ed38fae



```console

CREATE TABLE IF NOT EXISTS "Cities" (
        id INTEGER NOT NULL, 
        name VARCHAR(255), 
        population INTEGER, 
        area INTEGER, 
        latitude FLOAT, 
        longitude FLOAT, 
        county_name VARCHAR(255), 
        PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS "Counties" (
        id INTEGER NOT NULL, 
        name VARCHAR(255), 
        population INTEGER, 
        area FLOAT, 
        PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS "Facilities" (
        id INTEGER NOT NULL, 
        name VARCHAR(255), 
        description VARCHAR(255), 
        facility_type VARCHAR(255), 
        PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS "States" (
        id INTEGER NOT NULL, 
        name VARCHAR(255), 
        abbreviation VARCHAR(255), 
        population INTEGER, 
        capital VARCHAR(255), 
        area FLOAT, 
        PRIMARY KEY (id)
);
CREATE TABLE IF NOT EXISTS "CityFacilityAssociation" (
        city_id INTEGER, 
        facility_id INTEGER, 
        FOREIGN KEY(city_id) REFERENCES "Cities" (id), 
        FOREIGN KEY(facility_id) REFERENCES "Facilities" (id)
);
```


#### **Contributions**
Feel free to fork this project and submit your PRs. Any contributions to enhance the features or improve the tool are welcome!

#### **License**
This project is licensed under the terms of the MIT license. For more details, refer to the LICENSE file.


#### **Challenges**

* **Database Design**: Ensuring the database design was both efficient and scalable proved to be a challenge, especially with the many-to-many relationships between cities and facilities.
* **Error Handling**: Implementing robust error handling to ensure the tool doesn't crash during user interactions required extensive testing and refining.


#### **Future Enhancements**

* Geolocation Integration: Integrating the geolocation service to fetch and update city coordinates was challenging due to rate limits and ensuring accuracy of data. This feature will be implemented in the future.
* Associate methods: The associate methods are not fully implemented yet. The goal is to be able to associate a city with a facility and vice versa. This feature will be implemented in the future.