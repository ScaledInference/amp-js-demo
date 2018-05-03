var categories = [
  {
  "title": "Google",
  "products": [
    {
    "name": "Google - Chromecast - Black",
    "id": "4397400",
    "description": "Google Chromecast: Enjoy a world of entertainment with Google Chromecast. Just connect to your HDTV's HDMI interface and your home Wi-Fi network to get started. You can stream your favorite apps from your compatible phone, tablet or laptop, plus use your phone as a remote to search, play and pause content.",
    "price": 35
    },
    {
    "name": "Google - Google Home - White/Slate fabric",
    "id": "5578849",
    "description": "Simplify your everyday life with the Google Home, a voice-activated speaker powered by the Google Assistant. Use voice commands to enjoy music, get answers from Google and manage everyday tasks. Google Home is compatible with Android and iOS operating systems, and can control compatible smart devices such as Chromecast or Nest.",
    "price": 129
    },
    {
    "name": "Google - Chromecast Ultra - Black",
    "id": "5578628",
    "description": "Introducing Chromecast Ultra Delivers everything you love about Chromecast plus faster processing speeds and up to 4K Ultra HD & HDR picture quality*. Chromecast Ultra works with iPhone&#174;, iPad&#174;, Android devices, Mac&#174;, Windows&#174;, and Chromebooks.",
    "price": 69.99
    },
    {
    "name": "Google - Chromecast Audio - Black",
    "id": "4532100",
    "description": "Google Chromecast Audio: Stream your favorite music with Google Chromecast Audio. Simply plug into your speaker's auxiliary input and connect to your Wi-Fi network. Then just tap the Cast button from your favorite apps on your phone, tablet or computer to cast songs, radio stations and podcasts to your speaker.",
    "price": 35
    },
    {
    "name": "Google - Pixel 4G LTE with 32GB Memory Cell Phone - Quite Black (Verizon)",
    "id": "5656023",
    "description": "Bring the power of Google directly to your fingertips with the Google Pixel. A large 32GB of storage keep data secure, while unlimited cloud storage transfers data as needed, and it's completely automatic. The large 5-inch screen is protected by Corning Gorilla Glass 4 to ensure the Google Pixel remains scratch-free.",
    "price": 699.99
    },
    {
    "name": "Google - Google Wifi AC1200 Dual-Band Whole Home Wi-Fi System (3-Pack) - White",
    "id": "5706130",
    "description": "Create a reliable internet connection throughout your home with this Google Wi-Fi system. The convenient package of three connectivity points effortlessly covers even large homes up to 4,500 square feet. This Google Wi-Fi system eliminates uneven bandwidth usage among multiple devices, including cellphones and tablets, for an unimpeded connection that doesn't lag behind.",
    "price": 299.99
    },
    {
    "name": "Google - Pixel 4G LTE with 32GB Memory Cell Phone - Very Silver (Verizon)",
    "id": "5656052",
    "description": "Easily collaborate with the Google Pixel. A massive 32GB of memory combines with unlimited cloud backups for photos and videos to ensure you never run out of space, and the 5-inch screen displays it all. Power through workloads with a quad core processor and 4GB of RAM on the Google Pixel.",
    "price": 699.99
    },
    {
    "name": "Google - Pixel XL 4G LTE with 32GB Memory Cell Phone - Quite Black (Verizon)",
    "id": "5656050",
    "description": "Get a phone that moves as fast as you do with the Google Pixel XL. It has a quad-core processor, 4GB of RAM and 32GB of memory to ensure peak performance, and easy cloud storage frees up space automatically. Take photos on the 12.3-megapixel rear camera, and use the LED flash on this Google Pixel XL light up the room.",
    "price": 799.99
    },
    {
    "name": "Google - Daydream View VR Headset - Slate",
    "id": "5667796",
    "description": "Use your Daydream ready phone to experience a whole new reality with this Daydream View VR headset, which features a lightweight headset for comfortable wear. This headset has an intuitive controller for hands-on experience of your VR adventures. Featuring a soft, washable design and an easy-load system, this Daydream View VR headset immerses you in amazing views by turning on your phone.",
    "price": 79
    },
    {
    "name": "Google - Google Wifi AC1200 Dual-Band Wi-Fi Router - White",
    "id": "5706129",
    "description": "Enjoy a consistent connection to the web with this Google Wi-Fi setup. The single access point is ideal for use in smaller homes of less than 1,500 square feet, giving you the ability to connect your tablets, laptops or phones. This Google Wi-Fi system provides a reliable single that can be shared by multiple devices at once.",
    "price": 129.99
    },
    {
    "name": "Google - 3.3' USB Type C-to-USB Device Cable - Gray",
    "id": "5666952",
    "description": "Share data between USB-C enabled devices and USB-A enabled devices with this USB-C to USB-A cable. With 10 Gbps data transfer speeds, this cable easily charges up your tablet or cellphone. This USB-C to USB-A cable is 1 meter in length, making it an ideal option for stowing in a travel bag.",
    "price": 24.99
    },
    {
    "name": "Google - Case for Google Pixel - Gray",
    "id": "5666956",
    "description": "Customize your Google smartphone with this Google Pixel phone case. The form-fitting design hugs your phone for a sleek look, and cutouts near the cameras and ports provide easy access to essential functions. With its polycarbonate construction and microfiber lining, this Google Pixel phone case provides protection against bumps and scrapes.",
    "price": 34.99
    },
    {
    "name": "Google - USB Type-C Power Adapter - Gray",
    "id": "5666950",
    "description": "Charge your Pixel smartphone quickly with this Google USB-C power adapter. This 18W adapter comes with a long detachable cable, so you can move around more easily while charging your device. Its sleek, minimalist design makes this Google USB-C power adapter a stylish addition to your tech setup.",
    "price": 34.99
    },
    {
    "name": "Google - Case for Google Pixel XL - Gray",
    "id": "5666957",
    "description": "Dress up your Google smartphone with this Google Pixel XL phone case. The sleek grey color adds a chic look to your phone, and polycarbonate construction provides an added layer of defense against accidental damage. With its snug fit, this Google Pixel XL phone case stays wrapped securely around your device.",
    "price": 34.99
    },
    {
    "name": "Google - 5.9' USB Type C-to-USB Type C Device Cable - Gray",
    "id": "5666953",
    "description": "Connect compatible devices to each other with this USB-C to USB-C cable. The durable cable delivers 2.0 data transfer speeds for reliable sharing of everything from video to photographs and data files. The 1.8 meter length of this USB-C to USB-C cable makes it easy to wrap up and store in a backpack or suitcase.",
    "price": 24.99
    },
    {
    "name": "Google - Live Case for Google Pixel XL",
    "id": "5666958",
    "description": "Give your Pixel XL an international theme with this Google Live case. Displaying a Google Earth view of exotic Moindou, it can also extend that view as wallpaper on your screen for an end-to-end design. This Google Live case gives your phone optimal protection without adding unwanted bulk or weight.",
    "price": 49.99
    },
    {
    "name": "Google - Daydream View VR Headset - Crimson",
    "id": "5667798",
    "description": "Strap yourself into this bold crimson Daydream View VR headset, and explore virtual lands in stunning detail. Compatible with iPhone, this soft headset features an easy loading system for quick set up. The lightweight design of this Daydream View VR headset makes it comfortable to wear for long-term enjoyment of your VR worlds.",
    "price": 79
    },
    {
    "name": "Google - Daydream View VR Headset - Snow",
    "id": "5667797",
    "description": "Experience thrilling virtual reality with your iPhone and this Daydream View VR headset, featuring a lightweight design that's easy to wear from facepad to strap. The cloth construction means you can wash it with ease, and this Daydream View VR headset comes with an intuitive control that lets you drum, swing and experience hands-on excitement.",
    "price": 79
    },
    {
    "name": "Google - Cardboard Virtual Reality Headset",
    "id": "5707529",
    "description": "See something new with these Google Cardboard goggles. Their custom-designed lenses create an amazing VR experience with your smartphone and any of numerous compatible apps. The durable laminated construction of these Google Cardboard goggles lets them fit most phones with a 4-inch to 6-inch screen size for a long-lasting immersive entertainment option.",
    "price": 15
    },
    {
    "name": "Google - Case for Google Pixel XL - Clear",
    "id": "5666960",
    "description": "Give your Google Pixel XL device protection against damage with this Google Pixel XL phone case. The clear design shows off the original styling of your smartphone, and the polycarbonate construction defends your device against accidental drops and bumps. With its simple setup, this Google Pixel XL phone case is easy to install.",
    "price": 29.99
    }
    ]
  },
  {
  "title": "Amazon",
  "products": [
    {
    "name": "Amazon - Fire TV Stick with Alexa Voice Remote - Black",
    "id": "5477500",
    "description": "Enjoy smart access to videos, games and apps with this Amazon Fire TV stick. Its Alexa voice remote lets you deliver hands-free commands when you want to watch television or engage with other applications. With a quad-core processor, 1GB internal memory and 8GB of storage, this portable Amazon Fire TV stick works fast for buffer-free streaming.",
    "price": 39.99
    },
    {
    "name": "Amazon - Echo Dot",
    "id": "5578851",
    "description": "Deliver your favorite playlist anywhere in your home with the Amazon Echo Dot voice-controlled device. Control most electric devices through voice activation, or schedule a ride with Uber and order a pizza. The Amazon Echo Dot voice-controlled device turns any home into a smart home with the Alexa app on a smartphone or tablet.",
    "price": 49.99
    },
    {
    "name": "Amazon - Echo Dot",
    "id": "5578864",
    "description": "Interact with Alexa anywhere in your home with the Amazon Echo Dot voice-controlled device. The compact size is a perfect fit in any room, and the built-in speaker lets you set an alarm or stream music. The Amazon Echo Dot voice-controlled device plugs into your home stereo speakers or connects wirelessly through Bluetooth.",
    "price": 49.99
    },
    {
    "name": "Amazon - Fire TV (2015 Model) - Black",
    "id": "4370400",
    "description": "Amazon Fire TV (2015 Model): With Amazon Fire TV, you can access thousands of movies and TV shows instantly. Find favorites quickly or access weather and sports updates using the Alexa voice search function. Ultra HD support and a dedicated graphics engine deliver stunning clarity for your favorite entertainment.",
    "price": 89.99
    },
    {
    "name": "Amazon - Fire HD8 - 8\" - Tablet - 16GB - Wi-Fi - Black",
    "id": "5538501",
    "description": "Amazon Fire HD 8 Tablet: With a vivid 8\" touch screen and access to Amazon Underground, this tablet makes it easy to watch movies, play games or catch up on your reading with personalized recommendations. Cloud storage offers simple access to your content from anywhere.",
    "price": 89.99
    },
    {
    "name": "Amazon - Fire - 7\" Tablet - 8GB - Black",
    "id": "4390200",
    "description": "Amazon Fire Tablet: Catch up on your reading or browse the Web with this tablet, which offers access to Amazon Underground, so you can download apps and games and discover exciting new entertainment. Front and rear cameras let you capture memorable moments or chat with friends.",
    "price": 49.99
    },
    {
    "name": "Amazon - Fire 7\" Tablet 16GB - Black",
    "id": "5023200",
    "description": "Amazon Fire 7\" Tablet: Play games, flip through magazines or take photos with this tablet, which offers a vivid 7\" touch screen with a polarizing filter for outdoor reading. Built-in Wi-Fi and Amazon Underground enable fast, simple streaming and downloads.",
    "price": 69.99
    },
    {
    "name": "Amazon - Echo - Black",
    "id": "4747312",
    "description": "Echo connects to the Alexa Voice Service to control smart home devices, play music, provide information, news, sports scores, weather, and more-instantly. All you have to do is ask.",
    "price": 179.99
    },
    {
    "name": "Amazon - Kindle Paperwhite - White",
    "id": "5435104",
    "description": "Keep up with your reading with the Amazon Kindle Paperwhite. A quartet of LEDs lets you read when it's getting dark, or you can use the no-glare screen in bright sunlight for an almost-like-paper reading experience. Low power consumption ensures the battery on this Amazon Kindle Paperwhite lasts for weeks.",
    "price": 119.99
    },
    {
    "name": "Amazon - Kindle - Black",
    "id": "5442403",
    "description": "Indulge your love of reading with the Amazon Kindle. Select from thousands of books, and download them straight to the device without worrying about space or weight, and then read them anywhere, whether in bright sunlight or indoors. The massive battery life in this Amazon Kindle keeps it going for weeks.",
    "price": 79.99
    }
    ]
  }
]