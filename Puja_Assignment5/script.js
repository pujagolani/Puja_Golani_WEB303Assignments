/*
    Assignment 05
*/

$(document).ready(function () {
   
    class ContentItem{
       uniqueId;
        name;
       description;
       department;
   
   constructor(uniqueId, name, description, department){
           this.uniqueId = uniqueId;
           this.name = name;
           this.description = description;
           this.department = department;
           }
   
   updateContentItem(uniqueId, name, description, department){
           if(this.uniqueId == uniqueId && name && description && department){
               this.uniqueId = uniqueId;
               this.name = name;
               this.description = description;
               this.department = department;
               }
   
           }
           toString(){
           return $('#content-item-list').append(`<div class="content-item-wrapper">
           <div id="content-item-${this.uniqueId}">
           <h2 class="name">${this.name}</h2>
           <p class="description">${this.description}</p>
           <div class="department">${this.department}</div>
           </div>
            </div>`);
               }
       }
       
       let content = [
       {
           "uniqueId": 0,
           "name": "Puja Golani",
           "description": "In general, business owners are responsible for the growth, stability, direction and daily operation of the business.",
           "department": "Owner"
       },
       {
           "uniqueId": 1,
           "name": "Divyesh Radadiya",
           "description": "Chief Executive Officers, or CEOs, are the highest-ranking executive managers of a firm. ",
           "department": "CEO"
       },
       {
           "uniqueId": 2,
           "name": "Tarang Patel",
           "description": "Oversees the activities of other workers. Hires, trains, and evaluates new employees.",
           "department": "Manager"
       },
        {
           "uniqueId": 3,
           "name": "Poonam Patel",
           "description": "A job description is a useful, plain-language tool that explains the tasks, duties, function and responsibilities of a position.",
           "department": "Employee"
       },
       {
           "uniqueId": 4,
           "name": "Tanvi Patel",
           "description": "Prepare rough drafts and present ideas. Develop illustrations, logos and other designs using software or by hand.",
           "department": "Designer"
       }
   
       ];
   
       $.each(content, function(key, val){
         $('#content-item-list').append(`<div class="content-item-wrapper">
           <div id="content-item-${this.uniqueId}">
           <h2 class="name">${this.name}</h2>
           <p class="description">${this.description}</p>
           <div class="department">${this.department}</div>
           </div>
       </div>`);
       });
      
      
        $('.content-item-wrapper').css('width', '50%');
        $('.content-item-wrapper').css('margin', 'auto'); 
        $('.content-item-wrapper').css('margin-bottom', '30px');
        $('.content-item-wrapper').css('marging-top', '30px');
        $('.content-item-wrapper').css('padding', '30px');
        $('.content-item-wrapper').css('border', 'solid 5px #ffbbdd');

        $('.description').css('font-style', 'italic');
        $('.department').css('font-weight', 'bold');
   
   });


