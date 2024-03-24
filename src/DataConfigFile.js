import Logo from './Assets/logo.png';

import gallary_img from './Assets/landing/gallary_img.jpg';
import room_img from './Assets/landing/room_img.jpg';
import video1 from './Assets/landing/landing_video1.mp4';


import ac_delux1 from './Assets/rooms images/ac delux/1.jpg'
import ac_delux2 from './Assets/rooms images/ac delux/2.jpg'
import ac_delux3 from './Assets/rooms images/ac delux/3.jpg'

import ac_family_sofa1 from './Assets/rooms images/ac family sofa/1.jpg'
import ac_family_sofa2 from './Assets/rooms images/ac family sofa/2.jpg'
import ac_family_sofa3 from './Assets/rooms images/ac family sofa/3.jpg'

import conference_room1 from './Assets/rooms images/conference room/1.jpg'
import conference_room2 from './Assets/rooms images/conference room/2.jpg'
import conference_room3 from './Assets/rooms images/conference room/3.jpg'

import executive_ac1 from './Assets/rooms images/executive ac/1.jpg'
import executive_ac2 from './Assets/rooms images/executive ac/2.jpg'
import executive_ac3 from './Assets/rooms images/executive ac/3.jpg'

import executive_sofa1 from './Assets/rooms images/executive sofa/1.jpg'
import executive_sofa2 from './Assets/rooms images/executive sofa/2.jpg'
import executive_sofa3 from './Assets/rooms images/executive sofa/3.jpg'

import party_hall1 from './Assets/rooms images/party hall/1.jpg'
import party_hall2 from './Assets/rooms images/party hall/2.jpg'
import party_hall3 from './Assets/rooms images/party hall/3.jpg'
// galary
import img1 from './Assets/Galary/1.jpg';
import img2 from './Assets/Galary/2.jpg';
import img3 from './Assets/Galary/3.jpg';
import img4 from './Assets/Galary/4.jpg';
import img5 from './Assets/Galary/5.jpg';

import aboutimg1 from './Assets/about/about galary/1.jpg'
import aboutimg2 from './Assets/about/about galary/2.jpg'
import aboutimg3 from './Assets/about/about galary/3.jpg'

//Remember not to edit images and names of rooms 
//You can edit
//1. tag_line
//2. description
//3. price
//4. room_section_data1
//5. room_section_data2
//6. gallary_section_data1
//7. gallary_section_data2
//8. BasicInfo
//9.  Phone no
//10. Address
//11. NoteData
//For change in images go to Assets folder in src folder and change images

export const rooms_data = [
    {
        "type_of_room":"Executive Sofa AC Room",
        "img_url":executive_sofa1,
        "images":[executive_sofa1,executive_sofa2,executive_sofa3],
        "tag_line":"Seating Space | AC | WIFI  ",
        "tag_line2":" Food | TV | Staff Services",
        "description": "Relax & unwind in spacious comfort providing you with a more relaxed and spacious environment." ,
        "price":1750
    },
    {
        "type_of_room":"Family Sofa AC Room",
        "img_url":ac_family_sofa1,
        "images":[ac_family_sofa1,ac_family_sofa2,ac_family_sofa3],
        "tag_line":"Additional Bed | AC | WIFI  ",
        "tag_line2":"Food | TV | Staff Services",
        "description": "Family Fun Starts Here, it is more comfortable for families travelling together",
        "price":1500
    },
    {
        "type_of_room":"Executive AC Room",
        "img_url":executive_ac1,
        "images":[executive_ac1,executive_ac2,executive_ac3],
        "tag_line":"AC | WIFI | Food ",
        "tag_line2":" TV | Staff Services",
        "description": "Relax & unwind in spacious comfort providing you with a more relaxed and spacious environment.",
        "price":1500
    },
    {
        "type_of_room":"Deluxe AC Room",
        "img_url":ac_delux1,
        "images":[ac_delux1 , ac_delux2, ac_delux3, ],
        "tag_line":"Temperature Control | AC | WIFI  ",
        "tag_line2":" Food | TV | Premium Amenities | Staff Services",
        "description": "Cool, comfy & quiet - your perfect stay!",
        "price":950
    },
    {
        "type_of_room":"Conference AC Room",
        "img_url":conference_room1,
        "images":[conference_room1 , conference_room2 , conference_room3],
        "tag_line":"AC | WIFI | Food  ",
        "tag_line2":"  TV | Staff Services",
        "description": "Cool heads & clear thinking for successful events",
        "price":1000
    },
    {
        "type_of_room":"Party hall",
        "img_url":party_hall1,
        "images":[party_hall1 ,party_hall2 , party_hall3],
        "tag_line":" Hall Space | AC | WIFI  ",
        "tag_line2":"  Food | TV | Staff Services",
        "description": "Celebrate Every Occasion at Amar Shanti Hotel",
        "price":10000
    }
   
]

export const LandingpageData ={
    "video1":video1,
    "room_section_img":room_img,
    "room_section_data1":" We aim to offer a perfect blend of comfort, style, exceptional service, and warm hospitality, to ensure you have a restful and enjoyable stay",
    "room_section_data2":"Every room at Amar Shanti Hotel is meticulously designed to provide you with the  ultimate in relaxation and convenience. Imagine sinking into our plush bedding after a long day of exploring Meghnagar. Enjoy the modern amenities, including flat-screen TVs, high-speed Wi-Fi, and well-appointed bathrooms.",
    "room_section_data3":"Start your day with a delicious breakfast at our restaurant in Meghnagar, featuring both local and international favourites. Savour authentic home-cooked meals at our homestays, or enjoy a romantic dinner and many more.",
    "room_section_data4":"Our friendly staff is always available to assist you with anything you need, ensuring your stay is seamless and memorable.",
    "gallary_section_img":gallary_img,
     "gallary_section_data1": "Looking for the perfect venue to celebrate your next special occasion? Celebrate Unforgettable Events at Amar Shanti Hotel in Meghnagar.",
     "gallary_section_data2":"Our party hall at Amar Shanti Hotel is a memorable destination for all events, offering hassle-free and budget-friendly amenities.",
     "gallary_section_data3":"Here's why Amar Shanti Hotel in Meghnagar is the ideal choice for your next event"
    }

export const BasicInfo = {
    "logo":Logo,
    "name": "Maa Bagla Mukhi Hotel",
    "address" :"Above State Bank of India, Aspatal Chouraha, Megh Nagar, Madhya Pradesh 457779",
    "phone_no":"+91 9752450044",
    "email":"Amarshanti@gmail.com",
    "tag_line":"Your Ideal Hotel In Meghnagar, Madhya Pradesh."
}

export const NoteData = [
    "1. Booking of the room will be confirmed after payment of at least 50% of the total amount.",
    "2. Check-out time of room is 24 hours",
    "3. Don’t forget to carry your Identity (Linke Aadhaar card, pan card etc)",
    "4.There are extra charges for extra bed that is 500/-",
    "5. There are extra charges for extra driver bed that is 250/-"
]

export const Aboutus={
    
    "div1_content":"Welcome to Hotel Amar Shanti, your ideal hotel in Meghnagar, Madhya Pradesh. We take pride in being among the best hotels in Meghnagar, offering modern amenities, fine dining, and event planning services.Our strategic location, right in front of the bus station on the highway, ensures a stress-free arrival for guests travelling by road or bus, making us one of the most convenient budget hotels in Meghnagar",
    "div2_content":"Whether you're visiting for business meetings or conferences, our dedicated event planning services are at your disposal, making us one of the best budget hotels in Meghnagar. Dining at our in-house restaurant is a culinary delight, offering local and international cuisine prepared by our culinary experts. We are also conveniently located near the Meghnagar railway station, making us one of the top hotels near Meghnagar railway station.",
    "div3_content":" As one of the top hotels in Meghnagar, your satisfaction is our commitment.",
    "div4_content":"Discover the convenience and comfort of Hotel Amar Shanti, one of the best hotels in Meghnagar. We strive to make your stay in Meghnagar memorable and hassle-free.",
    "img1":aboutimg1,
    "img2":aboutimg2,
    "img3":aboutimg3
}

export const GallaryImages = {
    "img1":img1,
    "img2":img2,
    "img3":img3,
    "img4":img4,
    "img5":img5,
}