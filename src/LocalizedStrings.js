import LocalizedStrings from 'react-localization';

let strings = new LocalizedStrings({
  en: {
    header: {
      home: 'HOME',
      whyUs: 'WHY US',
      services: 'SERVICES',
      portfolio: 'PORTFOLIO',
      contacts: 'CONTACTS',
      hiring: 'HIRING',
      language: 'ENGLISH'
    },
    buttons: {
      back: 'BACK',
      next: 'NEXT',
      cancel: 'CANCEL',
      add: 'ADD',
      finish: 'FINISH'
    },
    body: {
      moto: 'Let us help you with your digital presence.',
      valueProposition: {
        valueText1:
          'Online presence nowadays is a must in every business field starting from small individuals and all the way up to the billion dollar companies.'
      },
      whyUs: {
        title: 'WhyUs',
        whyUsFirstParagraph:
          'We regard our strongest side to be the people that work in the company. That is why we try to hire the best performers from leading industries and assign them the critical task to serve your custom needs',
        whyUsSecondParagraph:
          'The technological stack used in the development of your digital presence includes cutting-edge solutions which are both scalable and resilient. For the case, most of our products step on the shoulder of giants like Microsoft and Google that are considered extremely reliable.',
        whyUsThirdParagraph:
          'Our active support is always happy to hear feedback and help you with something regarding your digital presence solution.'
      },
      services: {
        title: 'Our Services',
        buttonWebsiteDevSol: 'Website development solutions',
        websiteDev: 'WEBSITE DEVELOPMENT',
        templates: 'Templates',
        formAbouTheRequest: {
          title: "Just a little bit more and we're done...",
          name: 'Name',
          email: 'Email',
          infoAbotTheRequest: 'Additional info about the request'
        },
        steps: {
          firstStep: 'Select the services you would like',
          secondStep: 'Contacts and additional info',
          thirdStep: 'Request summary',
          fourthStep: 'Thank you'
        },
        websiteDevelopmentDialog: {
          title: "Let's get started",
          textOne:
            'Since we wanted you to have a wide choise of designs, so that you can easily relate to the one that suits you best, you can choose from one of the templates below which can later be customized for your own style and needs.',
          textLabel: 'Templates',
          textSecond:
            "... Or you can give us your own concept of a design and we'll implement it."
        },
        localizationDialog: {
          textOne:
            'Localization will help you to develop and scale your ideas because the content will reach the users depending on their language or the country from which the website is opened.',
          textSecond:
            'In the menu, you will have the opportunity to choose the languages we can translate your website. We will take care to transmit the content on a high level.',
          textThird:
            'The price depends on the volume of the text and the deadline for translating.'
        },
        websiteOptions: {
          websiteDevelopment: 'WEBSITE DEVELOPMENT',
          googleAnalitycsInt: 'GOOGLE ANALITYCS INTEGRATION',
          facebookPixelInt: 'FACEBOOK PIXEL INTEGRATION',
          facebookMessengerInt: 'FACEBOOK MESSENGER INTEGRATION',
          emailSubscrInt: 'EMAIL SUBSCRIPTION INTEGRATION',
          localization: 'LOCALIZATION',
          blogAndBlogManagement: 'BLOG AND BLOG MANAGEMENT'
        }
      },
      portfolio: {
        title: 'Our Portfolio',
        bookExchangeProject: {
          title: 'Book Exchange',
          description:
            'Knowledge is something important for everyone. Our team from Mad Science create a platform which helps us to exchange books all over Bulgaria. We sympathizing to have an accessible education no matter the age. Every person has an opportunity to give an opinion for a book which owns. The book could be exchanged with someone who wants to read it.',
          buttonForPortfolio: 'LEARN MORE'
        },
        openSourceTitle: 'Open-source projects',
        madScienceProject: {
          title: 'Mad Science',
          description:
            'The official website of Mad Science is an open-source project. The source code can be found in GitHub. For carrying out the project we used JavaScript(JS) and one of the most popular JavaScript libraries – React. For the design philosophy we step upon the shoulders of Material Design by Google. More information can be found on GitHub in the readme file.',
          buttonForPortfolio: 'SOURCE IN GITHUB'
        }
      },
      contacts: {
        title: 'Contacts',
        contactsInfo:
          'Need More information? You can contact us here or in one of our other channels',
        contactsButton: 'SUBMIT',
        form: {
          email: 'Enter your email',
          subject: 'Subject',
          subjectFloatingLabel:
            'Enter the reason for which you are contacting us',
          content: 'Content',
          contentFloatingLabel: 'Ask us anything or simply share your thoughts'
        },
        thankYou: {
          title: 'Thank you for contacting us',
          description: 'We will try to contact you back as soon as possible.',
          closeButton: 'CLOSE'
        }
      },
      hiring: {
        title: 'Do you want to join?',
        textOne: 'Sorry we are currently not having open positions',
        textSecond:
          'Subscribe below to hear from us, when we have open positions.',
        toSubscribeLabel: 'Subscribe to our mailing list',
        input: 'email address',
        button: 'Subscribe'
      }
    },
    footer: {
      home: 'Home',
      faq: 'FAQ',
      generalTerms: 'General terms',
      aboutUs: 'About us',
      contacts: 'Contacts'
    }
  },

  bg: {
    header: {
      home: 'НАЧАЛО',
      whyUs: 'ЗАЩО НИЕ',
      services: 'УСЛУГИ',
      portfolio: 'ПОРТФОЛИО',
      contacts: 'КОНТАКТИ',
      hiring: 'ПРИСЪЕДИНИ СЕ',
      language: 'БЪЛГАРСКИ'
    },
    buttons: {
      back: 'НАЗАД',
      next: 'НАПРЕД',
      cancel: 'ЗАТВОРИ',
      add: 'ДОБАВИ',
      finish: 'ЗАВЪРШИ ПОРЪЧКАТА'
    },
    body: {
      moto: 'Нека ви помогнем с вашето дигитално присъствие.',
      valueProposition: {
        valueText1:
          'Онлайн присъствието в днешно време е задължително във всяка област на бизнеса, започвайки от малкия бизнес и по целия път до компаниите в милиарда долари.'
      },
      whyUs: {
        title: 'Защо ние',
        whyUsFirstParagraph:
          'Ние вярваме, че нашата най-силна страна са хората, които работят в нашата компания. Ето защо се опитваме да наемем най-добрите кадри от водещи индустрии и да им възложим задачата да се погрижат за вашите нужди в интернет средата.',
        whyUsSecondParagraph:
          'Услугите, които предлагаме за вашето дигитално присъствие включва най-съвременните решения, които са колкото мащабни, толкова и гъвкави. В този ред на мисли ние се доверяваме за нашите продукти на гиганти като Microsoft и Google, които се смятат за изключително надеждни.',
        whyUsThirdParagraph:
          'Ние ще сме щастливи да чуем вашата обратна връзка и да Ви помогнем в това, което сме най-добри, а именнно вашето присъствие в пространството.'
      },
      services: {
        title: 'Нашите услуги',
        buttonWebsiteDevSol: 'РЕШЕНИЯ ЗА РАЗРАБОТВАНЕ НА УЕБСАЙТОВЕ',
        websiteDev: 'СЪЗДАВАНЕ НА УЕБСАЙТ',
        templates: 'ШАБЛОНИ',
        formAbouTheRequest: {
          title: 'Нужна ни е още малко информация и сме готови ...',
          name: 'Име',
          email: 'Имейл',
          infoAbotTheRequest: 'Допълнителна информация за заявката'
        },
        steps: {
          firstStep: 'Изберете усугите, които искате',
          secondStep: 'Контакти и допълнителна информация',
          thirdStep: 'Резюме на заявката',
          fourthStep: 'Благодарим Ви'
        },
        websiteDevelopmentDialog: {
          title: 'Нека започнем',
          textOne:
            'Може да изберете един от шаблоните, който по-късно ще бъде направен специално за Вас и Вашите нужди.',
          textLabel: 'Шаблони',
          textSecond:
            '... Или можете да ни дадете своя собствена концепция и ние ще я изпълним.'
        },
        localizationDialog: {
          textOne:
            'С помощта на локализацията Вие ще можете да разивате вашите идеи, тъй като съдържанието, което ще достига до потребителите ще бъде съобразено според използвания език и страните, в които искате да се развива вашият сайт.',
          textSecond:
            'В менюто може да изберете желаните езици, на които искате да бъде преведен вашият сайт. Ние ще се погрижим съдържанието да е максимално точно предадено.',
          textThird:
            'Цената се определя според обема на текста и срока за превод.'
        },
        websiteOptions: {
          websiteDevelopment: 'РАЗРАБОТКА НА УЕБСАЙТ',
          googleAnalitycsInt: 'GOOGLE ANALITYCS ИНТЕГРАЦИЯ',
          facebookPixelInt: 'FACEBOOK PIXEL ИНТЕГРАЦИЯ',
          facebookMessengerInt: 'FACEBOOK MESSENGER ИНТЕГРАЦИЯ',
          emailSubscrInt: 'ИНТЕГРАЦИЯ НА ИМЕЙЛ АБОНАМЕНТ',
          localization: 'ЛОКАЛИЗАЦИЯ',
          blogAndBlogManagement: 'БЛОГ И БЛОГ МЕНИДЖМЪНТ'
        }
      },
      portfolio: {
        title: 'Нашето портфолио',
        bookExchangeProject: {
          title: 'Книга за Книга',
          description:
            'Знанието е нещо важно за всички ни. Ние от екипа на Mad Science създадохме платформа, която ни помага да разменяме книги с цяла България. Съпричастни сме към по-достъпното образование, без значение от възрастта. Всеки има възможността да напише нещо повече за конкретна книга, която притежава и да даде своето мнение за нея. Книгата бива разменяна, с някого, когото иска да я прочете и да извлече максимално много от нея.',
          buttonForPortfolio: 'НАУЧИ ПОВЕЧЕ'
        },
        openSourceTitle: 'Проекти с отворен код',
        madScienceProject: {
          title: 'Mad Science',
          description:
            'Официалният сайт на Mad Science e open-source проект, неговият код може да бъде намерен в GitHub. За осъществяването му са използвани JavaScript(JS) и една от най-модерните JavaScript библиотеки - React. Приложената философия за дизайна е Material Design от Google. За по-детайлна техническа информация може да посетите проектът в GitHub и да прочетете в readme-то.',
          buttonForPortfolio: 'СОРС КОД В GITHUB'
        }
      },
      contacts: {
        title: 'Контакти',
        contactsInfo:
          'Искаш да знаеш повече? Свържи се с нас тук или чрез някой от каналите.',
        contactsButton: 'ИЗПРАТИ',
        form: {
          email: 'Напиши своя имейл',
          subject: 'Тема',
          subjectFloatingLabel:
            'Въведи каква е причината, заради която искаш да се свържеш с нас',
          content: 'Съдържание',
          contentFloatingLabel: 'Попитай ни или сподели своето мнение'
        },
        thankYou: {
          title: 'Благодарим Ви, че се свързахте с нас',
          description: 'Ще се опитаме да Ви отговорим възможно най-скоро.',
          closeButton: 'ЗАТВОРИ'
        }
      },
      hiring: {
        title: 'Искаш ли да се присъединиш?',
        textOne: 'Съжаляваме, но в момента нямаме свободни позиции',
        textSecond:
          'Абонирайте се, за да Ви уведомим, когато имаме отворени позиции.',
        toSubscribeLabel: 'Абонирай се за нашия списък',
        input: 'имейл адрес',
        button: 'Абониране'
      }
    },
    footer: {
      home: 'Начало',
      faq: 'Често задавани въпроси',
      generalTerms: 'Общи условия',
      aboutUs: 'За нас',
      contacts: 'Контакти'
    }
  }
});

export default strings;
