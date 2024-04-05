import Logo from './Assets/logo.png';

import gallary_img from './Assets/landing/gallary_img.jpg';
import room_img from './Assets/landing/room_img.jpg';
// import video1 from './Assets/landing/landing_video1.mp4';

import cat1_room1 from './Assets/rooms images/Super Delux (Double Bed AC Room)/1.jpeg'
import cat1_room2 from './Assets/rooms images/Super Delux (Double Bed AC Room)/2.jpeg'
import cat1_room3 from './Assets/rooms images/Super Delux (Double Bed AC Room)/3.jpeg'

import cat2_room1 from './Assets/rooms images/Executive (Triple Bed AC Room)/1.jpeg'
import cat2_room2 from './Assets/rooms images/Executive (Triple Bed AC Room)/2.jpeg'
import cat2_room3 from './Assets/rooms images/Executive (Triple Bed AC Room)/3.jpeg'

import cat3_rooom1 from './Assets/rooms images/Super Executive (Four Bed AC Room)/1.jpeg'
import cat3_rooom2 from './Assets/rooms images/Super Executive (Four Bed AC Room)/2.jpeg'
import cat3_rooom3 from './Assets/rooms images/Super Executive (Four Bed AC Room)/3.jpeg'

// galary
import img1 from './Assets/Galary/1.jpeg';
import img2 from './Assets/Galary/2.jpeg';
import img3 from './Assets/Galary/3.jpeg';
import img4 from './Assets/Galary/4.jpeg';
import img5 from './Assets/Galary/5.jpeg';

import aboutimg1 from './Assets/about/about galary/1.jpeg'
import aboutimg2 from './Assets/about/about galary/2.jpeg'
import aboutimg3 from './Assets/about/about galary/3.jpeg'

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
        "type_of_room":"Super Delux (Double Bed AC Room)",
        "img_url":cat1_room1,
        "images":[cat1_room1,cat1_room2,cat1_room3],
        "tag_line":"Seating Space | AC | WIFI  ",
        "tag_line2":" Food | TV | Staff Services",
        "description": "Relax & unwind in spacious comfort providing you with a more relaxed and spacious environment." ,
        "price":2100
    },
    {
        "type_of_room":"Executive (Triple Bed AC Room)",
        "img_url":cat2_room1,
        "images":[cat2_room1,cat2_room2,cat2_room3],
        "tag_line":"Triple Bed | AC | WIFI  ",
        "tag_line2":"Food | TV | Staff Services",
        "description": "Family Fun Starts Here, it is more comfortable for families travelling together",
        "price":2800
    },
    {
        "type_of_room":"Super Executive (Four Bed AC Room)",
        "img_url":cat3_rooom1,
        "images":[cat3_rooom1,cat3_rooom2,cat3_rooom3],
        "tag_line":"AC | WIFI | Food ",
        "tag_line2":" TV | Staff Services",
        "description": "(Four bed) Relax & unwind in spacious comfort providing you with a more relaxed and spacious environment.",
        "price":3300
    }
   
]

export const LandingpageData ={
    // "video1":video1,
    "room_section_img":room_img,
    "room_section_data1":" We aim to offer a perfect blend of comfort, style, exceptional service, and warm hospitality, to ensure you have a restful and enjoyable stay",
    "room_section_data2":"Every room at Maa Baglamukhi Hotel is meticulously designed to provide you with the  ultimate in relaxation and convenience. Imagine sinking into our plush bedding after a long day of exploring Meghnagar. Enjoy the modern amenities, including flat-screen TVs, high-speed Wi-Fi, and well-appointed bathrooms.",
    "room_section_data3":"Start your day with a delicious breakfast at our restaurant in Meghnagar, featuring both local and international favourites. Savour authentic home-cooked meals at our homestays, or enjoy a romantic dinner and many more.",
    "room_section_data4":"Our friendly staff is always available to assist you with anything you need, ensuring your stay is seamless and memorable.",
    "gallary_section_img":gallary_img,
     "gallary_section_data1": "Looking for the perfect venue to celebrate your next special occasion? Celebrate Unforgettable Events at Maa Baglamukhi Hotel in Meghnagar.",
     "gallary_section_data2":"Our party hall is more than just a space – it's a destination where every event becomes a memory to cherish forever. Whether you're planning a birthday party, retirement party, corporate event, holiday party, engagement party, wedding reception, anniversary, baby shower, or any other gathering, we have everything you need to make it a success with hassle free and budget friendly amenities at our Maa Baglamukhi Hotel.",
     "gallary_section_data3":"Here's why Maa Baglamukhi Hotel in Meghnagar is the ideal choice for your next event"
    }

export const BasicInfo = {
    "logo":Logo,
    "name": "Maa Baglamukhi",
    "address" :"Near Indian Oil Petrol Pump, HDFC Bank, Baglamukhi Mandir Road, Nalkheda , Dist. Agar (Malwa)",
    "phone_no":"+91 95222-38777 | 95222-39777",
    "email":"Maabaglamukhi@gmail.com",
    "tag_line":"Your Ideal Hotel In Nalkheda, Madhya Pradesh."
}

export const NoteData = [
    "1. Booking of the room will be confirmed after payment of at least 50% of the total amount.",
    "2. Check-out time of room is 23 hours that is Check-In Time - 11 am Check-Out Time 10 am ",
    "3. Don’t forget to carry your Identity (Linke Aadhaar card, pan card etc)",
    "4.There are extra charges for extra bed that is 500/-",
    "5. There are extra charges for extra driver bed that is 250/-"
]

export const Aboutus={
    
    "div1_content":"Welcome to Hotel Maa Baglamukhi, your ideal hotel in Nalkheda, Madhya Pradesh. We take pride in being among the best hotels in Nalkheda, offering modern amenities, fine dining, and event planning services.Our strategic location, right in front of the bus station on the highway, ensures a stress-free arrival for guests travelling by road or bus, making us one of the most convenient budget hotels in Nalkheda",
    "div2_content":"Whether you're visiting for business meetings or conferences, our dedicated event planning services are at your disposal, making us one of the best budget hotels in Nalkheda. Dining at our in-house restaurant is a culinary delight, offering local and international cuisine prepared by our culinary experts. We are also conveniently located near the Indian Oil Petrol Pump at Baglamukhi Mandir Road at Nalkheda, making us one of the top hotels near Indian Oil Petrol Pump at Baglamukhi Mandir Road at Nalkheda.",
    "div3_content":" As one of the top hotels in Meghnagar, your satisfaction is our commitment.",
    "div4_content":"Discover the convenience and comfort of Hotel Maa Baglamukhi, one of the best hotels in Meghnagar. We strive to make your stay in Meghnagar memorable and hassle-free.",
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