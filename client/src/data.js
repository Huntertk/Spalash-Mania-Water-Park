import { v4 as uuidv4 } from 'uuid';



export const cardData = [
    {
        _id: uuidv4(),
        title: "Ramadan Special Promo!",
        desc: "Grab your tickets with special offer now for this Ramadan!",
        type: "bookTypeTwo",
        image: [
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710152417/Malaysia%20Experience/Splash%20Mania/2_a8g8zn.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710152417/Malaysia%20Experience/Splash%20Mania/1_grrkdx.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710152419/Malaysia%20Experience/Splash%20Mania/4_m1bauo.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710152422/Malaysia%20Experience/Splash%20Mania/3_ssdu3a.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710152427/Malaysia%20Experience/Splash%20Mania/2_nbovnn.jpg",
        ]
    },
    {
        _id: uuidv4(),
        image:[
            "https://i.postimg.cc/htdDCsFR/splashmania-newtagline-2022-2.png",
            "https://i.postimg.cc/6688YC4Y/FB-IMG-1672326767007.jpg",
            "https://i.postimg.cc/v8CcjDWM/FB-IMG-1672326769274.jpg",
            "https://i.postimg.cc/hPxfqgrm/FB-IMG-1672326773605.jpg",
            "https://i.postimg.cc/fRfyJK1T/FB-IMG-1672326776017.jpg",
            "https://i.postimg.cc/3ww8WHgn/FB-IMG-1675571092838.jpg",
            "https://i.postimg.cc/jqnjzKB1/FB-IMG-1675571096648.jpg"
        ],
        title:"Tickets to SplashMania Waterpark at Gamuda Cove Selangor",
        desc:"Experience the ultimate thrills with your loved ones on 39 exciting water slides and rides at SplashMania waterpark.",
        type:"bookTypeOne",
        price: 113,

    },
    
]






export const cardHighLightsDetails = [
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1710172492/Malaysia%20Experience/Splash%20Mania/WhatsApp_Image_2023-12-05_at_09.31.13_fcuvlf.jpg",
        title:"Twista",
        desc:"Indulge in excitement as you navigate a high-speed slide, spiraling through a bowl before the exhilarating release."
    },
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1710172492/Malaysia%20Experience/Splash%20Mania/WhatsApp_Image_2023-12-05_at_09.31.31_ihv9uc.jpg",
        title:"Monsta",
        desc:"Embark on an exhilarating adventure as you zoom down a high-speed slide, spinning within a bowl before the thrilling release."
    },  
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1710172494/Malaysia%20Experience/Splash%20Mania/WhatsApp_Image_2023-12-05_at_09.32.16_z5zder.jpg",
        title:"Maniac Racers",
        desc:"Compete against your friends on this multi-flume slide that enables you to race and drift while keeping an eye on your companions."
    },  
    {
        id: uuidv4(),
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1710172497/Malaysia%20Experience/Splash%20Mania/WhatsApp_Image_2023-12-05_at_09.32.32_swjxwr.jpg",
        title:"Wild Rush",
        desc:"A timeless, iconic water slides featuring exhilarating twists and 360-degree loops."
    },  
    {
        id: uuidv4(),
        image:"https://res.cloudinary.com/drrkaak40/image/upload/v1710172496/Malaysia%20Experience/Splash%20Mania/WhatsApp_Image_2023-12-05_at_09.31.44_pyeu2e.jpg",
        title:"Sumaumeira Drop",
        desc:"Feel the adrenaline rush with a sudden descent from the summit, plunging into curving high-speed body slides."
    },    
]



export const thingsTodo = [
    {
        id: uuidv4(),
        desc:" Embark on an adventure and experience the excitement of 29 pulse-pounding water slides and 15 additional attractions, including the Lazy River, Family Raft Ride, Master Blaster Splash Pad, and many more.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1710172494/Malaysia%20Experience/Splash%20Mania/gallery-desktop-7_jn1cym.png"
    },
    {
        id: uuidv4(),
        desc:"Indulge in exhilarating moments with your loved ones as you explore 39 thrilling water slides and rides at Splash Mania waterpark.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1710172486/Malaysia%20Experience/Splash%20Mania/FB_IMG_1675571108280_z7dacg.jpg"
    },
    {
        id: uuidv4(),
        desc:"Immerse yourself in the enclosed Shaka Waka tube slide, where you can encounter breathtaking lighting and audio effects for a truly spectacular experience.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1710172492/Malaysia%20Experience/Splash%20Mania/SplashManiaWaterparkTicketinGamudaCoveSelangor-KlookMalaysia_xenhpd.jpg"
    },
    {
        id: uuidv4(),
        desc:" Embark on the ultimate aquatic escapade while tackling the massive waves of the wave pool.",
        image: "https://res.cloudinary.com/drrkaak40/image/upload/v1710172484/Malaysia%20Experience/Splash%20Mania/FB_IMG_1672326776017_gxupn5.jpg"
    },
]


export const addQues = [
    {
        id: uuidv4(),
        ques:"Operating Hours ?",
        ans:[
            "Thursday - Tuesday : 10am - 6pm", 
            "(Closed on Wednesday EXCEPT during Malaysia public holidays and school holidays)",
            "Ramadan Promo Operation Hours (12 March to 9 April 2024)"
        ]
    },
    {
        id: uuidv4(),
        ques:"Ramadan Promo Operation Hours ?",
        ans:[
            "(12 March to 9 April 2024)",
            "9am - 5pm everyday",
            "Closed on Tuesday & Wednesday"
        ]
    },
    {
        id: uuidv4(),
        ques:"Child Policy",
        ans:[
            "Adult: Height 110cm above.",
            "Child height 90cm to 110cm",
            "Senior Citizen age 60 and above."
        ]
    },
    {
        id: uuidv4(),
        ques:"Refund/Cancellation Policy",
        ans:[
            "No cancellation and refund are allowed once purchased"
        ]
    },
    {
        id: uuidv4(),
        ques:"Redemption Guide",
        ans:["Upon arrival, show your ticket/e-voucher at the counter"]
    },
]



export const homeFAQ = [
    {
        id: uuidv4(),
        ques:"When does Splash Mania close ?",
        ans:"Splash Mania Waterpark is close every Wednesday except Public Holiday and School Holiday."
    },
    {
        id: uuidv4(),
        ques:"How long should I plan for Splash Mania?",
        ans:"You can enjoy all rides unlimitedly within the time frame 10am to 6pm."
    },
    {
        id: uuidv4(),
        ques:"Can I bring mineral water on my own?",
        ans:"No. Outside food and water not allowed."
    },
    {
        id: uuidv4(),
        ques:"Does my ticket includes Locker and Tubes?",
        ans:"No, its not included, but there are stations everywhere inside the park where guest may rent the items needed."
    },
    {
        id: uuidv4(),
        ques:"What are the games includes in my tickets",
        ans:"All games in the park except pay-per-rides like SurfMania, Zoomi's Runaway and Sky Leap."
    },
    {
        id: uuidv4(),
        ques:"If my child is more than 120cm, can i buy Child Ticket ?",
        ans:"No Child above 120cm will be considered as adult."
    },
]


export const helpCenterBookingFAQ = [
    {
        id: uuidv4(),
        ques:"How do I make a booking on Malaysia Experience?",
        ans:"Making a booking is easy! Simply browse through our experiences, select the one you love, choose your preferred date and time, and follow the easy booking steps. Your adventure in Malaysia is just a few clicks away!"
    },
    {
        id: uuidv4(),
        ques:"Is it safe to book through Malaysia Experience?",
        ans:"Absolutely! We prioritize your safety and security. Our booking platform uses industry-standard encryption to safeguard your personal information, ensuring a worry-free booking experience"
    },
    {
        id: uuidv4(),
        ques:"Can I book for a group?",
        ans:"Of course! We welcome group bookings. When selecting an experience, you can specify the number of participants, and our system will guide you through the process to ensure everyone has a fantastic time."
    },
]

export const helpCenterCancellationFAQ = [
    {
        id: uuidv4(),
        ques:"What is the cancellation policy?",
        ans:"We understand plans can change. Our cancellation policy varies depending on the experience and the timing of your cancellation. You can find specific details on the experience page during the booking process."
    },
    {
        id: uuidv4(),
        ques:"How do I cancel or request a refund?",
        ans:"If you need to cancel, log in to your Malaysia Experience account, go to your bookings, and follow the cancellation instructions. Refund eligibility depends on the cancellation policy of the specific experience. We're here to help, so feel free to reach out to our customer support for assistance."
    },
    {
        id: uuidv4(),
        ques:"What happens if the experience is canceled by Malaysia Experience?",
        ans:"In the rare event that we have to cancel an experience, you will be notified promptly, and a full refund will be processed. Your satisfaction and safety are our top priorities."
    },
]










[
    {
        title: "Ramadan Special Promo!",
        desc: "Experience the ultimate thrills with your loved ones on 39 exciting water slides and rides at SplashMania waterpark.",
        type: "bookTypeTwo",
        image: [
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710152417/Malaysia%20Experience/Splash%20Mania/2_a8g8zn.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710152417/Malaysia%20Experience/Splash%20Mania/1_grrkdx.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710152419/Malaysia%20Experience/Splash%20Mania/4_m1bauo.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710152422/Malaysia%20Experience/Splash%20Mania/3_ssdu3a.jpg",
            "https://res.cloudinary.com/drrkaak40/image/upload/v1710152427/Malaysia%20Experience/Splash%20Mania/2_nbovnn.jpg",
        ]
    }
]
