import React from 'react'
import './Facilities.css'

export default function Facilities() {
    const facilityList = [
        {    'id':0,
              'name':"Wifi",
             'img_url':"https://img.icons8.com/color/48/wifi--v1.png"
        },
        
        {    'id':2,
              "name":"Pure Veg Jain Food",
             'img_url':"https://img.icons8.com/color/48/spirulina.png"
        },
        {    'id':3,
             "name":"Hygienic ",
             'img_url':"https://img.icons8.com/color/48/cleaning-service.png"
        },
        {    'id':4,
              "name":"Service Assistance",
             'img_url':"https://img.icons8.com/color/48/rich.png"
        },
        {    'id':5,
              'name':"Wifi",
             'img_url':"https://img.icons8.com/color/48/wifi--v1.png"
        },
        
        {    'id':7,
              "name":"Pure Veg Jain Food",
             'img_url':"https://img.icons8.com/color/48/spirulina.png"
        },
        {    'id':8,
             "name":"Hygienic",
             'img_url':"https://img.icons8.com/color/48/cleaning-service.png"
        },
        {    'id':9,
              "name":"Service Assistance",
             'img_url':"https://img.icons8.com/color/48/rich.png"
        },
        {    'id':10,
              'name':"Wifi",
             'img_url':"https://img.icons8.com/color/48/wifi--v1.png"
        },
        {    'id':21,
"name":"Clean Environment",
'img_url':"https://img.icons8.com/color/48/cleaning-service.png"
},
        {    'id':12,
              "name":"Pure Veg Jain Food",
             'img_url':"https://img.icons8.com/color/48/spirulina.png"
        },
        {    'id':13,
             "name":"Hygienic",
             'img_url':"https://img.icons8.com/color/48/cleaning-service.png"
        },
        {    'id':14,
              "name":"Service Assistance",
             'img_url':"https://img.icons8.com/color/48/rich.png"
        },
        {    'id':15,
        'name':"Wifi",
       'img_url':"https://img.icons8.com/color/48/wifi--v1.png"
  },{    'id':16,
  "name":"Pure Veg Jain Food",
 'img_url':"https://img.icons8.com/color/48/spirulina.png"
},{    'id':13,
"name":"Clean Environment",
'img_url':"https://img.icons8.com/color/48/cleaning-service.png"
}

       ];
  return (
    <>
  <div id="facilities mt-4"></div>
  <div  >
    <br></br>
  <h2 className='alignCentre mt-4'>Available Facilities</h2>
      <div className="slider">
        <div className="slide-track">
            
          {   
              facilityList.map((items,key)=>{
               console.log(items.img_url)
               
               return( 
               <>
                <div className = "  slide">
                 <div className="card_div card p-2">
                    <img className=" col-2 expertImg " src={items.img_url}/>
                   <br></br> <h5 >{items.name}</h5>
               </div> 
            </div>
               </>
               )

              })
          }
     
        </div>
    </div>   

   
    </div>
    </>
  )
}
