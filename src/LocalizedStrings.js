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
      language: 'LANGUAGE'
    },
    body: {
      moto: 'Let us help you with your digital presence.',
      valueProposition: {
        valueText1:
          'Online presence nowadays is a must in every business field starting from small individuals and all the way up to the billion dollar companies.',
        valueText2:
          'That is why you can think about your own web footprint. Is it big and impressive enough? Does it reflect your personality or brand? If not, we are here to help you show your full potential in the world wide web world.'
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
          content: 'Email content',
          contentFloatingLabel: 'Ask us anything or simply share your thoughts'
        },
        thankYou: {
          title: 'Thank you for contacting us',
          description: 'We will try to contact you back as soon as possible.',
          closeButton: 'CLOSE'
        }
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
      language: 'ЕЗИК'
    },
    body: {
      moto: 'Нека ви помогнем с вашето дигитално присъствие.',
      valueProposition: {
        valueText1:
          'Онлайн присъствието в днешно време е задължително във всяка област на бизнеса, започвайки от малкия бизнес и по целия път до компаниите в милиарда долари.',
        valueText2:
          'Ето защо можете да мислите за следата, която оставяте в интернет пространството. Дали е достатъчно голяма и впечатляваща? Отразява ли вашата личност или марка? Ако не, ние сме тук, за да ви помогнем да покажете пълния си потенциал в световната мрежа.'
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

strings.setLanguage('bg');

export default strings;
