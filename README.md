# JavaScript and DOM Manipulation

## Background ## 
The extra-terrestrial menace has come to Earth and we here at **ALIENS-R-REAL** have collected all of the eye-witness reports we could to prove it! All we need to do now is put this information online for the world to see and then the matter will finally be put to rest.The original collection of data was too large to search through manually. So JavaScript is used to write code that will create a table dynamically based upon the dataset provided, allowing users to filter the table data for specific values. 

## Table of Contents ## 
* [General Information](#general-information)
  * [Level 1](#level-1)
  * [Level 2](#level-2)
* [Technologies](#technologies)
* [Set Up](#set-up)
* [Status](#status)
* [Contact](#contact)

## General Information ## 

#### Level 1 #### 
Level 1 provides a form to filter by date/time. The user will enter a date in the format MM/DD/YYYY, if there is a match the form will display all the rows that match that criteria, otherwise the form will indicate there are no matches for that date. A screenshot of a successful date filtering is displayed below. 

![level1](https://github.com/cveras33/javascript-challenge/blob/main/Images/datetime_filter_match.png)

#### Level 2 #### 
Level 2 provides a form to filter by 5 different criteria: date/time, city, state, country and shapre. The user will enter a date in the format MM/DD/YYYY, city, state as the state's two letter abbreviation, country by its two letter abbreviation, and shape. If there is an exact match for all 5 criteria, the form will display all the rows that match, otherwise the form will indicate there are no matches for those criteria. A screenshot of a successful multi-criteria filtering is displayed below. 

![level2](https://github.com/cveras33/javascript-challenge/blob/main/Images/multi_filter_match.png)

## Technologies ## 
* CSS 
* D3.js
* HTML5
* JavaScript 

## Set Up ##
To run this on your local machine, complete the following steps. 

1. Clone the repository to your local drive by: 
    * Clicking on the green "Code" buttom at the top of the page
    * Copying the `SSH` code 
    * Open your terminal and navigate to the directory you want this repository to live in 
      * i.e. `cd Documents/` 
    * Type `git clone` and paste the `SSH` code you copied from the GitHub website into your terminal and hit enter 
2. Once the repository is on your local machine, you will navigate to the root folder, which in this case is names `javascript-challenge`. 
3. To filter by date, navigate into the `UFO-level-1` folder and double click on the `index.html` document, which will open the webpage in your default browser. 
4. There you will see on the left handside where you can input a date. After entering the date you would like to see UFO sightings for, click the `Filter Table` button, and any results will be displayed. 
5. To filter with multiple inputs, navigate into the `UFO-level-2` folder and double click on the `index.html` document, which will open the webpage in your default browser. 
6. Again,  on the left handside where you can enter user input. Sample input formatting is displayed in each input box. Every box will have to have user input in order to filter the table. After entering the user input you would like to filter UFO sightings for, click the `Filter Table` button, and any results will be displayed. 

#### Status #### 
This project is *complete*.

#### Contact ####
Chloe Veras  
chloemveras@gmail.com  
[LinkedIn](https://www.linkedin.com/in/chloeveras/)
