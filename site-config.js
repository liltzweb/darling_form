window.FORM_CONFIG = {
  product: {
    code: 'ohmydarling',
    name: 'ohmydarling',
    badge: 'interactive stealth guessing game & love proposal',
    price: 7000,
    priceFormatted: 'Rp 7.000',
    tagline: 'ohmydarling — interactive stealth 3-question guessing game, sliding keepsake photo reveal, handwritten letter, memory reminder, and runaway proposal with direct Telegram response.'
  },
  context: {
    formCode: 'DARLING-ORD',
    edition: '2026 Stealth Love Proposal Edition',
    description: 'Ohmydarling is an interactive romantic guessing game featuring 3 stealth quiz questions with instant feedback replies, a sliding keepsake polaroid reveal, a 4-paragraph love letter, an interactive memory card, and an unforgettable runaway proposal where the No button dodges and Yes sends a direct prefilled Telegram message.'
  },
  motif: '💌',
  mediaDescription: '5 Foto (3 Quiz Placeholders/Photos + 1 Keepsake Slide + 1 Memory Card) + 1 File Musik MP3',
  theme: {
    name: 'darling',
    palette: ['#1A120B', '#2C1D11', '#E5A93C', '#FAF4EB', '#603813', '#D4813A']
  },
  sections: [
    {
      id: 'core_identity',
      number: '02',
      title: 'Core Identity & Chat Destination',
      description: 'Names and destination Telegram link for instant response submission.',
      fields: [
        {
          id: 'sender_name',
          label: 'Sender Full Name (Yang Menembak / Menyatakan Perasaan)',
          type: 'text',
          placeholder: 'e.g. Arkan Narendra',
          defaultValue: 'Arkan Narendra',
          required: true,
          helpText: 'Nama lengkap pengirim/pria yang menyatakan perasaan.'
        },
        {
          id: 'sender_nickname',
          label: 'Sender Nickname / First Name',
          type: 'text',
          placeholder: 'e.g. Arkan',
          defaultValue: 'Arkan',
          required: true,
          helpText: 'Nama panggilan pengirim.'
        },
        {
          id: 'recipient_name',
          label: 'Recipient Full Name (Crush / Pasangan yang Ditembak)',
          type: 'text',
          placeholder: 'e.g. Kania Aurelia',
          defaultValue: 'Kania Aurelia',
          required: true,
          helpText: 'Nama lengkap wanita/pasangan yang menerima.'
        },
        {
          id: 'recipient_nickname',
          label: 'Recipient Nickname / First Name',
          type: 'text',
          placeholder: 'e.g. Kania',
          defaultValue: 'Kania',
          required: true,
          helpText: 'Nama panggilan pasangan.'
        },
        {
          id: 'chat_destination',
          label: 'Telegram Chat Destination Link',
          type: 'text',
          placeholder: 'e.g. https://t.me/mirssy atau username telegrammu',
          defaultValue: 'https://t.me/mirssy',
          required: true,
          helpText: 'Link Telegram tujuan saat tombol Yes ditekan oleh pasangan.'
        }
      ]
    },
    {
      id: 'scene_01_entry',
      number: '03',
      title: 'Scene 01 — Opening (Stealth Guessing Game)',
      description: 'Cover card opening the game without giving away the surprise.',
      fields: [
        {
          id: 's1_badge',
          label: 'Top Pill Badge',
          type: 'text',
          placeholder: 'e.g. just a quick game',
          defaultValue: 'just a quick game',
          required: true
        },
        {
          id: 's1_title',
          label: 'Opening Card Title',
          type: 'text',
          placeholder: 'e.g. hey. got a minute?',
          defaultValue: 'hey. got a minute?',
          required: true
        },
        {
          id: 's1_subtitle',
          label: 'Opening Subtitle / Teaser Quote',
          type: 'textarea',
          placeholder: 'e.g. i made a little guessing game for you. 3 questions only.',
          defaultValue: 'i made a little guessing game for you. 3 questions only.',
          required: true
        },
        {
          id: 's1_button',
          label: 'Start Game Button Label',
          type: 'text',
          placeholder: 'e.g. let's play',
          defaultValue: 'let's play',
          required: true
        }
      ]
    },
    {
      id: 'scene_02_q1',
      number: '04',
      title: 'Scene 02 — Question 01 (Thinking of You)',
      description: 'First interactive question with multiple choices and instant feedback.',
      fields: [
        {
          id: 's2_heading',
          label: 'Question 01 Heading',
          type: 'text',
          placeholder: 'e.g. who do you think has been thinking about you lately?',
          defaultValue: 'who do you think has been thinking about you lately?',
          required: true
        },
        {
          id: 's2_choice_a',
          label: 'Choice A',
          type: 'text',
          placeholder: 'e.g. someone mysterious',
          defaultValue: 'someone mysterious',
          required: true
        },
        {
          id: 's2_choice_b',
          label: 'Choice B',
          type: 'text',
          placeholder: 'e.g. my secret admirer',
          defaultValue: 'my secret admirer',
          required: true
        },
        {
          id: 's2_choice_c',
          label: 'Choice C (Target Answer)',
          type: 'text',
          placeholder: 'e.g. probably you lol',
          defaultValue: 'probably you lol',
          required: true
        },
        {
          id: 's2_feedback',
          label: 'Feedback Reply Text',
          type: 'textarea',
          placeholder: 'e.g. you guessed it. it's been me all along.',
          defaultValue: 'you guessed it. it's been me all along.',
          required: true
        },
        {
          id: 's2_button',
          label: 'Next Question Button Label',
          type: 'text',
          placeholder: 'e.g. next question',
          defaultValue: 'next question',
          required: true
        }
      ]
    },
    {
      id: 'scene_03_q2',
      number: '05',
      title: 'Scene 03 — Question 02 (Wanting to Do)',
      description: 'Second interactive question building up anticipation.',
      fields: [
        {
          id: 's3_heading',
          label: 'Question 02 Heading',
          type: 'text',
          placeholder: 'e.g. what do you think i've been wanting to do lately?',
          defaultValue: 'what do you think i've been wanting to do lately?',
          required: true
        },
        {
          id: 's3_choice_a',
          label: 'Choice A',
          type: 'text',
          placeholder: 'e.g. take you out on a proper date',
          defaultValue: 'take you out on a proper date',
          required: true
        },
        {
          id: 's3_choice_b',
          label: 'Choice B',
          type: 'text',
          placeholder: 'e.g. confess something important',
          defaultValue: 'confess something important',
          required: true
        },
        {
          id: 's3_choice_c',
          label: 'Choice C (Target Answer)',
          type: 'text',
          placeholder: 'e.g. both of the above',
          defaultValue: 'both of the above',
          required: true
        },
        {
          id: 's3_feedback',
          label: 'Feedback Reply Text',
          type: 'textarea',
          placeholder: 'e.g. bingo. i've been holding this in for a while.',
          defaultValue: 'bingo. i've been holding this in for a while.',
          required: true
        },
        {
          id: 's3_button',
          label: 'Next Question Button Label',
          type: 'text',
          placeholder: 'e.g. one last question',
          defaultValue: 'one last question',
          required: true
        }
      ]
    },
    {
      id: 'scene_04_q3',
      number: '06',
      title: 'Scene 04 — Question 03 (Who is this about)',
      description: 'Final question right before the romantic photo reveal.',
      fields: [
        {
          id: 's4_heading',
          label: 'Question 03 Heading',
          type: 'text',
          placeholder: 'e.g. who do you think this whole thing is about?',
          defaultValue: 'who do you think this whole thing is about?',
          required: true
        },
        {
          id: 's4_choice_a',
          label: 'Choice A',
          type: 'text',
          placeholder: 'e.g. someone pretty',
          defaultValue: 'someone pretty',
          required: true
        },
        {
          id: 's4_choice_b',
          label: 'Choice B',
          type: 'text',
          placeholder: 'e.g. the prettiest girl i know',
          defaultValue: 'the prettiest girl i know',
          required: true
        },
        {
          id: 's4_choice_c',
          label: 'Choice C (Target Answer)',
          type: 'text',
          placeholder: 'e.g. you, obviously',
          defaultValue: 'you, obviously',
          required: true
        },
        {
          id: 's4_feedback',
          label: 'Feedback Reply Text',
          type: 'textarea',
          placeholder: 'e.g. smart girl. let me show you.',
          defaultValue: 'smart girl. let me show you.',
          required: true
        },
        {
          id: 's4_button',
          label: 'Reveal Button Label',
          type: 'text',
          placeholder: 'e.g. see who it is',
          defaultValue: 'see who it is',
          required: true
        }
      ]
    },
    {
      id: 'scene_05_reveal',
      number: '07',
      title: 'Scene 05 — Keepsake Photo Reveal',
      description: 'Interactive sliding photo frame revealing her portrait and caption.',
      fields: [
        {
          id: 's5_heading',
          label: 'Reveal Heading',
          type: 'text',
          placeholder: 'e.g. yeah. it's you.',
          defaultValue: 'yeah. it's you.',
          required: true
        },
        {
          id: 's5_caption',
          label: 'Keepsake Photo Caption',
          type: 'textarea',
          placeholder: 'e.g. the exact moment i realized i was completely down bad for you.',
          defaultValue: 'the exact moment i realized i was completely down bad for you.',
          required: true
        },
        {
          id: 's5_frame_note',
          label: 'Frame Tap Hint',
          type: 'text',
          placeholder: 'e.g. tap the frame to slide open',
          defaultValue: 'tap the frame to slide open',
          required: true
        },
        {
          id: 's5_button',
          label: 'Read Letter Button Label',
          type: 'text',
          placeholder: 'e.g. read what i wrote',
          defaultValue: 'read what i wrote',
          required: true
        }
      ]
    },
    {
      id: 'scene_06_letter',
      number: '08',
      title: 'Scene 06 — Handwritten Love Letter',
      description: '4-paragraph personal letter expressing deep genuine feelings.',
      fields: [
        {
          id: 's6_salutation',
          label: 'Letter Salutation',
          type: 'text',
          placeholder: 'e.g. dear kania,',
          defaultValue: 'dear kania,',
          required: true
        },
        {
          id: 's6_para_1',
          label: 'Letter Paragraph 01',
          type: 'textarea',
          placeholder: 'e.g. i've been trying to find the right words to tell you this for what feels like forever...',
          defaultValue: 'i've been trying to find the right words to tell you this for what feels like forever. every time we talk, every time you send me a voice note or give me that soft little smile, i find myself falling a little harder.',
          required: true
        },
        {
          id: 's6_para_2',
          label: 'Letter Paragraph 02',
          type: 'textarea',
          placeholder: 'e.g. you make the simplest ordinary days feel exciting and safe...',
          defaultValue: 'you make the simplest ordinary days feel exciting and safe. i never believed in people becoming someone's favorite comfort place until you became mine.',
          required: true
        },
        {
          id: 's6_para_3',
          label: 'Letter Paragraph 03',
          type: 'textarea',
          placeholder: 'e.g. i don't just want random late night calls; i want all of your days...',
          defaultValue: 'i don't just want random late night calls; i want all of your days. the good ones, the exhausting ones, the ones where you just need someone to listen without judging.',
          required: true
        },
        {
          id: 's6_para_4',
          label: 'Letter Paragraph 04',
          type: 'textarea',
          placeholder: 'e.g. so here i am, laying all my cards on the table...',
          defaultValue: 'so here i am, laying all my cards on the table. no more stealth games, just honest feelings from me to you.',
          required: true
        },
        {
          id: 's6_signoff',
          label: 'Letter Sign-off',
          type: 'text',
          placeholder: 'e.g. with all my heart, arkan',
          defaultValue: 'with all my heart, arkan',
          required: true
        },
        {
          id: 's6_button',
          label: 'Continue Button Label',
          type: 'text',
          placeholder: 'e.g. there's one more thing',
          defaultValue: 'there's one more thing',
          required: true
        }
      ]
    },
    {
      id: 'scene_07_memory',
      number: '09',
      title: 'Scene 07 — Memory Reminder Card',
      description: 'Second romantic photo card with interactive tap reaction.',
      fields: [
        {
          id: 's7_heading',
          label: 'Memory Heading',
          type: 'text',
          placeholder: 'e.g. in case you needed a reminder.',
          defaultValue: 'in case you needed a reminder.',
          required: true
        },
        {
          id: 's7_photo_caption',
          label: 'Memory Photo Caption',
          type: 'textarea',
          placeholder: 'e.g. every little moment with you feels like my favorite movie scene.',
          defaultValue: 'every little moment with you feels like my favorite movie scene.',
          required: true
        },
        {
          id: 's7_tap_note',
          label: 'Photo Tap Hint',
          type: 'text',
          placeholder: 'e.g. tap the photo to reveal my favorite thought',
          defaultValue: 'tap the photo to reveal my favorite thought',
          required: true
        },
        {
          id: 's7_hidden_reaction',
          label: 'Hidden Reaction Message',
          type: 'textarea',
          placeholder: 'e.g. i really, really like you. more than words could ever explain.',
          defaultValue: 'i really, really like you. more than words could ever explain.',
          required: true
        },
        {
          id: 's7_button',
          label: 'Proposal Question Button Label',
          type: 'text',
          placeholder: 'e.g. the real question',
          defaultValue: 'the real question',
          required: true
        }
      ]
    },
    {
      id: 'scene_08_proposal',
      number: '10',
      title: 'Scene 08 — Proposal & Yes/No Runaway Outcome',
      description: 'The final proposal scene with runaway No button and Telegram response link.',
      fields: [
        {
          id: 's8_heading',
          label: 'Proposal Question Heading',
          type: 'text',
          placeholder: 'e.g. will you be mine?',
          defaultValue: 'will you be mine?',
          required: true
        },
        {
          id: 's8_subtitle',
          label: 'Proposal Subtitle',
          type: 'textarea',
          placeholder: 'e.g. i don't want anyone else. just you.',
          defaultValue: 'i don't want anyone else. just you.',
          required: true
        },
        {
          id: 's8_yes_label',
          label: 'Yes Button Text',
          type: 'text',
          placeholder: 'e.g. yes, absolutely!',
          defaultValue: 'yes, absolutely!',
          required: true
        },
        {
          id: 's8_no_label',
          label: 'No Button Text (Runaway Button)',
          type: 'text',
          placeholder: 'e.g. no (try clicking me)',
          defaultValue: 'no (try clicking me)',
          required: true
        },
        {
          id: 's8_outcome_title',
          label: 'Success Outcome Heading',
          type: 'text',
          placeholder: 'e.g. she said yes!',
          defaultValue: 'she said yes!',
          required: true
        },
        {
          id: 's8_outcome_msg',
          label: 'Success Outcome Message',
          type: 'textarea',
          placeholder: 'e.g. best decision ever. let's tell arkan right away!',
          defaultValue: 'best decision ever. let's tell arkan right away!',
          required: true
        },
        {
          id: 's8_reply_btn',
          label: 'Direct Telegram Action Button Text',
          type: 'text',
          placeholder: 'e.g. send answer to arkan',
          defaultValue: 'send answer to arkan',
          required: true
        }
      ]
    }
  ]
};
