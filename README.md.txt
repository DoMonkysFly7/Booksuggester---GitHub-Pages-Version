Created by DoMonkysFly7 - Oprea Stefan-A.

Check it out on: https://github.com/DoMonkysFly7/Booksuggester---GitHub-Pages-Version

Description:
This Project was initially created to be submited as part of 'CS50's Web Development with Python and JavaScript' course
requirements. Therefore, you will find on my GitHub a 'duplicate' using the Django Framework as well. However, both
repositories achieve the same outcome. Still, feel free to check both of them out!

Purpose:
This website is meant to suggest one or multiple books to read for the person who has used it. It is not meant to spend
a lot of time on it, but simply: enter, answer the questions, get curious about a new book(s) you may wanna try out that
the website has deemed suitable to you, end of story. 
I created this website because I believed the idea may be interesting, as I have not seen many websites like this before,
if any, and also because sometime I myself struggle to pick a new book to read. 

How to run:
The website works quite simply: 
Upon opening, simply start answering the served question. The questions are in the same order all the time and only 
two pre-written answers are possible. Once all the questions have been answered, the website will present you with one or
two books (one of which comes from some of the Author's personal favourites) which should be, more or less, compatible 
with your tastes and personalities. If you are unsatisfied with the book(s) presented at the end of the questioning process
you may press the 'Restart' button in order to start answering the same questions again, which would result in a different
pool of suggestions, providing you chose at least a different answer OR you could press the 'Another' button, which will
randomly assign another book or set of books from the ones which the website already deems suitable to you. Quite simple 
really. 

How is built:
This website is static, it therefore uses: HTML, SASS converted to CSS, JavaScript and React.js. It also uses APIs from
www.openlibrary.org and covers.openlbirary.org for the information regarding the books. These aforementioned websites, all
their pages, are 'APIs' themselves, meaning they can be requested by anyone in JSON or any other format, no key is required.

As you may have noticed, this website has no user input and no database, as these are not necessary.

Files:
App.js - This is where all the background logic happens: questions,components,possible answers rendering. The logic of 
of making the right API calls by subject or specific work (see openlibrary.org API documentation), the caching and some
of the security features, the edge cases and mcuh more, all is handled here.

styles.css - Converted from SASS, so it may look a bit weird, here is well all the animations and stylization, as the name
suggests, happens.

index.html - The only HTML file of the project, as this is a One Page application, none more were required. All dependencies
are shown there (React, REACT DOM, Babel...). Obviously, here is also the layout of the page.

open-book.png - Icon of the website, found online, no copyright for personal use.

default.png - Logo, created only with random website for such aims. 

