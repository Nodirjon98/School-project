import { DialogueSituation } from '../types';

export const REAL_LIFE_DIALOGUES: DialogueSituation[] = [
  {
    id: 'dia-airport-customs',
    title: 'Xalqaro Aeroport va Bojxona Nazorati',
    category: 'travel',
    level: 'B1',
    iconName: 'Plane',
    coverImage: 'https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&w=800&q=80',
    scenarioUz: 'London Xitrou aeroportiga qo\'nib, chegara nazorati (Border Control) xodimi bilan muloqot qilasiz. Safar maqsadi, yashash manzili va qaytish chiptasi haqida so\'raladi.',
    learningGoalsUz: [
      'Sayohat maqsadini aniq va ravon tushuntirish',
      'Yashash joyi va moliya haqidagi rasmiy savollarga javob berish',
      'Rasmiy aeroport terminologiyasini qo\'llash'
    ],
    roles: [
      {
        id: 'officer',
        name: 'Immigration Officer',
        descriptionUz: 'Britaniya chegara xizmati inspektori. Rasmiy va jiddiy ohangda savol beradi.',
        avatar: '👮‍♂️',
        isUserEligible: false
      },
      {
        id: 'traveler',
        name: 'You (Traveler)',
        descriptionUz: 'Buyuk Britaniyaga qisqa muddatli ta\'lim va sayohat uchun kelgan mehmon.',
        avatar: '🧳',
        isUserEligible: true
      }
    ],
    lines: [
      {
        id: 'd1-1',
        roleId: 'officer',
        speakerName: 'Immigration Officer',
        text: 'Good morning. May I see your passport and landing card, please?',
        translationUz: 'Xayrli tong. Pasportingiz va kirish kartochkangizni ko\'rsatsangiz, iltimos?',
        phoneticTipUz: '«May I see» iborasini xushmuomala rasmiy so\'rov ohangida ayting.'
      },
      {
        id: 'd1-2',
        roleId: 'traveler',
        speakerName: 'You (Traveler)',
        text: 'Good morning, Officer. Here they are.',
        translationUz: 'Xayrli tong, ofitser janoblari. Mana marhamat.',
        phoneticTipUz: '«Here they are» [hɪər ðeɪ ɑːr] — intonatsiya ohista pastga tushadi.'
      },
      {
        id: 'd1-3',
        roleId: 'officer',
        speakerName: 'Immigration Officer',
        text: 'Thank you. What is the primary purpose of your visit to the United Kingdom?',
        translationUz: 'Rahmat. Buyuk Britaniyaga tashrifingizning asosiy maqsadi nima?',
        phoneticTipUz: '«primary purpose» [ˈpraɪməri ˈpɜːpəs] so\'zlariga urg\'u bering.'
      },
      {
        id: 'd1-4',
        roleId: 'traveler',
        speakerName: 'You (Traveler)',
        text: 'I am here for tourism and to attend a two-week intensive English summer school in Cambridge.',
        translationUz: 'Men sayohat qilish hamda Kembrijdagi ikki haftalik intensiv ingliz tili yozgi maktabida qatnashish uchun keldim.',
        phoneticTipUz: '«two-week intensive English» iborasida pauza qiling.'
      },
      {
        id: 'd1-5',
        roleId: 'officer',
        speakerName: 'Immigration Officer',
        text: 'Where will you be staying during your stay, and do you have a return ticket?',
        translationUz: 'Siz bu yerda qayerda turasiz va qaytish chiptangiz bormi?',
        phoneticTipUz: 'Savoldagi «staying» va «return ticket» so\'zlariga diqqat qiling.'
      },
      {
        id: 'd1-6',
        roleId: 'traveler',
        speakerName: 'You (Traveler)',
        text: 'Yes, I have booked a campus dormitory, and here is my confirmed return ticket to Tashkent for July 25th.',
        translationUz: 'Ha, men kampus yotoqxonasini band qilganman va mana 25-iyulga Toshkentga tasdiqlangan qaytish chiptam.',
        phoneticTipUz: '«confirmed return ticket» — [kənˈfɜːmd rɪˈtɜːn ˈtɪkɪt].'
      },
      {
        id: 'd1-7',
        roleId: 'officer',
        speakerName: 'Immigration Officer',
        text: 'Everything seems to be in order. Enjoy your stay in the UK! Welcome.',
        translationUz: 'Hamma hujjatlar joyida. Buyuk Britaniyada maroqli hordiq oling! Xush kelibsiz.',
        phoneticTipUz: '«in order» — hammasi qoidaga muvofiq degani.'
      },
      {
        id: 'd1-8',
        roleId: 'traveler',
        speakerName: 'You (Traveler)',
        text: 'Thank you very much. Have a nice day!',
        translationUz: 'Katta rahmat. Kuningiz xayrli o\'tsin!',
        phoneticTipUz: 'Xushmuomalalik bilan minnatdorchilik bildiring.'
      }
    ],
    usefulPhrases: [
      {
        phrase: 'What is the purpose of your visit?',
        meaningUz: 'Tashrifingizdan maqsad nima?',
        context: 'Bojxona va elchixona intervyularida eng ko\'p uchraydigan savol.'
      },
      {
        phrase: 'Here you are / Here they are',
        meaningUz: 'Mana marhamat (hujjat yoki narsa uzatayotganda)',
        context: 'Pasport yoki chiptani uzatish paytida xushmuomalalik ifodasi.'
      },
      {
        phrase: 'Everything is in order',
        meaningUz: 'Hamma narsa to\'g\'ri va joyida',
        context: 'Hujjatlar tekshiruvdan muvaffaqiyatli o\'tganda aytiladi.'
      }
    ],
    comprehensionQuiz: [
      {
        question: 'What are the two main reasons the traveler is visiting the UK?',
        options: [
          'Looking for a permanent job and buying a car',
          'Tourism and attending a two-week English summer school',
          'Visiting relatives and getting medical treatment',
          'Opening a business branch'
        ],
        correctIndex: 1,
        explanationUz: 'O\'quvchi: «I am here for tourism and to attend a two-week intensive English summer school» deb javob berdi.'
      },
      {
        question: 'Where will the traveler be staying during the trip?',
        options: [
          'At a 5-star luxury hotel in London',
          'At a friend’s rented apartment',
          'In a campus dormitory in Cambridge',
          'At the airport terminal'
        ],
        correctIndex: 2,
        explanationUz: '«I have booked a campus dormitory» jumlasiga e\'tibor bering.'
      }
    ]
  },
  {
    id: 'dia-restaurant-dining',
    title: 'London Restoranida Buyurtma Berish',
    category: 'food',
    level: 'A2',
    iconName: 'Utensils',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80',
    scenarioUz: 'Ko\'rkam restoranda do\'stingiz bilan tushlik qilasiz. Ofitsiantdan menyu tavsiyasini so\'rab, taom va ichimlik buyurtma qilasiz.',
    learningGoalsUz: [
      'Xushmuomala buyurtma berish iboralarini («I would like...», «Could I have...») o\'rganish',
      'Tarkibida nimalar borligini so\'rash',
      'Hisob-kitobni (bill/check) odob bilan so\'rash'
    ],
    roles: [
      {
        id: 'waiter',
        name: 'Waiter',
        descriptionUz: 'Restoranning do\'stona va e\'tiborli xizmatchisi.',
        avatar: '🤵',
        isUserEligible: false
      },
      {
        id: 'guest',
        name: 'You (Guest)',
        descriptionUz: 'Mazzali taom buyurtma qilmoqchi bo\'lgan mijoz.',
        avatar: '🍽️',
        isUserEligible: true
      }
    ],
    lines: [
      {
        id: 'd2-1',
        roleId: 'waiter',
        speakerName: 'Waiter',
        text: 'Good afternoon! A table for two? Right this way, please.',
        translationUz: 'Xayrli kun! Ikki kishilik stolmi? Marhamat, bu yoqqa o\'ting.',
        phoneticTipUz: '«Right this way» [raɪt ðɪs weɪ] — xushmuomala taklif.'
      },
      {
        id: 'd2-2',
        roleId: 'guest',
        speakerName: 'You (Guest)',
        text: 'Thank you. Could we have the menu and the specials of the day?',
        translationUz: 'Rahmat. Menyuni va bugungi kunlik maxsus taomlarni ko\'rsak bo\'ladimi?',
        phoneticTipUz: '«Could we have...» so\'rov shaklida ovoz yuqoriga ko\'tariladi.'
      },
      {
        id: 'd2-3',
        roleId: 'waiter',
        speakerName: 'Waiter',
        text: 'Certainly. Today\'s chef special is grilled salmon with lemon butter sauce and steamed asparagus.',
        translationUz: 'Albatta. Bugungi bosh oshpaz maxsus taomi — limonli yog\' sousi va bug\'da pishgan sarsabil bilan qovurilgan qizil baliq (losos).',
        phoneticTipUz: '«grilled salmon»da «l» harfi o\'qilmaydi: [ɡrɪld ˈsæmən].'
      },
      {
        id: 'd2-4',
        roleId: 'guest',
        speakerName: 'You (Guest)',
        text: 'That sounds delightful! I\'d like to order the grilled salmon, please.',
        translationUz: 'Juda ajoyib eshitilyapti! Menga o\'sha qovurilgan lososni keltiring, iltimos.',
        phoneticTipUz: '«I\'d like to order» [aɪd laɪk tuː ˈɔːdər] — nafis va muloyim usul.'
      },
      {
        id: 'd2-5',
        roleId: 'waiter',
        speakerName: 'Waiter',
        text: 'Excellent choice. And would you like sparkling or still water to start with?',
        translationUz: 'Ajoyib tanlov. Boshlanishiga gazlangan yoki gazsiz oddiy suv xohlaysizmi?',
        phoneticTipUz: '«sparkling or still» — gazlangan yoki gazsiz suv.'
      },
      {
        id: 'd2-6',
        roleId: 'guest',
        speakerName: 'You (Guest)',
        text: 'Just a bottle of still water with a slice of lemon, thank you.',
        translationUz: 'Faqat bir shisha gazsiz suv va bir bo\'lak limon bilan, rahmat.',
        phoneticTipUz: '«a slice of lemon» [ə slaɪs əv ˈlemən].'
      },
      {
        id: 'd2-7',
        roleId: 'guest',
        speakerName: 'You (Guest)',
        text: 'Excuse me, could we also have the bill whenever you have a moment?',
        translationUz: 'Kechirasiz, vaqtingiz bo\'lganda hisobni keltira olasizmi?',
        phoneticTipUz: '«have the bill» — Britaniyada «bill», AQShda «check» deyiladi.'
      },
      {
        id: 'd2-8',
        roleId: 'waiter',
        speakerName: 'Waiter',
        text: 'Right away, sir. You can pay either by contactless card or cash.',
        translationUz: 'Hozirning o\'zida, janob. Siz kontaktsiz karta yoki naqd pulda to\'lashingiz mumkin.',
        phoneticTipUz: '«Right away» — darhol, tezda.'
      }
    ],
    usefulPhrases: [
      {
        phrase: 'I would like to order...',
        meaningUz: '...buyurtma qilmoqchi edim',
        context: 'Buyurtma berishning eng muloyim va to\'g\'ri shakli («I want» o\'rniga).'
      },
      {
        phrase: 'Still or sparkling water?',
        meaningUz: 'Gazsizmi yoki gazlangan suv?',
        context: 'Har bir chet el restoranida suv tanlashda so\'raladi.'
      },
      {
        phrase: 'Could we have the bill, please?',
        meaningUz: 'Iltimos, hisob-kitobni keltira olasizmi?',
        context: 'Ovqatlanib bo\'lgach ofitsiantdan hisobni so\'rash.'
      }
    ],
    comprehensionQuiz: [
      {
        question: 'What is the chef’s special recommendation of the day?',
        options: [
          'Pepperoni pizza with extra cheese',
          'Grilled salmon with lemon butter sauce and asparagus',
          'Cheeseburger and french fries',
          'Spicy chicken wings'
        ],
        correctIndex: 1,
        explanationUz: 'Ofitsiant maxsus taom sifatida losos (salmon) va sarsabilni tavsiya qildi.'
      },
      {
        question: 'What kind of water did the guest choose?',
        options: [
          'Sparkling soda with ice',
          'Hot tap water',
          'A bottle of still water with lemon',
          'Orange juice'
        ],
        correctIndex: 2,
        explanationUz: 'Mijoz: «Just a bottle of still water with a slice of lemon» deb aytdi.'
      }
    ]
  },
  {
    id: 'dia-job-interview',
    title: 'Xalqaro Kompaniyada Ish Suhbatidan O\'tish',
    category: 'business',
    level: 'B2',
    iconName: 'Briefcase',
    coverImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    scenarioUz: 'Xalqaro IT va ta\'lim kompaniyasining kadrlar bo\'yicha direktori bilan suhbat. O\'zingizning asosiy kuchli tomonlaringiz, jamoada ishlash va muammolarni hal qilish mahoratingizni namoyish etasiz.',
    learningGoalsUz: [
      'STAR metodologiyasida o\'z yutuqlarini taqdim etish',
      'Professional biznes ingliz tili lug\'atini qo\'llash',
      'O\'zining kuchli fazilatlarini erkin va ishonch bilan ifodalash'
    ],
    roles: [
      {
        id: 'interviewer',
        name: 'HR Director',
        descriptionUz: 'Tajribali xalqaro rekruter. Nomzodning muloqot va yetakchilik qobiliyatini baholaydi.',
        avatar: '👩‍💼',
        isUserEligible: false
      },
      {
        id: 'candidate',
        name: 'You (Candidate)',
        descriptionUz: 'O\'z sohasida yuqori motivatsiyaga ega, malakali mutaxassis.',
        avatar: '💼',
        isUserEligible: true
      }
    ],
    lines: [
      {
        id: 'd3-1',
        roleId: 'interviewer',
        speakerName: 'HR Director',
        text: 'Welcome! Thank you for taking the time to meet with us today. Could you tell us a bit about your professional background?',
        translationUz: 'Xush kelibsiz! Bugun biz bilan uchrashishga vaqt ajratganingiz uchun tashakkur. O\'zingizning kasbiy tajribangiz haqida qisqacha so\'zlab bera olasizmi?',
        phoneticTipUz: '«taking the time» iborasida ravonlikka e\'tibor bering.'
      },
      {
        id: 'd3-2',
        roleId: 'candidate',
        speakerName: 'You (Candidate)',
        text: 'Thank you for having me. Over the past three years, I have been actively teaching and developing interactive digital learning curriculum.',
        translationUz: 'Meni taklif qilganingiz uchun rahmat. O\'tgan uch yil davomida men faol dars berib, interaktiv raqamli ta\'lim dasturlarini ishlab chiqdim.',
        phoneticTipUz: '«actively teaching and developing» iborasiga urg\'u bering.'
      },
      {
        id: 'd3-3',
        roleId: 'interviewer',
        speakerName: 'HR Director',
        text: 'Impressive. What would you consider to be your greatest professional strength?',
        translationUz: 'Juda yaxshi. O\'zingizning eng katta kasbiy kuchli tomoningiz deb nimani hisoblaysiz?',
        phoneticTipUz: '«greatest professional strength» [ˈɡreɪtɪst prəˈfeʃənl streŋθ].'
      },
      {
        id: 'd3-4',
        roleId: 'candidate',
        speakerName: 'You (Candidate)',
        text: 'My greatest strength is my adaptability and problem-solving mindset. When challenges arise, I break them into manageable tasks and keep the team focused.',
        translationUz: 'Mening eng kuchli tomonim — moslashuvchanlik va muammolarni hal qilish tafakkuri. Qiyinchiliklar tug\'ilganda, ularni qismlarga ajratib, jamoani maqsadga yo\'naltira olaman.',
        phoneticTipUz: '«adaptability and problem-solving mindset».'
      },
      {
        id: 'd3-5',
        roleId: 'interviewer',
        speakerName: 'HR Director',
        text: 'How do you handle tight deadlines and high-pressure situations?',
        translationUz: 'Tig\'iz muddatlar (deadline) va yuqori bosim ostidagi vaziyatlarni qanday boshqarasiz?',
        phoneticTipUz: '«tight deadlines and high-pressure situations».'
      },
      {
        id: 'd3-6',
        roleId: 'candidate',
        speakerName: 'You (Candidate)',
        text: 'I prioritize critical tasks using clear schedules, communicate transparently with stakeholders, and never compromise on output quality.',
        translationUz: 'Men aniq jadvallar orqali muhim vazifalarni saralayman, hamkorlar bilan ochiq muloqot qilaman va hech qachon sifatni qurbon qilmayman.',
        phoneticTipUz: '«never compromise on output quality».'
      },
      {
        id: 'd3-7',
        roleId: 'interviewer',
        speakerName: 'HR Director',
        text: 'That aligns perfectly with our company core values. Do you have any questions for us?',
        translationUz: 'Bu kompaniyamizning asosiy qadriyatlariga to\'liq mos keladi. Bizga biror savolingiz bormi?',
        phoneticTipUz: '«aligns perfectly» — to\'la mos tushadi.'
      },
      {
        id: 'd3-8',
        roleId: 'candidate',
        speakerName: 'You (Candidate)',
        text: 'Yes, I would love to learn more about the opportunities for ongoing mentorship and professional growth within your team.',
        translationUz: 'Ha, jamoangizda doimiy ustozlik (mentorship) va kasbiy o\'sish imkoniyatlari haqida ko\'proq bilishni istardim.',
        phoneticTipUz: 'Ish suhbatida savol berish nomzodning qiziqishi yuqoriligini ko\'rsatadi.'
      }
    ],
    usefulPhrases: [
      {
        phrase: 'My greatest strength is...',
        meaningUz: 'Mening eng kuchli tomonim...',
        context: 'Intervyuda shaxsiy ustunliklarni taqdim etishda asosiy shablon.'
      },
      {
        phrase: 'Never compromise on quality',
        meaningUz: 'Sifatdan hech qachon chekinmaslik',
        context: 'Mas\'uliyatli yondashuvni ifodalovchi yuqori darajadagi ibora.'
      },
      {
        phrase: 'Align with company values',
        meaningUz: 'Kompaniya qadriyatlariga mos kelish',
        context: 'Kompaniya madaniyatiga muvofiqlikni bildirish.'
      }
    ],
    comprehensionQuiz: [
      {
        question: 'What does the candidate identify as their greatest strength?',
        options: [
          'Working 24 hours without taking any breaks',
          'Adaptability and a problem-solving mindset',
          'Memorizing entire grammar rule books',
          'Avoiding team meetings'
        ],
        correctIndex: 1,
        explanationUz: 'Nomzod: «My greatest strength is my adaptability and problem-solving mindset» deb ta\'kidladi.'
      },
      {
        question: 'What question did the candidate ask the HR Director at the end?',
        options: [
          'How much money can I borrow today?',
          'Can I work only from home on Mondays?',
          'What are the opportunities for ongoing mentorship and professional growth?',
          'Who is the CEO of this company?'
        ],
        correctIndex: 2,
        explanationUz: 'Nomzod kasbiy o\'sish va ustozlik (mentorship) dasturlari haqida qiziqdi.'
      }
    ]
  },
  {
    id: 'dia-hotel-checkin',
    title: 'Mehmonxonaga Joylashish va Xizmatlar',
    category: 'travel',
    level: 'A2',
    iconName: 'Building',
    coverImage: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
    scenarioUz: 'Buyurtma qilingan xonaga kirish (Check-in), Wi-Fi paroli, nonushta soatlari va sport zali haqida resepshn xodimi bilan muloqot.',
    learningGoalsUz: [
      'Mehmonxona xizmatlari haqida so\'rash',
      'Xona kalitini qabul qilish va qulayliklarni aniqlash',
      'Turar joy odob-axloq qoidalariga rioya qilish'
    ],
    roles: [
      {
        id: 'receptionist',
        name: 'Front Desk Receptionist',
        descriptionUz: 'Mehmonxona resepshn xizmatchisi.',
        avatar: '🛎️',
        isUserEligible: false
      },
      {
        id: 'guest',
        name: 'You (Guest)',
        descriptionUz: 'Sayyoh yoki xizmat safari bilan kelgan mehmon.',
        avatar: '🧳',
        isUserEligible: true
      }
    ],
    lines: [
      {
        id: 'd4-1',
        roleId: 'receptionist',
        speakerName: 'Front Desk',
        text: 'Good evening, welcome to the Grand Palace Hotel! How may I assist you tonight?',
        translationUz: 'Xayrli kech, Grand Palace mehmonxonasiga xush kelibsiz! Bugun oqshom sizga qanday yordam bera olaman?',
        phoneticTipUz: '«How may I assist you?» — muloyim xushmuomala taklif.'
      },
      {
        id: 'd4-2',
        roleId: 'guest',
        speakerName: 'You (Guest)',
        text: 'Good evening. I have a reservation under the name of Nodir Safoyev for three nights.',
        translationUz: 'Xayrli kech. Nodir Safoyev nomiga 3 kechaga band qilingan bronim bor edi.',
        phoneticTipUz: '«reservation under the name of...» [ˌrezəˈveɪʃn ˈʌndər ðə neɪm əv].'
      },
      {
        id: 'd4-3',
        roleId: 'receptionist',
        speakerName: 'Front Desk',
        text: 'Yes, Mr. Safoyev, I found your booking for a Deluxe Queen Room with city view. May I please have your ID?',
        translationUz: 'Ha, janob Safoyev, shaharga qaragan Deluxe Queen xonasi broningizni topdim. Shaxsingizni tasdiqlovchi hujjatni bera olasizmi?',
        phoneticTipUz: '«Deluxe Queen Room» — xona toifasi.'
      },
      {
        id: 'd4-4',
        roleId: 'guest',
        speakerName: 'You (Guest)',
        text: 'Here is my passport. What time is complimentary breakfast served in the morning?',
        translationUz: 'Mana pasportim. Ertalab bepul nonushta soat nechada beriladi?',
        phoneticTipUz: '«complimentary breakfast» [ˌkɒmplɪˈmentri ˈbrekfəst] — bepul nonushta.'
      },
      {
        id: 'd4-5',
        roleId: 'receptionist',
        speakerName: 'Front Desk',
        text: 'Breakfast buffet is served on the second floor from 6:30 AM to 10:00 AM. Here is your keycard for room 412.',
        translationUz: 'Nonushta shved stoli ikkinchi qavatda soat 6:30 dan 10:00 gacha tortiladi. Mana 412-xona kalit-kartangiz.',
        phoneticTipUz: '«buffet» so\'zida oxirgi «t» talaffuz qilinmaydi: [ˈbʊfeɪ].'
      },
      {
        id: 'd4-6',
        roleId: 'guest',
        speakerName: 'You (Guest)',
        text: 'Wonderful. And is there high-speed Wi-Fi available in the room?',
        translationUz: 'Ajoyib. Xonada yuqori tezlikdagi Wi-Fi bormi?',
        phoneticTipUz: '«high-speed Wi-Fi available».'
      },
      {
        id: 'd4-7',
        roleId: 'receptionist',
        speakerName: 'Front Desk',
        text: 'Yes, simply select "GrandPalace_Guest" and enter your room number and last name. Elevators are just to your right.',
        translationUz: 'Ha, shunchaki "GrandPalace_Guest" tarmog\'ini tanlab, xona raqamingiz va familiyangizni kiriting. Liftlar o\'ng tomoningizda.',
        phoneticTipUz: '«Elevators are just to your right».'
      },
      {
        id: 'd4-8',
        roleId: 'guest',
        speakerName: 'You (Guest)',
        text: 'Thank you so much for your kind assistance. Good night!',
        translationUz: 'Xushmuomala yordamingiz uchun katta rahmat. Xayrli tun!',
        phoneticTipUz: '«kind assistance» — mehribon yordam.'
      }
    ],
    usefulPhrases: [
      {
        phrase: 'I have a reservation under the name of...',
        meaningUz: '... nomiga band qilingan bronim bor',
        context: 'Mehmonxonaga kirganda eng birinchi aytiladigan jumla.'
      },
      {
        phrase: 'Complimentary breakfast',
        meaningUz: 'Xona narxiga kiritilgan bepul nonushta',
        context: 'Mehmonxona shartlarini bilishda.'
      },
      {
        phrase: 'Keycard for room...',
        meaningUz: '...-xona uchun elektron kalit',
        context: 'Elektron kalit berilganda.'
      }
    ],
    comprehensionQuiz: [
      {
        question: 'What time is breakfast served in the morning?',
        options: [
          'Only from 5:00 AM to 6:00 AM',
          'From 6:30 AM to 10:00 AM on the second floor',
          'Anytime 24 hours a day',
          'Breakfast is not included'
        ],
        correctIndex: 1,
        explanationUz: 'Resepshn xodimi: «served on the second floor from 6:30 AM to 10:00 AM» deb aytdi.'
      }
    ]
  },
  {
    id: 'dia-pharmacy-doctor',
    title: 'Dorixona va Shifokor Qabulida',
    category: 'medical',
    level: 'B1',
    iconName: 'Activity',
    coverImage: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=800&q=80',
    scenarioUz: 'Chet elda shamollab qolganingizda dorixonaga (Pharmacy / Chemist) borib, alomatlaringizni tushuntirish va to\'g\'ri dori olish.',
    learningGoalsUz: [
      'Salomatlikdagi muammolarni («I have a sore throat», «fever») aytish',
      'Dorining ichilish dozasi va tartibini bilib olish',
      'Allergiya va nojo\'ya ta\'sirlar haqida ogohlantirish'
    ],
    roles: [
      {
        id: 'pharmacist',
        name: 'Pharmacist',
        descriptionUz: 'Malakali farmatsevt xodim.',
        avatar: '🧑‍⚕️',
        isUserEligible: false
      },
      {
        id: 'patient',
        name: 'You (Patient)',
        descriptionUz: 'Shamollash alomatlarini his qilayotgan bemor.',
        avatar: '🤒',
        isUserEligible: true
      }
    ],
    lines: [
      {
        id: 'd5-1',
        roleId: 'pharmacist',
        speakerName: 'Pharmacist',
        text: 'Hello, how can I help you today? You look a bit under the weather.',
        translationUz: 'Salom, bugun sizga qanday yordam bera olaman? Biroz tobingiz yo\'qdek ko\'rinyapsiz.',
        phoneticTipUz: '«under the weather» — tobi yo\'q, sal kasal bo\'lib qolgan degan mashhur idiomadir.'
      },
      {
        id: 'd5-2',
        roleId: 'patient',
        speakerName: 'You (Patient)',
        text: 'Yes, unfortunately. I have developed a bad sore throat, a runny nose, and a mild headache since yesterday.',
        translationUz: 'Ha, afsuski. Kechadan beri tomog\'im qattiq og\'riyapti, burnim oqyapti va biroz boshim og\'riyapti.',
        phoneticTipUz: '«sore throat» [sɔːr θrəʊt] — «th» tovushiga e\'tibor bering.'
      },
      {
        id: 'd5-3',
        roleId: 'pharmacist',
        speakerName: 'Pharmacist',
        text: 'Do you have a fever, and are you allergic to any specific medications like paracetamol or ibuprofen?',
        translationUz: 'Isitmaningiz bormi va paratsetamol yoki ibuprofen kabi biror doriga allergiyangiz yo\'qmi?',
        phoneticTipUz: '«allergic to...» [əˈlɜːdʒɪk tuː].'
      },
      {
        id: 'd5-4',
        roleId: 'patient',
        speakerName: 'You (Patient)',
        text: 'No known allergies, and my temperature is around 37.5 degrees Celsius.',
        translationUz: 'Allergiyam yo\'q, tana haroratim 37.5 daraja atrofida.',
        phoneticTipUz: '«degrees Celsius» [dɪˈɡriːz ˈselsiəs].'
      },
      {
        id: 'd5-5',
        roleId: 'pharmacist',
        speakerName: 'Pharmacist',
        text: 'I recommend these honey-lemon throat lozenges and this decongestant nasal spray. Take one lozenge every four hours.',
        translationUz: 'Men asal-limonli tomoq shimiladigan tabletkalarini va burun spreyini tavsiya qilaman. Har to\'rt soatda bitta tabletkani shiring.',
        phoneticTipUz: '«throat lozenges» [θrəʊt ˈlɒzɪndʒɪz] — shimiladigan dori.'
      },
      {
        id: 'd5-6',
        roleId: 'patient',
        speakerName: 'You (Patient)',
        text: 'Should I take them before or after meals, and will they cause drowsiness?',
        translationUz: 'Ularni ovqatdan oldinmi yoki keyin ichish kerakmi va ular uyqu keltirmaydimi?',
        phoneticTipUz: '«drowsiness» [ˈdraʊzinəs] — uyquchanlik, mudrash.'
      },
      {
        id: 'd5-7',
        roleId: 'pharmacist',
        speakerName: 'Pharmacist',
        text: 'Take them after meals with plenty of warm water. This formula is non-drowsy, so you can safely continue your day.',
        translationUz: 'Ularni ovqatdan keyin ko\'p miqdordagi iliq suv bilan qabul qiling. Bu formula uyqu keltirmaydi, bemalol ishlaringizni qilsangiz bo\'ladi.',
        phoneticTipUz: '«non-drowsy» — uyqu bermaydigan tarkib.'
      },
      {
        id: 'd5-8',
        roleId: 'patient',
        speakerName: 'You (Patient)',
        text: 'That is reassuring. Thank you so much for the detailed advice!',
        translationUz: 'Ko\'nglim ancha xotirjam bo\'ldi. Batafsil maslahatingiz uchun katta rahmat!',
        phoneticTipUz: '«reassuring» [ˌriːəˈʃɔːrɪŋ] — ko\'ngilni tinchlantiruvchi.'
      }
    ],
    usefulPhrases: [
      {
        phrase: 'Under the weather',
        meaningUz: 'Tobi qochgan, shamollagan',
        context: 'O\'zini yomon his qilganda qo\'llaniladigan norasmiy xushmuomala ibora.'
      },
      {
        phrase: 'Sore throat & runny nose',
        meaningUz: 'Tomoq og\'rig\'i va burun oqishi',
        context: 'Shamollash alomatlarini sanab o\'tish.'
      },
      {
        phrase: 'Non-drowsy formula',
        meaningUz: 'Uyqu keltirmaydigan dori',
        context: 'Avtomobil haydash yoki o\'qish paytida qabul qilinadigan dorilar.'
      }
    ],
    comprehensionQuiz: [
      {
        question: 'What symptoms did the patient complain about?',
        options: [
          'Broken arm and severe back pain',
          'Sore throat, runny nose, and mild headache',
          'Toothache and blurry vision',
          'Stomach ache after dinner'
        ],
        correctIndex: 1,
        explanationUz: 'Bemor tomog\'i og\'riyotgani, burni oqayotgani va boshi og\'riyotganini aytdi.'
      }
    ]
  },
  {
    id: 'dia-shopping-boutique',
    title: 'Kiyim Do\'konida Xarid va O\'lcham Tanlash',
    category: 'shopping',
    level: 'A2',
    iconName: 'ShoppingBag',
    coverImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=800&q=80',
    scenarioUz: 'London markazidagi kiyim do\'konida o\'zingizga yoqqan pidjak yoki jemperni o\'lchab ko\'rish (fitting room), o\'lcham va rangini almashtirish.',
    learningGoalsUz: [
      'Kiyinish xonasi (fitting room) haqida so\'rash',
      'O\'lchami to\'g\'ri kelmadi deganda («It’s a bit tight / loose») ifodalash',
      'Chegirma va to\'lov usullarini aniqlash'
    ],
    roles: [
      {
        id: 'assistant',
        name: 'Sales Assistant',
        descriptionUz: 'Do\'kon maslahatchisi.',
        avatar: '🛍️',
        isUserEligible: false
      },
      {
        id: 'customer',
        name: 'You (Customer)',
        descriptionUz: 'Kiyim sotib olmoqchi bo\'lgan xaridor.',
        avatar: '🧥',
        isUserEligible: true
      }
    ],
    lines: [
      {
        id: 'd6-1',
        roleId: 'assistant',
        speakerName: 'Sales Assistant',
        text: 'Hi there! Are you looking for anything in particular, or just browsing?',
        translationUz: 'Salom! Biror aniq narsa qidiryapsizmi yoki shunchaki qarab ko\'ryapsizmi?',
        phoneticTipUz: '«just browsing» — shunchaki ko\'z yugurtiryapman.'
      },
      {
        id: 'd6-2',
        roleId: 'customer',
        speakerName: 'You (Customer)',
        text: 'Hello! I really like this wool blazer. Where is the fitting room so I can try it on?',
        translationUz: 'Salom! Menga mana bu jun pidjak juda yoqdi. Uni kiyib ko\'rishim uchun kiyinish xonasi qayerda?',
        phoneticTipUz: '«try it on» — kiyib ko\'rish.'
      },
      {
        id: 'd6-3',
        roleId: 'assistant',
        speakerName: 'Sales Assistant',
        text: 'The fitting rooms are right at the back next to the mirrors. Take your time!',
        translationUz: 'Kiyinish xonalari orqa tomonda, ko\'zgularning yonida joylashgan. Bemalol o\'lchab ko\'ring!',
        phoneticTipUz: '«Take your time» — shoshilmang, bemalol.'
      },
      {
        id: 'd6-4',
        roleId: 'customer',
        speakerName: 'You (Customer)',
        text: 'It fits nicely around the shoulders, but it is a bit tight on the waist. Do you have this in a medium or large?',
        translationUz: 'Yelkamga juda yaxshi tushdi, lekin bel qismi biroz torroq ekan. Buning "Medium" yoki "Large" o\'lchami bormi?',
        phoneticTipUz: '«a bit tight on the waist» [ə bɪt taɪt ɒn ðə weɪst].'
      },
      {
        id: 'd6-5',
        roleId: 'assistant',
        speakerName: 'Sales Assistant',
        text: 'Let me check our stockroom. Yes, we have a Medium in navy blue and olive green. Here you go!',
        translationUz: 'Omborimizni tekshirib ko\'ray. Ha, bizda to\'q ko\'k va zaytun rangida Medium o\'lcham bor ekan. Mana marhamat!',
        phoneticTipUz: '«navy blue and olive green».'
      },
      {
        id: 'd6-6',
        roleId: 'customer',
        speakerName: 'You (Customer)',
        text: 'This Medium in navy blue fits like a glove! Is there any ongoing discount on it?',
        translationUz: 'To\'q ko\'k rangli bu Medium o\'lcham xuddi men uchun tikilgandek tushdi! Bunga biror amaldagi chegirma bormi?',
        phoneticTipUz: '«fits like a glove» — juda mos tushdi, qolipdek o\'tirdi.'
      },
      {
        id: 'd6-7',
        roleId: 'assistant',
        speakerName: 'Sales Assistant',
        text: 'Yes! All winter blazers are currently 20% off at the register.',
        translationUz: 'Ha! Barcha qishki pidjaklarga kassada 20% chegirma beriladi.',
        phoneticTipUz: '«20% off at the register».'
      },
      {
        id: 'd6-8',
        roleId: 'customer',
        speakerName: 'You (Customer)',
        text: 'Fantastic! I will definitely take it. Where can I pay?',
        translationUz: 'Ajoyib! Buni aniq sotib olaman. Qayerda to\'lasam bo\'ladi?',
        phoneticTipUz: '«I will definitely take it» — qat\'iy xarid qarori.'
      }
    ],
    usefulPhrases: [
      {
        phrase: 'Can I try it on?',
        meaningUz: 'Buni kiyib ko\'rsam bo\'ladimi?',
        context: 'Kiyim do\'konidagi eng zarur savol.'
      },
      {
        phrase: 'It fits like a glove',
        meaningUz: 'Juda mos tushdi, qolipdek o\'tirdi',
        context: 'Kiyim o\'lchami a\'lo darajada to\'g\'ri kelganda aytiladigan inglizcha ibora.'
      },
      {
        phrase: 'Is this on sale / discounted?',
        meaningUz: 'Bu chegirmadami?',
        context: 'Narxni va chegirmalarni bilish.'
      }
    ],
    comprehensionQuiz: [
      {
        question: 'Why did the customer ask for a larger size?',
        options: [
          'The color was too bright',
          'It was a bit tight on the waist',
          'It had missing buttons',
          'The jacket was too long'
        ],
        correctIndex: 1,
        explanationUz: 'Mijoz: «it is a bit tight on the waist» (beli biroz tor ekan) deb aytdi.'
      }
    ]
  }
];

export const getDialogueById = (id: string): DialogueSituation | undefined => {
  return REAL_LIFE_DIALOGUES.find((d) => d.id === id);
};
