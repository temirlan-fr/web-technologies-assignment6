Assignment 6. jQuery Portfolio

Name: Temirlan Bolat
Group: IT-2504

Part 1. Getting Started with jQuery

Task 0. Setup

Connected jQuery from a CDN. Added a document ready function that prints jQuery is ready! in the browser console.

Task 1. Selectors and CSS

Added my name, headline and introduction to a separate profile section. Used a tag selector for the profile heading, an ID selector to update the greeting and a class selector to style the headline. Used text to change the greeting and css to change the heading size and headline weight. Added Light Theme and Dark Theme buttons.

Part 2. jQuery Effects

Task 2. Visibility Methods

Added an About Me section with a short biography, a current status and facts about my studies and project goals. The Hide, Show and Toggle buttons use jQuery hide, show and toggle methods to control the status and facts. The biography and buttons stay visible.

Task 3. Fade Methods

Prepared a gallery for two local photos. The Fade In, Fade Out and Fade Toggle buttons use fadeIn, fadeOut and fadeToggle to control both images with a duration of 600 milliseconds.

Task 4. Slide Methods

Added three clickable headings about my HTML, CSS and jQuery practice. Each heading opens or closes the panel below it using slideToggle. Open All uses slideDown and Close All uses slideUp. Each animation lasts 400 milliseconds.

Part 3. DOM Manipulation with jQuery

Task 5. Add and Remove Elements

Added an initial list of four technical skills and an input for new skills. Add Skill uses append to add an item to the end. Prepend Skill uses prepend to add an item to the beginning. Remove Skill uses remove to delete the last item. Empty entries and entries containing only spaces are rejected. New skills are inserted as text.

Task 6. Modifying Attributes

Added a GitHub link and a Change Link button. The button uses attr to switch the href between my GitHub profile and the project repository. The link text and the displayed address update with each click.

Task 7. Form Interaction

Added a form with Name and Email inputs. The input event reads each value using val and displays it below the form using text. The preview updates while typing, pasting or deleting text. Form submission is prevented so the page does not reload.

Part 4. Animations

Task 8. Basic Animation

Added three bars for HTML, CSS and JavaScript from the Task 5 skills list. All bars start at zero width. Animate My Skills uses animate to fill them to example levels of 80, 65 and 50 percent over one second. Clicking again animates all bars back to zero. The stop method prevents animations from building up when the button is clicked quickly.

Work process

Created index.html, style.css and script.js. Connected the stylesheet and loaded jQuery before script.js. Added the profile section and theme buttons for Task 1. Added the About Me section and visibility buttons for Task 2. Added a photo gallery and fade effects for Task 3. Added collapsible panels and slide effects for Task 4. Added an editable skills list for Task 5. Added a changing GitHub link for Task 6. Added a form with a live preview for Task 7. Added animated skill bars for Task 8 while keeping the previous tasks visible.
