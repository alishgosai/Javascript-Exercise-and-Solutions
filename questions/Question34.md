<style>
  body {
    color: #e0e0e0; /* Light text color for readability */
    background-color: #1e1e1e; /* Softer dark background color */
    font-family: Arial, sans-serif; /* Consistent font */
  }

  h2, h3 {
    color: #f5f5f5; /* Light color for headings */
    font-family: Arial, sans-serif; /* Ensures same font family */
  }

  a {
    color: #66b2ff; /* Softer bright link color */
    text-decoration: none; /* Remove underline from links */
  }

  a {
    color: #66b2ff; /* Softer bright link color */
    text-decoration: none; /* Remove underline from links */
    position: relative; /* Position relative for pseudo-element */
    display: inline-block; /* Ensure the element is inline-block for pseudo-element positioning */
  }

  a::after {
    content: ''; /* Empty content for the pseudo-element */
    position: absolute; /* Absolute positioning to place it relative to the link */
    left: 50%; /* Start from the center */
    bottom: 0; /* Position at the bottom of the link */
    width: 0; /* Start with no width */
    height: 2px; /* Height of the underline */
    background-color: #66b2ff; /* Color of the underline */
    transition: width 0.3s ease, left 0.3s ease; /* Smooth transition for width and position */
  }

  a:hover::after {
    left: 0; /* Extend from the left */
    width: 100%; /* Full width of the link */
  }

  img {
    max-width: 100%; /* Responsive images */
    transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth transition for hover effects */
  }

  img:hover {
    transform: scale(1.1); /* Zoom effect on hover */
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4); /* Shadow effect on hover */
  }

  .center {
    gap: 5px;
    display: flex; /* Use flexbox for alignment */
    justify-content: left; /* Center content horizontally */
    align-items: left; /* Center content vertically */
    flex-direction: row; /* Stack items vertically */
  }

  .left-align {
    text-align: left; /* Align text to the left */
    width: 100%; /* Full width to align text within its container */
  }

  .margin-top {
    margin-top: 10px; /* Top margin for spacing */
  }

  hr {
    border: 0;
    border-top: 1px solid #333; /* Subtle line for separation */
    margin: 20px 0; /* Spacing around the line */
  }
</style>

## Question ${index}
<div class="center margin-top">
<a href="${repoLink}/blob/master/${questionsDir}/Question${index}.md" target="_blank" style="display: block; text-align: center; margin-bottom: 20px;">
  <img src="https://img.shields.io/badge/Question-${index}-purple?style=for-the-badge&logoSize=60" alt="Question ${index}" style="display: inline-block;">
</a>
</div>

### **Description**
More questions Comming Soon
Contributors to provide a clear and concise description of the task for **Question ${index}**.

### **Hint**
![Hint](https://img.shields.io/badge/Hint:-blue)  
Provide useful hints or tips for solving **Question ${index}**.

### **Expected Output**
![Output](https://img.shields.io/badge/Output:-blue)  
Describe the expected result or output of **Question ${index}**.

<div class="center margin-top">
  <a href="${repoLink}/blob/master/${solutionsDir}/Solution" target="_blank">
    <img src="https://img.shields.io/badge/Solution-1f8e00?style=for-the-badge&logo=solution&logoColor=white" alt="Solution">
  </a>
  <br>
  <a href="${repoLink}/blob/master/${solutionsDir}/Solution${index}.js" target="_blank">View Solution</a>
</div>

<hr>
